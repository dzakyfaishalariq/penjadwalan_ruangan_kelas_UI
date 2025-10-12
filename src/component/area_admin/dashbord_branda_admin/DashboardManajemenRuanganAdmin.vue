<script setup>
import api from '@/apisetting/api';
import { onMounted, ref, watch } from 'vue';

const dataRuangan = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);
const totalPages = ref(0);
const serchtext = ref('');
const formRuangan = ref({
    prodi_id: null,
    nama_ruangan: '',
    kapasitas: null,
    status: null,
    lantai: null
})
const seeRuangan = ref({});
const popappTambahRuangan = ref(false);
const popappInfoRuangan = ref(false);
const popappEditRuangan = ref(false);


const totalRuangan = ref(0);
const totalRuanganTersedia = ref(0);
const totalRuanganDipakai = ref(0);
const totalKapasitasSemuaRuangan = ref(0);
const dataProdi = ref(null);

let setTimeOut = null;
watch(serchtext, (newValue) => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
        fectDataRuangan(1, newValue);
    }, 500);
})

const tambahRuangan = async () => {
    try {
        const response = await api.post(`/admin_akses_ruangan/add`, formRuangan.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            popappTambahRuangan.value = false;
            formRuangan.value.prodi_id = null;
            formRuangan.value.nama_ruangan = '';
            formRuangan.value.kapasitas = null;
            formRuangan.value.status = null;
            fectDataRuangan(1);
        }
    } catch (error) {
        console.log(error)
    }
}
const seeRuanganInfo = (prodi, nama_ruangan, kapasitas, status, lantai) => {
    popappInfoRuangan.value = true;
    seeRuangan.value.prodi = prodi;
    seeRuangan.value.nama_ruangan = nama_ruangan;
    seeRuangan.value.kapasitas = kapasitas;
    seeRuangan.value.status = status;
    seeRuangan.value.lantai = lantai;
}

const editRuangan = (id, prodi_id, nama_ruangan, kapasitas, status, lantai) => {
    popappEditRuangan.value = true;
    formRuangan.value.id = id
    formRuangan.value.prodi_id = prodi_id;
    formRuangan.value.nama_ruangan = nama_ruangan;
    formRuangan.value.kapasitas = kapasitas;
    formRuangan.value.status = status;
    formRuangan.value.lantai = lantai;
}

const prosesEditRuangan = async () => {
    try {
        const response = await api.put(`/admin_akses_ruangan/update/${formRuangan.value.id}`, {
            prodi_id: formRuangan.value.prodi_id,
            nama_ruangan: formRuangan.value.nama_ruangan,
            kapasitas: formRuangan.value.kapasitas,
            status: formRuangan.value.status,
            lantai: formRuangan.value.lantai
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            popappEditRuangan.value = false;
            fectDataRuangan(1, serchtext.value);
        }
    } catch (error) {
        console.log(error)
    }
}

const hapusRuangan = async (id) => {
    try {
        const response = await api.delete(`/admin_akses_ruangan/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            fectDataRuangan(1, serchtext.value);
        }
    } catch (error) {
        console.log(error)
    }
}

const fectData = async () => {
    // response total ruangan 
    const responseTotalRuangan = await api.get('/admin_akses_total_semua_ruangan', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    // response total ruangan tersedia
    const responseTotalRuanganTersedia = await api.get('/admin_akses_total_ruangan_tersedia', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    // response total ruangan dipakai
    const responseTotalRuanganDipakai = await api.get('/admin_akses_total_ruangan_terpakai', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    // repsonse total kapasitas semua ruangan di pakai
    const responseTotalKapasitasSemuaRuangan = await api.get('/admin_akses_total_kapasitas_ruangan', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    // response data prodi
    const responseProdi = await api.get('/admin_akses_semua_prodi', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    totalRuangan.value = responseTotalRuangan.data.data;
    totalRuanganTersedia.value = responseTotalRuanganTersedia.data.data;
    totalRuanganDipakai.value = responseTotalRuanganDipakai.data.data;
    totalKapasitasSemuaRuangan.value = responseTotalKapasitasSemuaRuangan.data.data;
    dataProdi.value = responseProdi.data.data
}
const fectDataRuangan = async (page = 1, serchData = '') => {
    try {
        const response = await api.get(`/admin_akses_semua_ruangan/${itemsPerPage.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                search: serchData
            }
        })
        dataRuangan.value = response.data.data.data
        // console.log(dataRuangan.value)
        totalItems.value = response.data.data.total;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    } catch (error) {
        console.log(error)
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fectDataRuangan(currentPage.value);
    }
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fectDataRuangan(currentPage.value);
    }
}

onMounted(() => {
    fectData();
    fectDataRuangan(1);
})

