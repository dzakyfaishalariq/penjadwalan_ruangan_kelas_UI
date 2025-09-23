<script setup>
import api from '@/apisetting/api';
import { onMounted, ref } from 'vue';

const loadingData = ref(false);
const progres = ref(0);
const dataStorage = JSON.parse(localStorage.getItem('userData'));
const dataHasilRuangan = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(3);
const totalItems = ref(0);
const totalPages = ref(0);

const formatTanggal = (tanggal) => {
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const date = new Date(tanggal);
    const day = date.getDate();
    const month = bulan[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

// panggil api data hasil pemesanan
const requestData = async (page = 1) => {
    try {
        loadingData.value = false;
        progres.value = 25;
        const response = await api.get(`pemilihan_ruangan_mahasiswa_akses_by_id/${dataStorage.id_pemilih}/${itemsPerPage.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page
            }
        })
        progres.value = 50;
        // console.log("response : ",response.data.data.data);
        const myData = response.data.data.data
        // console.log(response.data)
        dataHasilRuangan.value = myData.map(item => ({
            id: item.pemilihan_ruangan_id,
            nama_ruangan: item.nama_ruangan,
            tanggal_pemilihan: formatTanggal(item.tanggal_pemilihan),
            jam_mulai: item.jam_mulai,
            jam_selesai: item.jam_selesai,
            kapasitas: item.kapasitas,
            konfirmasi_kehadiran: item.konfirmasi_kehadiran,
            tipe_pemilihan: item.tipe_pemilihan
        }))
        // console.log(dataHasilRuangan.value);
        totalItems.value = response.data.data.total;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
        progres.value = 100;
    } catch (error) {
        console.error(error);
    } finally {
        loadingData.value = true;
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        requestData(currentPage.value);
    }
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        requestData(currentPage.value);
    }
}

const buttonKonfismasiKehadiran = async (id) => {
    // alert("Konfirmasi kehadiran berhasil " + id);
    const response = await api.put(`/pemilihan_ruangan_mahasiswa_akses/konfirmasi/${id}`, {}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    alert("Konfirmasi kehadiran berhasil " + id);
    requestData(1);
}

const buttonBatalkan = async (id) => {
    // alert("Batalkan kehadiran berhasil " + id);
    const response = await api.put(`/pemilihan_ruangan_mahasiswa_akses/batalkan/${id}`, {}, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    alert("Batalkan kehadiran berhasil " + id);
    requestData(1);
}

onMounted(() => {
    requestData(1);
})
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
    <div class="space-y-4">
        <div v-for="data in dataHasilRuangan" :key="data.id"
            class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-lg">{{ data.nama_ruangan }}</h3>
                    <p class="text-neutral-600">{{ data.tanggal_pemilihan }}</p>
                    <div class="flex items-center gap-4 mt-2 text-sm text-neutral-500">
                        <span>
                            <!-- <i class="fa-solid fa-users mr-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-users" class="mr-1" />
                            Kapasitas: {{ data.kapasitas }}
                        </span>
                        <span>
                            <!-- <i class="fa-solid fa-user-tag mr-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-user-tag" class="mr-1" />
                            {{ data.tipe_pemilihan }}
                        </span>
                    </div>
                </div>
                <div class="text-right">
                    <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-lg text-sm">{{
                        data.jam_mulai.slice(0, 5) }} - {{ data.jam_selesai.slice(0, 5) }} WIB</span>
                    <div class="mt-2">
                        <span class="px-3 py-1 rounded-lg text-sm" :class="{
                            'bg-yellow-100 text-yellow-700': data.konfirmasi_kehadiran === 'Pending',
                            'bg-green-100 text-green-700': data.konfirmasi_kehadiran === 'Hadir',
                            'bg-red-100 text-red-700': data.konfirmasi_kehadiran === 'Tidak Hadir',
                        }">
                            <!-- <i class="fa-solid fa-clock mr-1"></i> -->
                            <font-awesome-icon v-if="data.konfirmasi_kehadiran === 'Pending'" icon="fa-solid fa-clock"
                                class="mr-1" />
                            <font-awesome-icon v-else-if="data.konfirmasi_kehadiran === 'Hadir'"
                                icon="fa-solid fa-check" class="mr-1" />
                            <font-awesome-icon v-else icon="fa-solid fa-xmark" class="mr-1" />
                            {{ data.konfirmasi_kehadiran }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- <div class="flex items-center gap-2 mb-4">
                <i class="fa-solid fa-clock text-neutral-500"></i>
                <span class="text-neutral-600">30 menit sebelum mulai</span>
            </div> -->

            <div class="flex gap-3">
                <button v-if="data.konfirmasi_kehadiran === 'Pending' || data.konfirmasi_kehadiran === 'Tidak Hadir'"
                    @click="buttonBatalkan(data.id)"
                    class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">
                    <i class="fa-solid fa-xmark mr-2"></i>Batalkan
                </button>
                <button v-if="data.konfirmasi_kehadiran === 'Pending' || data.konfirmasi_kehadiran === 'Tidak Hadir'"
                    @click="buttonKonfismasiKehadiran(data.id)"
                    class="flex-1 bg-neutral-900 text-white p-3 rounded-xl hover:bg-neutral-800">
                    <i class="fa-solid fa-check mr-2"></i>Konfirmasi Hadir
                </button>
            </div>
        </div>

        <!-- <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h3 class="text-lg">Ruangan R.302</h3>
                    <p class="text-neutral-600">26 September 2025</p>
                </div>
                <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-lg text-sm">13:00 - 14:40 WIB</span>
            </div>

            <div class="flex items-center gap-2 mb-4">
                <i class="fa-solid fa-clock text-neutral-500"></i>
                <span class="text-neutral-600">2 hari lagi</span>
            </div>

            <div class="flex gap-3">
                <button class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">
                    <i class="fa-solid fa-xmark mr-2"></i>Batalkan
                </button>
                <button class="flex-1 bg-neutral-200 text-neutral-500 p-3 rounded-xl cursor-not-allowed">
                    <i class="fa-solid fa-check mr-2"></i>Konfirmasi Hadir
                </button>
            </div>
        </div>

        <div class="bg-neutral-100 p-6 rounded-xl border border-neutral-200">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h3 class="text-lg text-neutral-500">Ruangan R.303</h3>
                    <p class="text-neutral-500">24 September 2025</p>
                </div>
                <span class="px-3 py-1 bg-white text-neutral-700 rounded-lg text-sm">10:00 - 11:40 WIB</span>
            </div>

            <div class="flex items-center gap-2 text-neutral-500">
                <i class="fa-solid fa-check-circle"></i>
                <span>Selesai</span>
            </div>
        </div> -->
    </div>
    <div class="flex justify-between items-center mt-8">
        <div class="text-sm text-neutral-600">
            Menampilkan {{ itemsPerPage }} dari {{ totalItems }} pemesanan
        </div>

        <div class="flex items-center gap-2">
            <button @click="prevPage" class="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50" :class="{
                'opacity-50 cursor-not-allowed': currentPage === 1
            }" :disabled="currentPage === 1">
                <!-- <i class="fa-solid fa-chevron-left text-neutral-400"></i> -->
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-neutral-600" />
            </button>

            <!-- <div class="flex gap-1">
                <button class="w-8 h-8 bg-neutral-900 text-white rounded-lg text-sm">1</button>
                <button class="w-8 h-8 border border-neutral-200 rounded-lg text-sm hover:bg-neutral-50">2</button>
                <button class="w-8 h-8 border border-neutral-200 rounded-lg text-sm hover:bg-neutral-50">3</button>
                <span class="w-8 h-8 flex items-center justify-center text-neutral-400">...</span>
                <button class="w-8 h-8 border border-neutral-200 rounded-lg text-sm hover:bg-neutral-50">5</button>
            </div> -->

            <button @click="nextPage" class="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50" :class="{
                'opacity-50 cursor-not-allowed': currentPage === totalPages
            }" :disabled="currentPage === totalPages">
                <!-- <i class="fa-solid fa-chevron-right text-neutral-600"></i> -->
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-neutral-600" />
            </button>
        </div>
    </div>
</template>