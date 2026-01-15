<script setup>
import api from '@/apisetting/api';
import { onMounted, ref, watch } from 'vue';

const totalFakultas = ref(0);
const totalProdi = ref(0);
const totalMatkul = ref(0);

const dataFakultas = ref(null);
const currentPageFakultas = ref(1);
const itemsPerPageFakultas = ref(5);
const totalItemsFakultas = ref(0);
const totalPagesFakultas = ref(0);
const popappTambahFakultas = ref(false);
const popappEditFakultas = ref(false);
const popappInfoFakultas = ref(false);
const formFakultas = ref({
    nama_fakultas: ''
})
const seeFakultas = ref({})

const dataProdi = ref(null);
const currentPageProdi = ref(1);
const itemsPerPageProdi = ref(5);
const totalItemsProdi = ref(0);
const totalPagesProdi = ref(0);
const popappInfoProdi = ref(false);
const popappTambahProdi = ref(false);
const popappEditProdi = ref(false);
const seeProdi = ref({})
const formProdi = ref({
    fakultas_id: '',
    nama_prodi: '',
})

const dataMatkul = ref(null);
const currentPageMatkul = ref(1);
const itemsPerPageMatkul = ref(5);
const totalItemsMatkul = ref(0);
const totalPagesMatkul = ref(0);
const popappInfoMatakuliah = ref(false);
const popappTambahMatakuliah = ref(false);
const popappEditMatakuliah = ref(false);
const seeMatakuliah = ref({})
const formMatakuliah = ref({
    prodi_id: null,
    nama_matakuliah: '',
    sks: null,
    kodemk: '',
})

const fakultasUI = ref(true);
const prodiUI = ref(false);
const matakuliahUI = ref(false);

const uiFakultas = () => {
    fakultasUI.value = true;
    prodiUI.value = false;
    matakuliahUI.value = false;
}
const uiProdi = () => {
    fakultasUI.value = false;
    prodiUI.value = true;
    matakuliahUI.value = false;
}
const uiMatkul = () => {
    fakultasUI.value = false;
    prodiUI.value = false;
    matakuliahUI.value = true;
}

const infoFakultas = (nama_fakultas, jumlah_prodi) => {
    popappInfoFakultas.value = true;
    seeFakultas.value = {
        nama_fakultas: nama_fakultas,
        jumlah_prodi: jumlah_prodi
    }

}

const infoProdi = (nama_prodi, fakultas) => {
    popappInfoProdi.value = true;
    seeProdi.value = {
        nama_prodi: nama_prodi,
        fakultas: fakultas
    }
}

const infoMatakuliah = (kodemk, nama_matakuliah, nama_prodi, sks) => {
    popappInfoMatakuliah.value = true;
    seeMatakuliah.value = {
        kodemk: kodemk,
        nama_matakuliah: nama_matakuliah,
        nama_prodi: nama_prodi,
        sks: sks
    }
}

const editFakultas = (id, fakultas) => {
    popappEditFakultas.value = true;
    formFakultas.value.id = id
    formFakultas.value.nama_fakultas = fakultas
}

const editProdi = (id, prodi, fakultas) => {
    popappEditProdi.value = true;
    seeProdi.value.id = id
    seeProdi.value.prodi = prodi
    seeProdi.value.fakultas = fakultas
}

const editMatakuliah = (id, kodemk, nama_matakuliah, sks, prodi_id) => {
    popappEditMatakuliah.value = true;
    seeMatakuliah.value.id = id
    seeMatakuliah.value.kodemk = kodemk
    seeMatakuliah.value.nama_matakuliah = nama_matakuliah
    seeMatakuliah.value.sks = sks
    seeMatakuliah.value.prodi = prodi_id
}

