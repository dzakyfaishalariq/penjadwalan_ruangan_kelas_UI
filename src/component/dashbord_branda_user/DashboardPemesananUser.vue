<script setup>
import { onMounted, ref, computed } from 'vue';
import api from '@/apisetting/api';
import { useRouter } from 'vue-router';
// mengambil data ruangan
const dataRuangan = ref(null);
const dataMatakuliah = ref(null);
const tombolAktif = ref(false);
// const loading = ref(false);
const error = ref(null);
const formData = ref({
    ruangan_id: null,
    jadwal_id: null,
    pemilih_id: null,
    tanggal_pemilihan: '',
    status_pemilihan: null,
    konfirmasi_kehadiran: '',
})
const statusRuangan = ref(null);
const namaRuangan = ref('');
const namaMatakuliah = ref('');
const namaDosen = ref('');
const hari = ref('');
const jamMulai = ref('');
const jamSelesai = ref('');
const popapp = ref(false);
const loadingData = ref(false);
const progres = ref(0);
const router = useRouter();
// validasi inputan tanggal
const error_tanggal = computed(() => {
    if (!formData.value.tanggal_pemilihan) {
        return 'Tanggal pemilihan tidak boleh kosong';
    }
})
// validasi inputan Ruangan 
const error_ruangan = computed(() => {
    if (!formData.value.ruangan_id) {
        return 'Ruangan tidak boleh kosong';
    }
})
// validasi inputan jadwal 
const error_jadwal = computed(() => {
    if (!formData.value.jadwal_id) {
        return 'Jadwal tidak boleh kosong';
    }
})

// akses api nama ruangan 

const fetchData = async () => {
    loadingData.value = false;
    // loading.value = true;
    error.value = null;
    progres.value = 25;
    try {
        if (localStorage.getItem('userRole') == 'Dosen') {
            // memanggil api khususs dosen
            const [responseRuangan, responseMatakuliah] = await Promise.all([
                api.get('/dosen_akses_nama_ruangan', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                    }
                }),
                api.get('/dosen_akses_jadwal_tersedia', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                    }
                })
            ]);
            progres.value = 50;
            // ambil data
            dataRuangan.value = responseRuangan.data.data;
            dataMatakuliah.value = responseMatakuliah.data.data;
        } else if (localStorage.getItem('userRole') == 'Mahasiswa Biasa' || localStorage.getItem('userRole') == 'Komti') {
            // memanggil api khusus mahasiswa
            const [responseRuangan, responseMatakuliah] = await Promise.all([
                api.get('/mahasiswa_akses_nama_ruangan', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                    }
                }),
                api.get('/mahasiswa_akses_jadwal_tersedia', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                    }
                })
            ]);
            progres.value = 50;
            // ambil data
            dataRuangan.value = responseRuangan.data.data;
            dataMatakuliah.value = responseMatakuliah.data.data;
            progres.value = 75;
        }
    } catch (error) {
        error.value = error.response?.data?.message || 'Terjadi kesalahan';
        if (err.response?.status === 401) {
            alert(error.response.data.message);
            localStorage.removeItem('barierToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userData');
            // Redirect ke halaman login
            router.push('/login');
        }
    } finally {
        progres.value = 100;
        // loading.value = false;
        loadingData.value = true;
    }
}

const popappPesanRungan = () => {
    // munculkan popaap
    popapp.value = true;
    // isi id si pemilih
    const dataUser = JSON.parse(localStorage.getItem('userData'));
    formData.value.pemilih_id = dataUser.id_pemilih;
    formData.value.status_pemilihan = 1;
    formData.value.konfirmasi_kehadiran = "Pending";
}

