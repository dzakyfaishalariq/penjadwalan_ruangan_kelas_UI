<script setup>
import api from '@/apisetting/api';
import { computed, onMounted, ref } from 'vue';

// inisialisasi variabel
const dataJadwalMatakuliah = ref(null);
const dataMatakuliah = ref(null);
const dataDosen = ref(null);
const loadingData = ref(false);
const poappTambahJadwalMatakuliah = ref(false);
const poappEditJadwalMatakuliah = ref(false);

const currentPage = ref(1);
const itemsPerPage = ref(5);
const totalItems = ref(0);
const totalPages = ref(0);
const serchtext = ref('');

const jadwal_id = ref(null);
const matakuliah_id = ref(null);
const dosen_id = ref(null);
const hari = ref("");
const jam_mulai = ref("");
const jam_selesai = ref("");
// akse api jadwal matakuliah
const fetchData = async (page = 1) => {
    try {
        // akses jadwal matakuliah
        const response = await api.get(`/dosen_akses_jadwal/${itemsPerPage.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page
            }
        })
        dataJadwalMatakuliah.value = response.data.data.data
        totalItems.value = response.data.data.total;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
        // console.log(dataDosen.value)
        // console.log(dataJadwalMatakuliah.value)
        // console.log(dataMatakuliah.value)
    } catch (error) {
        console.log(error)
    } finally {
        loadingData.value = true
    }
}

// navigation methods
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchData(currentPage.value);
    }
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fetchData(currentPage.value);
    }
}

const fetchData2 = async () => {
    // akses matakuliah
    const responseMatakuliah = await api.get('/dosen_akses_matkul_tersedia', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    dataMatakuliah.value = responseMatakuliah.data.data
    // akses dosen
    const responseDosen = await api.get('/data_akses_dosen', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    dataDosen.value = responseDosen.data.data
}
// validasi inputan matakuliah id
const error_matakuliah_id = computed(() => {
    if (!matakuliah_id.value) {
        return 'Matakuliah harus diisi'
    }
})
// validasi inputan dosen id
const error_dosen_id = computed(() => {
    if (!dosen_id.value) {
        return 'Dosen harus diisi'
    }
})
// validasi inputan hari
const error_hari = computed(() => {
    if (!hari.value) {
        return 'Hari harus diisi'
    }
})
// validasi inputan jam mulai
const error_jam_mulai = computed(() => {
    if (!jam_mulai.value) {
        return 'Jam mulai harus diisi'
    }
})
// validasi inputan jam selesai
const error_jam_selesai = computed(() => {
    if (!jam_selesai.value) {
        return 'Jam selesai harus diisi'
    }
})
// tambah jadwal matakuliah
const tambahJadwalMatakuliah = async () => {

    try {
        // validasi 
        if (error_matakuliah_id.value || error_dosen_id.value || error_hari.value || error_jam_mulai.value || error_jam_selesai.value) {
            alert("Form tidak terisi segera isi pada form jadwal matakuliah");
            return;
        }
        const response = await api.post('/dosen_akses_jadwal/add', {
            matakuliah_id: matakuliah_id.value,
            dosen_id: dosen_id.value,
            hari: hari.value,
            jam_mulai: jam_mulai.value,
            jam_selesai: jam_selesai.value
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
        matakuliah_id.value = null
        dosen_id.value = null
        hari.value = ""
        jam_mulai.value = ""
        jam_selesai.value = ""
        console.log(response.data)
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    } finally {
        poappTambahJadwalMatakuliah.value = false
        fetchData()
    }
}

// edit jadwal matakuliah
const editJadwalMatakuliah = async (item) => {
    poappEditJadwalMatakuliah.value = true
    console.log(item)
    jadwal_id.value = item.jadwal_matakuliah_id
    matakuliah_id.value = item.matakuliah_id
    dosen_id.value = item.dosen_id
    hari.value = item.hari
    jam_mulai.value = item.jam_mulai
    jam_selesai.value = item.jam_selesai
}

// update jadwal matakuliah
const updateJadwalMatakuliah = async (id) => {
    try {
        const response = await api.put(`/dosen_akses_jadwal/update/${id}`, {
            matakuliah_id: matakuliah_id.value,
            dosen_id: dosen_id.value,
            hari: hari.value,
            jam_mulai: jam_mulai.value,
            jam_selesai: jam_selesai.value
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
        console.log(response.data)
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    } finally {
        poappEditJadwalMatakuliah.value = false
        fetchData()
    }
}

// hapus data jadwal matakuliah
const hapusJadwalMatakuliah = async (id) => {
    try {
        const response = await api.delete(`/dosen_akses_jadwal/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        console.log(response.data)
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    } finally {
        fetchData()
    }
}

onMounted(() => {
    fetchData(1);
    fetchData2();
})
</script>
<template>
    <div class="pb-4">
        <button @click="poappTambahJadwalMatakuliah = true"
            class="px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800">
            <i class="fa-solid fa-plus mr-2"></i>Tambah Mata Kuliah
        </button>
    </div>
    <div class="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        <table class="w-full">
            <thead class="bg-neutral-100">
                <tr>
                    <th class="text-left p-4">Mata Kuliah</th>
                    <th class="text-left p-4">Kode</th>
                    <th class="text-left p-4">SKS</th>
                    <th class="text-left p-4">Jadwal</th>
                    <th class="text-left p-4">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataJadwalMatakuliah" :key="item.jadwal_matakuliah_id"
                    class="border-t border-neutral-200">
                    <td class="p-4">
                        <div>
                            <p>{{ item.nama_matakuliah }}</p>
                            <p class="text-sm text-neutral-500">{{ item.nama_dosen }}</p>
                        </div>
                    </td>
                    <td class="p-4">{{ item.kodemk }}</td>
                    <td class="p-4">{{ item.sks }}</td>
                    <td class="p-4">
                        <div class="text-sm">
                            <p>{{ item.hari }}, {{ item.jam_mulai.slice(0, 5) }} - {{ item.jam_selesai.slice(0, 5) }}
                            </p>
                            <p class="text-neutral-500">R.301</p>
                        </div>
                    </td>

                    <td class="p-4">
                        <div class="flex gap-2">
                            <button @click="editJadwalMatakuliah(item)"
                                class="p-2 text-neutral-600 hover:bg-neutral-50 rounded-lg">
                                <!-- <i class="fa-solid fa-pen-to-square"></i> -->
                                <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                            </button>
                            <button @click="hapusJadwalMatakuliah(item.jadwal_matakuliah_id)"
                                class="p-2 text-neutral-600 hover:bg-neutral-50 rounded-lg">
                                <!-- <i class="fa-solid fa-trash"></i> -->
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </button>
                        </div>
                    </td>
                    <!-- modal edit  -->
                    <div v-if="poappEditJadwalMatakuliah" id="add-course-modal"
                        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
                        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
                            <div class="p-6 border-b border-neutral-200">
                                <div class="flex justify-between items-center">
                                    <h2 class="text-xl">Tambah Mata Kuliah</h2>
                                    <button class="text-neutral-500 hover:text-neutral-700">
                                        <i class="fa-solid fa-times"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="p-6 space-y-4">
                                <div class="grid grid-cols-1 gap-4">
                                    <div>
                                        <label class="block text-sm mb-1">Nama Mata Kuliah</label>
                                        <select class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                                            v-model="matakuliah_id">
                                            <option disabled>Pilih Matakuliah</option>
                                            <option v-for="item in dataMatakuliah" :key="item.id" :value="item.id">{{
                                                item.nama_matakuliah }} - {{ item.kodemk }}</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm mb-1">Dosen</label>
                                        <select v-model="dosen_id"
                                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                                            <option disabled>Nama Dosen</option>
                                            <option v-for="item in dataDosen" :key="item.id" :value="item.id">{{
                                                item.nama }}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm mb-1">Hari</label>
                                        <select v-model="hari"
                                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                                            <option disabled>Pilih Hari</option>
                                            <option value="Senin">Senin</option>
                                            <option value="Selasa">Selasa</option>
                                            <option value="Rabu">Rabu</option>
                                            <option value="Kamis">Kamis</option>
                                            <option value="Jumat">Jumat</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-4">
                                    <div>
                                        <label class="block text-sm mb-1">Waktu</label>
                                        <div class="flex gap-2">
                                            <input v-model="jam_mulai" type="time"
                                                class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                                                min="08:00" max="17:00">
                                            <span class="flex items-center">-</span>
                                            <input v-model="jam_selesai" type="time"
                                                class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                                                min="08:00" max="17:00">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                                <button @click="poappEditJadwalMatakuliah = !poappEditJadwalMatakuliah"
                                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                                    Batal
                                </button>
                                <button @click="updateJadwalMatakuliah(jadwal_id)"
                                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="flex justify-between items-center mt-8">
        <div class="text-sm text-neutral-600">
            Menampilkan 1 - {{ itemsPerPage }} dari {{ totalItems }} mata kuliah
        </div>

        <div class="flex items-center gap-2">
            <button @click="prevPage"
                class="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === 1">
                <!-- <i class="fa-solid fa-chevron-left text-neutral-400"></i> -->
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-neutral-600" />
            </button>

            <!-- <div class="flex gap-1">
                <button class="w-8 h-8 bg-neutral-900 text-white rounded-lg text-sm">1</button>
                <button class="w-8 h-8 border border-neutral-200 rounded-lg text-sm hover:bg-neutral-50">2</button>
            </div> -->

            <button @click="nextPage" class="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50"
                :disabled="currentPage === totalPages"
                :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">
                <!-- <i class="fa-solid fa-chevron-right text-neutral-600"></i> -->
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-neutral-600" />
            </button>
        </div>
    </div>
    <!-- modal tambah jadwal -->
    <div v-if="poappTambahJadwalMatakuliah" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Mata Kuliah</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Mata Kuliah</label>
                        <select class="w-full px-3 py-2 border border-neutral-200 rounded-lg" v-model="matakuliah_id">
                            <option disabled>Pilih Matakuliah</option>
                            <option v-for="item in dataMatakuliah" :key="item.id" :value="item.id">{{
                                item.nama_matakuliah }} - {{ item.kodemk }}</option>
                        </select>
                    </div>
                    <!-- <div>
                        <label class="block text-sm mb-1">Kode Mata Kuliah</label>
                        <input disabled type="text" class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                    </div> -->
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Dosen</label>
                        <select v-model="dosen_id" class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option disabled>Nama Dosen</option>
                            <option v-for="item in dataDosen" :key="item.id" :value="item.id">{{ item.nama }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Hari</label>
                        <select v-model="hari" class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option disabled>Pilih Hari</option>
                            <option value="Senin">Senin</option>
                            <option value="Selasa">Selasa</option>
                            <option value="Rabu">Rabu</option>
                            <option value="Kamis">Kamis</option>
                            <option value="Jumat">Jumat</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Waktu</label>
                        <div class="flex gap-2">
                            <input v-model="jam_mulai" type="time"
                                class="w-full px-3 py-2 border border-neutral-200 rounded-lg" min="08:00" max="17:00">
                            <span class="flex items-center">-</span>
                            <input v-model="jam_selesai" type="time"
                                class="w-full px-3 py-2 border border-neutral-200 rounded-lg" min="08:00" max="17:00">
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="poappTambahJadwalMatakuliah = !poappTambahJadwalMatakuliah"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="tambahJadwalMatakuliah"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>