</script>
<template>
    <div id="room-management-content" class="p-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Ruangan</p>
                        <p class="text-2xl text-neutral-900">{{ totalRuangan }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-building text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-building" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Ruangan Tersedia</p>
                        <p class="text-2xl text-neutral-900">{{ totalRuanganTersedia }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-circle-check text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-circle-check" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Ruangan Terpakai</p>
                        <p class="text-2xl text-neutral-900">{{ totalRuanganDipakai }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-circle-dot text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-circle-dot" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Kapasitas Total</p>
                        <p class="text-2xl text-neutral-900">{{ totalKapasitasSemuaRuangan }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-users text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Room Management Table -->
        <div id="room-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Ruangan</h2>
                        <p class="text-sm text-neutral-600">Kelola semua ruangan kelas dan fasilitas</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input v-model.trim="serchtext" type="text" placeholder="Cari ruangan..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64">
                        </div>
                        <select v-model.trim="serchtext"
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Status</option>
                            <option value="tersedia">Tersedia</option>
                            <option value="dipakai">Dipakai</option>
                        </select>
                        <button @click="popappTambahRuangan = true"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Ruangan
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Nama Ruangan
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Kapasitas
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Fasilitas</th> -->
                            <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Jadwal Hari Ini</th> -->
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataRuangan" :key="data.ruangan_id"
                            class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div>
                                    <p class="text-neutral-900">{{ data.nama_ruangan }}</p>
                                    <p class="text-sm text-neutral-500">Lantai {{ data.lantai }} - {{ data.nama_prodi }}
                                    </p>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">{{ data.kapasitas }} orang</td>
                            <!-- <td class="p-4">
                                <div class="flex space-x-2">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Proyektor</span>
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">AC</span>
                                </div>
                            </td> -->
                            <td class="p-4">
                                <span v-if="data.status == 1"
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Tersedia</span>
                                <span v-else class="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full">Di
                                    Pakai</span>
                            </td>
                            <!-- <td class="p-4">
                                <div class="text-sm">
                                    <p class="text-neutral-900">08:00 - 10:00</p>
                                    <p class="text-neutral-500">Matematika Diskrit</p>
                                </div>
                            </td> -->
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        @click="seeRuanganInfo(data.nama_prodi, data.nama_ruangan, data.kapasitas, data.status, data.lantai)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        @click="editRuangan(data.ruangan_id, data.prodi_id, data.nama_ruangan, data.kapasitas, data.status, data.lantai)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button @click="hapusRuangan(data.ruangan_id)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-neutral-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-600">
                        Menampilkan 1 - {{ itemsPerPage }} dari {{ totalItems }} ruangan
                    </p>
                    <div class="flex items-center space-x-2">
                        <button @click="prevPage"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>
                        <!-- <button class="px-3 py-1 bg-neutral-900 text-white rounded text-sm">1</button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">2</button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">3</button> -->
                        <button @click="nextPage"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- modal tambah Ruangan  -->
    <div v-if="popappTambahRuangan" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Ruangan</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="formRuangan.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <option v-for="item in dataProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Nama Ruangan</label>
                        <input v-model="formRuangan.nama_ruangan" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Contoh: Aula / Auditorium">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Kapasitas</label>
                        <input v-model="formRuangan.kapasitas" type="number"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Contoh: 50">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Status</label>
                        <select v-model="formRuangan.status"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Status</option>
                            <option value=1>Tersedia</option>
                            <option value=0>Di Pakai</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Lantai</label>
                        <input v-model="formRuangan.lantai" type="number"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Contoh: 1">
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappTambahRuangan = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="tambahRuangan"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>
    <!-- modal lihat info ruangan -->
    <div v-if="popappInfoRuangan" id="modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[400px]">
            <h3 class="text-xl mb-4">Info Ruangan</h3>

            <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                    <span class="text-neutral-600">Ruangan</span>
                    <span>{{ seeRuangan.nama_ruangan }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Prodi</span>
                    <span>{{ seeRuangan.prodi }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Kapasitas</span>
                    <span>{{ seeRuangan.kapasitas }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Status</span>
                    <span class="text-neutral-900">{{ seeRuangan.status }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Lantai</span>
                    <span>{{ seeRuangan.lantai }}</span>
                </div>
            </div>

            <div class="flex gap-3">
                <button @click="popappInfoRuangan = false"
                    class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Oke</button>
            </div>
        </div>
    </div>
    <!-- modal edit ruangan -->
    <div v-if="popappEditRuangan" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Edit Ruangan</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="formRuangan.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <option v-for="item in dataProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Nama Ruangan</label>
                        <input v-model="formRuangan.nama_ruangan" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Contoh: Aula / Auditorium">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Kapasitas</label>
                        <input v-model="formRuangan.kapasitas" type="number"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Contoh: 50">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Status</label>
                        <select v-model="formRuangan.status"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Status</option>
                            <option value=1>Tersedia</option>
                            <option value=0>Di Pakai</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Lantai</label>
                        <input v-model="formRuangan.lantai" type="number"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Contoh: 1">
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappEditRuangan = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesEditRuangan"
                    class=" px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>