const pesanRuangan = async () => {
    try {
        if (error_tanggal.value || error_ruangan.value || error_jadwal.value) {
            alert("Ruangan dan jadwal matakuliah di form tidak terisi segera isi pada form ruangan");
            return;
        }
        let response;
        if (localStorage.getItem('userRole') == 'Dosen') {
            // input ke API untuk memesan ruangan untuk dosen
            response = await api.post('/pemilihan_ruangan_dosen_akses/booking', formData.value, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
        } else if (localStorage.getItem('userRole') == 'Mahasiswa Biasa' || localStorage.getItem('userRole') == 'Komti') {
            // input ke API untuk memesan ruangan untuk mahasiswa
            response = await api.post('/pemilihan_ruangan_mahasiswa_akses/booking', formData.value, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
        }
        if (response.data.status) {
            alert("Pemesanan ruangan berhasil");
            router.push('/dashboard/status-ruangan');
        }
    } catch (error) {
        alert("Terjadi kesalahan dalam pengisian ruangan, silakan coba lagi keterangan : " + error.response.data.message);
    }
}

const cekStatusRuangan = async () => {
    try {
        if (error_tanggal.value || error_ruangan.value || error_jadwal.value) {
            alert("Ruangan dan jadwal matakuliah di form tidak terisi segera isi pada form ruangan");
            return;
        }
        let responseRuangan, responseJadwal;
        if (localStorage.getItem('userRole') == 'Dosen') {
            // memanggil api data ruangan by id untuk dosen
            responseRuangan = await api.get('/dosen_akses_ruangan_by_id/' + formData.value.ruangan_id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
            // memanggil api data jadwal by id untuk dosen
            responseJadwal = await api.get('/dosen_akses_jadwal_by_id/' + formData.value.jadwal_id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
        } else if (localStorage.getItem('userRole') == 'Mahasiswa Biasa' || localStorage.getItem('userRole') == 'Komti') {
            // memanggil api data ruangan by id untuk mahasiswa
            responseRuangan = await api.get('/mahasiswa_akses_ruangan_by_id/' + formData.value.ruangan_id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
            // memanggil api data jadwal by id
            responseJadwal = await api.get('/mahasiswa_akses_jadwal_by_id/' + formData.value.jadwal_id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
        }
        // console.log(responseRuangan.data.data);
        statusRuangan.value = responseRuangan.data.data.status;
        namaRuangan.value = responseRuangan.data.data.nama_ruangan;
        namaMatakuliah.value = responseJadwal.data.data.nama_matakuliah;
        namaDosen.value = responseJadwal.data.data.nama_dosen;
        hari.value = responseJadwal.data.data.hari;
        jamMulai.value = responseJadwal.data.data.jam_mulai;
        jamSelesai.value = responseJadwal.data.data.jam_selesai;
        if (statusRuangan.value == 1) {
            tombolAktif.value = true;
        }
    } catch (error) {
        alert("Ruangan dan jadwal matakuliah di form tidak terisi segera isi pada form ruangan");
    }
}

const butonPopappClose = () => {
    // hapus semua data
    formData.value.ruangan_id = null;
    formData.value.jadwal_id = null;
    formData.value.pemilihan_id = null;
    formData.value.tanggal_pemilihan = '';
    formData.value.status_pemilihan = null;
    formData.value.konfirmasi_kehadiran = '';
    statusRuangan.value = null;
    namaRuangan.value = '';
    namaMatakuliah.value = '';
    namaDosen.value = '';
    hari.value = '';
    jamMulai.value = '';
    jamSelesai.value = '';
    // tutup popapp
    popapp.value = false;
    tombolAktif.value = false;
}

onMounted(() => {
    fetchData();
});

</script>
<template>
    <!-- Loading Page -->
    <div v-if="!loadingData" id="loading-screen" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div class="text-center">
            <div
                class="w-16 h-16 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin mx-auto mb-4">
            </div>
            <h2 class="text-xl mb-2">Memuat Dashboard</h2>
            <p class="text-neutral-600">Menyiapkan data ruangan dan jadwal...</p>
            <div class="mt-6 w-64 bg-neutral-200 rounded-full h-2 mx-auto">
                <div class="bg-neutral-900 h-2 rounded-full animate-pulse" :style="{ width: progres + '%' }"></div>
            </div>
        </div>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
                <label class="block mb-2 text-sm">Tanggal</label>
                <div class="relative">
                    <input v-model="formData.tanggal_pemilihan" type="date"
                        class="w-full p-3 border border-neutral-200 rounded-xl">
                </div>
                <p class="text-xs text-red-400">{{ error_tanggal }}</p>
            </div>

            <div>
                <label class="block mb-2 text-sm">Ruangan</label>
                <select v-model="formData.ruangan_id" class="w-full p-3 border border-neutral-200 rounded-xl bg-white">
                    <option v-for="data in dataRuangan" :key="data.id" :disabled="!data.status" :value="data.id"
                        :class="!data.status ? 'text-red-400' : ''">
                        {{ data.nama_ruangan }}
                    </option>
                </select>
                <p class="text-xs text-red-400">{{ error_ruangan }}</p>
            </div>

        </div>
        <div>
            <label class="block mb-2 text-sm">Jadwal Matakuliah</label>
            <select v-model="formData.jadwal_id" class="w-full p-3 border border-neutral-200 rounded-xl bg-white">
                <option v-for="data in dataMatakuliah" :key="data.id" :value="data.id">
                    {{ data.nama_matakuliah }}, {{ data.nama_dosen }} - {{ data.hari }} - waktu : {{ data.jam_mulai
                    }}-{{ data.jam_selesai }}
                </option>
            </select>
            <p class="text-xs text-red-400">{{ error_jadwal }}</p>
        </div>

        <div v-if="statusRuangan == 1" class="flex items-center gap-3 p-4 bg-green-50 rounded-xl mb-6 mt-4">
            <!-- <i class="fa-solid fa-circle-check text-neutral-700"></i> -->
            <font-awesome-icon icon="fa-solid fa-circle-check" class="text-neutral-700" />
            <span>Ruangan tersedia pada slot waktu terpilih</span>
        </div>
        <div v-else-if="statusRuangan == 0" class="flex items-center gap-3 p-4 bg-red-50 rounded-xl mb-6 mt-4">
            <!-- <i class="fa-solid fa-circle-xmark text-red-700"></i> -->
            <font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-neutral-700" />
            <span>Ruangan tidak tersedia pada slot waktu terpilih</span>
        </div>
        <div v-else class="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl mb-6 mt-4">
            <!-- <i class="fa-solid fa-circle-info text-neutral-700"></i> -->
            <font-awesome-icon icon="fa-solid fa-circle-info" class="text-neutral-700" />
            <span>Ruangan belum diisi</span>
        </div>

        <button @click="cekStatusRuangan" class="w-full bg-green-900 text-white p-4 rounded-xl hover:bg-green-800">
            Cek Status Ruangan
        </button>
        <button @click="popappPesanRungan" :disabled="!tombolAktif"
            class="w-full bg-neutral-900 text-white p-4 rounded-xl mt-3 hover:bg-neutral-800"
            :class="!tombolAktif ? 'opacity-50 cursor-not-allowed' : ''">
            Pesan Sekarang
        </button>
    </div>
    <div v-if="popapp" id="modal" class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[400px]">
            <h3 class="text-xl mb-4">Konfirmasi Pemesanan</h3>

            <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                    <span class="text-neutral-600">Ruangan</span>
                    <span>{{ namaRuangan }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Hari</span>
                    <span>{{ hari }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Tanggal</span>
                    <span>{{ formData.tanggal_pemilihan }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Waktu</span>
                    <span>{{ jamMulai }} - {{ jamSelesai }} WIB</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Status</span>
                    <span class="text-neutral-900">{{ statusRuangan == 1 ? 'Tersedia' : 'Tidak Tersedia' }}</span>
                </div>

            </div>

            <div class="flex gap-3">
                <button @click="butonPopappClose"
                    class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Batalkan</button>
                <button @click="pesanRuangan"
                    class="flex-1 bg-neutral-900 text-white p-3 rounded-xl hover:bg-neutral-800">Konfirmasi</button>
            </div>
        </div>
    </div>
</template>