const prosesEditFakultas = async () => {
    try {
        const response = await api.put(`/admin_akses_fakultas/update/${formFakultas.value.id}`, {
            nama_fakultas: formFakultas.value.nama_fakultas
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            popappEditFakultas.value = false;
            fectDataFakultas(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const prosesEditProdi = async () => {
    try {
        const response = await api.put(`/admin_akses_prodi/update/${seeProdi.value.id}`, {
            fakultas_id: seeProdi.value.fakultas,
            nama_prodi: seeProdi.value.prodi
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        });
        if (response.data.status) {
            popappEditProdi.value = false;
            fectDataProdi(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const prosesEditMatakuliah = async () => {
    try {
        const response = await api.put(`/admin_akses_matakuliah/update/${seeMatakuliah.value.id}`, {
            prodi_id: seeMatakuliah.value.prodi,
            nama_matakuliah: seeMatakuliah.value.nama_matakuliah,
            sks: seeMatakuliah.value.sks,
            kodemk: seeMatakuliah.value.kodemk
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            });
        if (response.data.status) {
            popappEditMatakuliah.value = false;
            fectDataMatkul(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const hapusFakultas = async (id) => {
    try {
        const response = await api.delete(`/admin_akses_fakultas/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            fectDataFakultas(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const hapusProdi = async (id) => {
    try {
        const response = await api.delete(`/admin_akses_prodi/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            fectDataProdi(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const hapusMatakuliah = async (id) => {
    try {
        const response = await api.delete(`/admin_akses_matakuliah/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            fectDataMatkul(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const tambahFakultas = async () => {
    try {
        const response = await api.post('/admin_akses_fakultas/add', formFakultas.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            popappTambahFakultas.value = false;
            formFakultas.value.nama_fakultas = '';
            fectDataFakultas(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const tambahProdi = async () => {
    try {
        const response = await api.post(`/admin_akses_prodi/add`, formProdi.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        });
        if (response.data.status) {
            popappTambahProdi.value = false;
            formProdi.value.fakultas_id = '';
            formProdi.value.nama_prodi = '';
            fectDataProdi(1);
        } tambahMatakuliah
    } catch (error) {
        console.log(error)
    }
}

const tambahMatakuliah = async () => {
    try {
        const response = await api.post(`/admin_akses_matakuliah/add`, formMatakuliah.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            popappTambahMatakuliah.value = false;
            formMatakuliah.value.prodi_id = null;
            formMatakuliah.value.nama_matakuliah = '';
            formMatakuliah.value.sks = null;
            formMatakuliah.value.kodemk = '';
            fectDataMatkul(1);
        }
    } catch (error) {
        console.log(error)
    }
}
const dataAllFakultas = ref(null);
const aksesDataAllFakultas = async () => {
    try {
        const response = await api.get('/admin_akses_semua_fakultas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        dataAllFakultas.value = response.data.data
        // console.log(dataAllFakultas.value)
    } catch (error) {
        console.log(error)
    }
}
// data total untuk fakultas, prodi dan matakuliah
const fectDataTotal = async () => {
    try {
        const responTotalFakultas = await api.get('/admin_akses_total_fakultas', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        const responseTotalProdi = await api.get('/admin_akses_total_prodi', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        const responseTotalMatkul = await api.get('/admin_akses_total_matakuliah', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        // ambil data
        totalFakultas.value = responTotalFakultas.data.data;
        totalProdi.value = responseTotalProdi.data.data;
        totalMatkul.value = responseTotalMatkul.data.data;
    } catch (error) {
        console.log(error)
    }
}
// pencarian fakultas
const serchFakultas = ref('');

let setTimeOutFakultas = null;
watch(serchFakultas, (newValue) => {
    clearTimeout(setTimeOutFakultas);
    setTimeOutFakultas = setTimeout(() => {
        fectDataFakultas(1, newValue);
    }, 500);
})

// data fakultas
const fectDataFakultas = async (page = 1, serchData = '') => {
    try {
        const response = await api.get(`/admin_akses_fakultas/${itemsPerPageFakultas.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                serch: serchData
            }
        })
        dataFakultas.value = response.data.data.data
        // console.log(dataFakultas.value)
        totalItemsFakultas.value = response.data.data.total;
        totalPagesFakultas.value = Math.ceil(totalItemsFakultas.value / itemsPerPageFakultas.value);
    } catch (error) {
        console.log(error)
    }
}

const nextPageFakultas = () => {
    if (currentPageFakultas.value < totalPagesFakultas.value) {
        currentPageFakultas.value++;
        fectDataFakultas(currentPageFakultas.value);
    }
}

const prevPageFakultas = () => {
    if (currentPageFakultas.value > 1) {
        currentPageFakultas.value--;
        fectDataFakultas(currentPageFakultas.value);
    }
}

// data prodi

const serchProdi = ref('');

let setTimeOutProdi = null;
watch(serchProdi, (newValue) => {
    clearTimeout(setTimeOutProdi);
    setTimeOutProdi = setTimeout(() => {
        fectDataProdi(1, newValue);
    }, 500);
})

const dataAllProdi = ref(null);
const aksesDataAllProdi = async () => {
    try {
        const response = await api.get('/admin_akses_semua_prodi', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        dataAllProdi.value = response.data.data
        // console.log(dataAllProdi.value)
    } catch (error) {
        console.log(error)
    }
}

const fectDataProdi = async (page = 1, serchData = '') => {
    try {
        const response = await api.get(`/admin_akses_prodi/${itemsPerPageProdi.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                serch: serchData
            }
        })
        dataProdi.value = response.data.data.data
        // console.log(dataProdi.value)
        totalItemsProdi.value = response.data.data.total;
        totalPagesProdi.value = Math.ceil(totalItemsProdi.value / itemsPerPageProdi.value);
    } catch (error) {
        console.log(error)
    }
}

const nextPageProdi = () => {
    if (currentPageProdi.value < totalPagesProdi.value) {
        currentPageProdi.value++;
        fectDataProdi(currentPageProdi.value);
    }
}

const prevPageProdi = () => {
    if (currentPageProdi.value > 1) {
        currentPageProdi.value--;
        fectDataProdi(currentPageProdi.value);
    }
}

// data matakuliah

const serchMatkul = ref('');

let setTimeOutMatkul = null;
watch(serchMatkul, (newValue) => {
    clearTimeout(setTimeOutMatkul);
    setTimeOutMatkul = setTimeout(() => {
        fectDataMatkul(1, newValue);
    }, 500);
})

const fectDataMatkul = async (page = 1, serchData = '') => {
    try {
        const response = await api.get(`/admin_akses_matakuliah/${itemsPerPageMatkul.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                serch: serchData
            }
        })
        dataMatkul.value = response.data.data.data
        // console.log(dataMatkul.value)
        totalItemsMatkul.value = response.data.data.total;
        totalPagesMatkul.value = Math.ceil(totalItemsMatkul.value / itemsPerPageMatkul.value);
    } catch (error) {
        console.log(error)
    }
}

const nextPageMatkul = () => {
    if (currentPageMatkul.value < totalPagesMatkul.value) {
        currentPageMatkul.value++;
        fectDataMatkul(currentPageMatkul.value);
    }
}

const prevPageMatkul = () => {
    if (currentPageMatkul.value > 1) {
        currentPageMatkul.value--;
        fectDataMatkul(currentPageMatkul.value);
    }
}

onMounted(() => {
    fectDataTotal();
    fectDataFakultas(1);
    fectDataProdi(1);
    fectDataMatkul(1);
    aksesDataAllFakultas();
    aksesDataAllProdi();
})

</script>
<template>
    <div id="academic-management-content" class="p-8">
        <!-- Tab Navigation -->
        <div class="mb-8">
            <div class="border-b border-neutral-200">
                <nav class="-mb-px flex space-x-8">
                    <button @click="uiFakultas" class="border-b-2" :class="{
                        'border-neutral-900 py-2 px-1 text-sm text-neutral-900': fakultasUI,
                        'border-transparent py-2 px-1 text-sm text-neutral-500 hover:text-neutral-700 hover:border-neutral-300': !fakultasUI
                    }">
                        Fakultas
                    </button>
                    <button @click="uiProdi" class="border-b-2" :class="{
                        'border-neutral-900 py-2 px-1 text-sm text-neutral-900': prodiUI,
                        'border-transparent py-2 px-1 text-sm text-neutral-500 hover:text-neutral-700 hover:border-neutral-300': !prodiUI
                    }">
                        Program Studi
                    </button>
                    <button @click="uiMatkul" class="border-b-2" :class="{
                        'border-neutral-900 py-2 px-1 text-sm text-neutral-900': matakuliahUI,
                        'border-transparent py-2 px-1 text-sm text-neutral-500 hover:text-neutral-700 hover:border-neutral-300': !matakuliahUI
                    }">
                        Mata Kuliah
                    </button>
                </nav>
            </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Fakultas</p>
                        <p class="text-2xl text-neutral-900">{{ totalFakultas }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-university text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-university" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Program Studi</p>
                        <p class="text-2xl text-neutral-900">{{ totalProdi }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-graduation-cap text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Mata Kuliah</p>
                        <p class="text-2xl text-neutral-900">{{ totalMatkul }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-book text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-book" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Faculty Management Table -->
        <div v-if="fakultasUI" id="faculty-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Fakultas</h2>
                        <p class="text-sm text-neutral-600">Kelola data fakultas di universitas</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i>
                            <input v-model.trim="serchFakultas" type="text" placeholder="Cari fakultas..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64">
                        </div>
                        <button @click="popappTambahFakultas = !popappTambahFakultas"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Fakultas
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Kode Fakultas
                                    <i class="fa-solid fa-sort ml-1"></i>
                                </div>
                            </th> -->
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Nama Fakultas
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                </div>
                            </th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Dekan</th> -->
                            <th class="text-left p-4 text-sm text-neutral-600">Jumlah Prodi</th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Tanggal Dibuat</th> -->
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataFakultas" :key="data.id"
                            class="border-b border-neutral-100 hover:bg-neutral-50">
                            <!-- <td class="p-4 text-neutral-900">FTI</td> -->
                            <td class="p-4">
                                <div class="flex items-center">
                                    <div
                                        class="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center mr-3">
                                        <i class="fa-solid fa-laptop-code text-neutral-600"></i>
                                    </div>
                                    <div>
                                        <p class="text-neutral-900">{{ data.fakultas }}</p>
                                        <!-- <p class="text-sm text-neutral-500">Bidang teknologi dan komputer</p> -->
                                    </div>
                                </div>
                            </td>
                            <!-- <td class="p-4 text-neutral-600">Dr. Ahmad Wijaya, M.Kom</td> -->
                            <td class="p-4 text-neutral-600">{{ data.jumlah_prodi }} Prodi</td>
                            <!-- <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td> -->
                            <!-- <td class="p-4 text-neutral-600">15 Jan 2020</td> -->
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button @click="infoFakultas(data.fakultas, data.jumlah_prodi)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button @click="editFakultas(data.id, data.fakultas)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button @click="hapusFakultas(data.id)"
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
                        Menampilkan 1 - {{ itemsPerPageFakultas }} dari {{ totalItemsFakultas }} fakultas
                    </p>
                    <div class="flex items-center space-x-2">
                        <button @click="prevPageFakultas"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>
                        <button @click="nextPageFakultas"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Prodi Manajemen table -->
        <div v-if="prodiUI" id="faculty-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Prodi</h2>
                        <p class="text-sm text-neutral-600">Kelola data fakultas di universitas</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i>
                            <input v-model.trim="serchProdi" type="text" placeholder="Cari fakultas..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64">
                        </div>
                        <button @click="popappTambahProdi = true"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Prodi
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Kode Fakultas
                                    <i class="fa-solid fa-sort ml-1"></i>
                                </div>
                            </th> -->
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Nama Prodi
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                </div>
                            </th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Dekan</th> -->
                            <th class="text-left p-4 text-sm text-neutral-600">Fakultas</th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Tanggal Dibuat</th> -->
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataProdi" :key="data.id"
                            class="border-b border-neutral-100 hover:bg-neutral-50">
                            <!-- <td class="p-4 text-neutral-900">FTI</td> -->
                            <td class="p-4">
                                <div class="flex items-center">
                                    <div
                                        class="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center mr-3">
                                        <i class="fa-solid fa-laptop-code text-neutral-600"></i>
                                    </div>
                                    <div>
                                        <p class="text-neutral-900">{{ data.nama_prodi }}</p>
                                        <!-- <p class="text-sm text-neutral-500">Bidang teknologi dan komputer</p> -->
                                    </div>
                                </div>
                            </td>
                            <!-- <td class="p-4 text-neutral-600">Dr. Ahmad Wijaya, M.Kom</td> -->
                            <td class="p-4 text-neutral-600">{{ data.nama_fakultas }}</td>
                            <!-- <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td> -->
                            <!-- <td class="p-4 text-neutral-600">15 Jan 2020</td> -->
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button @click="infoProdi(data.nama_prodi, data.nama_fakultas)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button @click="editProdi(data.id, data.nama_prodi, data.fakultas_id)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button @click="hapusProdi(data.id)"
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
                        Menampilkan 1 - {{ itemsPerPageProdi }} dari {{ totalItemsProdi }} prodi
                    </p>
                    <div class="flex items-center space-x-2">
                        <button @click="prevPageProdi"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>

                        <button @click="nextPageProdi"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- matakuliah manajemen table -->
        <div v-if="matakuliahUI" id="faculty-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Matakuliah</h2>
                        <p class="text-sm text-neutral-600">Kelola data fakultas di universitas</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i>
                            <input v-model.trim="serchMatkul" type="text" placeholder="Cari fakultas..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64">
                        </div>
                        <button @click="popappTambahMatakuliah = !popappTambahMatakuliah"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Matakuliah
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Kode Fakultas
                                    <i class="fa-solid fa-sort ml-1"></i>
                                </div>
                            </th> -->
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Matakuliah
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">Kode MK</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Nama Prodi</th>
                            <th class="text-left p-4 text-sm text-neutral-600">SKS</th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Tanggal Dibuat</th> -->
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataMatkul" :key="data.id"
                            class="border-b border-neutral-100 hover:bg-neutral-50">
                            <!-- <td class="p-4 text-neutral-900">FTI</td> -->
                            <td class="p-4">
                                <div class="flex items-center">
                                    <div
                                        class="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center mr-3">
                                        <i class="fa-solid fa-laptop-code text-neutral-600"></i>
                                    </div>
                                    <div>
                                        <p class="text-neutral-900">{{ data.nama_matakuliah }}</p>
                                        <!-- <p class="text-sm text-neutral-500">Bidang teknologi dan komputer</p> -->
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">{{ data.kodemk }}</td>
                            <td class="p-4 text-neutral-600">{{ data.nama_prodi }}</td>
                            <!-- <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td> -->
                            <td class="p-4 text-neutral-600">{{ data.sks }}</td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        @click="infoMatakuliah(data.kodemk, data.nama_matakuliah, data.nama_prodi, data.sks)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        @click="editMatakuliah(data.id, data.kodemk, data.nama_matakuliah, data.sks, data.prodi_id)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button @click="hapusMatakuliah(data.id)"
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
                        Menampilkan 1 - {{ itemsPerPageMatkul }} dari {{ totalItemsMatkul }} fakultas
                    </p>
                    <div class="flex items-center space-x-2">
                        <button @click="prevPageMatkul"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>

                        <button @click="nextPageMatkul"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- modals info fakultas -->
    <div v-if="popappInfoFakultas" id="modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[400px]">
            <h3 class="text-xl mb-4">Info Fakultas</h3>

            <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                    <span class="text-neutral-600">Fakultas</span>
                    <span>{{ seeFakultas.nama_fakultas }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Jumlah Prodi</span>
                    <span>{{ seeFakultas.jumlah_prodi }}</span>
                </div>
            </div>

            <div class="flex gap-3">
                <!-- <button class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Batalkan</button> -->
                <button @click="popappInfoFakultas = false"
                    class="flex-1 bg-neutral-900 text-white p-3 rounded-xl hover:bg-neutral-800">Oke</button>
            </div>
        </div>
    </div>
    <!-- modals edit data fakultas -->
    <div v-if="popappEditFakultas" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Fakultas</h2>
                    <button @click="popappEditFakultas = false" class="text-neutral-500 hover:text-neutral-700">
                        <!-- <i class="fa-solid fa-times"></i> -->
                        <font-awesome-icon icon="fa-solid fa-times" />
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Mata Kuliah</label>
                        <input v-model="formFakultas.nama_fakultas" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukkan nama mata kuliah">
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappEditFakultas = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesEditFakultas"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Edit
                </button>
            </div>
        </div>
    </div>
    <!-- modals tambah data fakultas-->
    <div v-if="popappTambahFakultas" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Fakultas</h2>
                    <button @click="popappTambahFakultas = false" class="text-neutral-500 hover:text-neutral-700">
                        <!-- <i class="fa-solid fa-times"></i> -->
                        <font-awesome-icon icon="fa-solid fa-times" />
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <div class="grid grid-cols-1 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Mata Kuliah</label>
                        <input v-model="formFakultas.nama_fakultas" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukkan nama mata kuliah">
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappTambahFakultas = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="tambahFakultas"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Add
                </button>
            </div>
        </div>
    </div>

    <!-- modals info prodi  -->
    <div v-if="popappInfoProdi" id="modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[400px]">
            <h3 class="text-xl mb-4">Info Prodi</h3>

            <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                    <span class="text-neutral-600">Nama Prodi</span>
                    <span>{{ seeProdi.nama_prodi }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Fakultas</span>
                    <span>{{ seeProdi.fakultas }}</span>
                </div>
            </div>

            <div class="flex gap-3">
                <!-- <button class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Batalkan</button> -->
                <button @click="popappInfoProdi = false"
                    class="flex-1 bg-neutral-900 text-white p-3 rounded-xl hover:bg-neutral-800">Oke</button>
            </div>
        </div>
    </div>
    <!-- modals edit tambah prodi -->
    <div v-if="popappTambahProdi" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Prodi</h2>
                    <button @click="popappTambahProdi = false" class="text-neutral-500 hover:text-neutral-700">
                        <!-- <i class="fa-solid fa-times"></i> -->
                        <font-awesome-icon icon="fa-solid fa-times" />
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <input v-model="formProdi.nama_prodi" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Nama Prodi">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Fakultas</label>
                        <select v-model="formProdi.fakultas_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Ruangan</option>
                            <option v-for="item in dataAllFakultas" :key="item.id" :value="item.id">{{
                                item.nama_fakultas }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappTambahProdi = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="tambahProdi"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Add
                </button>
            </div>
        </div>
    </div>
    <!-- modals edit data prodi -->
    <div v-if="popappEditProdi" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Prodi</h2>
                    <button @click="popappEditProdi = false" class="text-neutral-500 hover:text-neutral-700">
                        <!-- <i class="fa-solid fa-times"></i> -->
                        <font-awesome-icon icon="fa-solid fa-times" />
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <input v-model="seeProdi.prodi" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Nama Prodi">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Fakultas</label>
                        <select v-model="seeProdi.fakultas"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Fakultas</option>
                            <option v-for="item in dataAllFakultas" :key="item.id" :value="item.id">{{
                                item.nama_fakultas }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappEditProdi = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesEditProdi"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Edit
                </button>
            </div>
        </div>
    </div>

    <!-- modals info matakuliah -->
    <div v-if="popappInfoMatakuliah" id="modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[400px]">
            <h3 class="text-xl mb-4">Info Prodi</h3>

            <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                    <span class="text-neutral-600">Kode Matakuliah</span>
                    <span>{{ seeMatakuliah.kodemk }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Matakuliah</span>
                    <span>{{ seeMatakuliah.nama_matakuliah }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Prodi</span>
                    <span>{{ seeMatakuliah.nama_prodi }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">SKS</span>
                    <span>{{ seeMatakuliah.sks }}</span>
                </div>
            </div>

            <div class="flex gap-3">
                <!-- <button class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Batalkan</button> -->
                <button @click="popappInfoMatakuliah = false"
                    class="flex-1 bg-neutral-900 text-white p-3 rounded-xl hover:bg-neutral-800">Oke</button>
            </div>
        </div>
    </div>
    <!-- modals edit matakuliah -->
    <div v-if="popappEditMatakuliah" id="add-course-modal"
        class="fixed inset-0 bg-neutral-900/40 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Edit Mata Kuliah</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="seeMatakuliah.prodi"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <option v-for="item in dataAllProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Kode Mata Kuliah</label>
                        <input v-model="seeMatakuliah.kodemk" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Contoh: IF-201">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">SKS</label>
                        <input v-model="seeMatakuliah.sks" type="number"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Jumlah SKS">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Nama Matakuliah</label>
                        <input v-model="seeMatakuliah.nama_matakuliah" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Matakuliah">
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappEditMatakuliah = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesEditMatakuliah"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Edit
                </button>
            </div>
        </div>
    </div>
    <!-- modals tambah data matakuliah -->
    <div v-if="popappTambahMatakuliah" id="add-course-modal"
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
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="formMatakuliah.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <option v-for="item in dataAllProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Kode Mata Kuliah</label>
                        <input v-model="formMatakuliah.kodemk" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Contoh: IF-201">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">SKS</label>
                        <input v-model="formMatakuliah.sks" type="number"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Jumlah SKS">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Nama Matakuliah</label>
                        <input v-model="formMatakuliah.nama_matakuliah" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg" placeholder="Matakuliah">
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="popappTambahMatakuliah = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="tambahMatakuliah"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Add
                </button>
            </div>
        </div>
    </div>
</template>