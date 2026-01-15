<script setup>
import api from '@/apisetting/api';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const TotalRuanganTerpakai = ref(0);
const TotalSemuaRuangan = ref(0);
const TotalPenggunaAplikasi = ref(0);
const TotalBookingHariIni = ref(0);
const dataRuangan = ref(null);
const dataPengguna = ref(null);
const serchtext = ref('');
const serchtextPengguna = ref('');

let setTimeOut = null;
watch(serchtext, (newValue) => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
        fetchDataRuangan(1, newValue);
    }, 500);
})

let setTimeOutPengguna = null;
watch(serchtextPengguna, (newValue) => {
    clearTimeout(setTimeOutPengguna);
    setTimeOutPengguna = setTimeout(() => {
        fetchDataPengguna(1, newValue);
    }, 500);
})
const fetchData = async () => {
    const responseTotalSemuaRuangan = await api.get('/admin_akses_total_semua_ruangan', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    });
    const responseTotalRuanganTerpakai = await api.get('/admin_akses_total_ruangan_terpakai', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    const responseTotalPenggunaAplikasi = await api.get('/admin_akses_total_penggunaan_ruangan', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    const responseTotalBookingHariIni = await api.get('/admin_akses_total_booking_hari_ini', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
        }
    })
    TotalRuanganTerpakai.value = responseTotalRuanganTerpakai.data.data;
    TotalSemuaRuangan.value = responseTotalSemuaRuangan.data.data;
    TotalPenggunaAplikasi.value = responseTotalPenggunaAplikasi.data.data;
    TotalBookingHariIni.value = responseTotalBookingHariIni.data.data;
}

const fetchDataRuangan = async (page = 1, serchData = '') => {
    try {
        const response = await api.get('/admin_akses_semua_ruangan/3', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                search: serchData
            }
        })
        // console.log(response)
        dataRuangan.value = response.data.data.data
    } catch (error) {
        console.log(error)
    }
}

const fetchDataPengguna = async (page = 1, serchData = '') => {
    try {
        const response = await api.get('admin_akses_penggunaan_aplikasi/3', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                search: serchData
            }
        })
        // console.log(response)
        dataPengguna.value = response.data.data.data
    } catch (error) {
        console.log(error)
    }
}

const tambahRuangan = () => {
    // pindah ke halaman tambah ruangan
    router.push({ name: 'manajemen-ruangan' });
}

const tambahPengguna = () => {
    // pindah ke halaman tambah pengguna
    router.push({ name: 'manajemen-pengguna' });
}

onMounted(() => {
    fetchData();
    fetchDataRuangan(1);
    fetchDataPengguna(1);
})
</script>
<template>
    <div id="dashboard-stats" class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Ruangan</p>
                        <p class="text-2xl text-neutral-900">{{ TotalSemuaRuangan }}</p>
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
                        <p class="text-sm text-neutral-600">Ruangan Aktif</p>
                        <p class="text-2xl text-neutral-900">{{ TotalRuanganTerpakai }}</p>
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
                        <p class="text-sm text-neutral-600">Total Pengguna</p>
                        <p class="text-2xl text-neutral-900">{{ TotalPenggunaAplikasi }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-users text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Booking Hari Ini</p>
                        <p class="text-2xl text-neutral-900">{{ TotalBookingHariIni }}</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-calendar-check text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-calendar-check" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Management Tables -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Room Management -->
            <div id="room-management" class="bg-white rounded-lg border border-neutral-200">
                <div class="p-6 border-b border-neutral-200">
                    <div class="flex justify-between items-center">
                        <h2 class="text-lg text-neutral-900">Manajemen Ruangan</h2>
                        <button @click="tambahRuangan"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Ruangan
                        </button>
                    </div>
                    <div class="mt-4">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input v-model.trim="serchtext" type="text" placeholder="Cari ruangan..."
                                class="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-neutral-50">
                            <tr>
                                <th class="text-left p-4 text-sm text-neutral-600">Nama Ruangan</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Kapasitas</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in dataRuangan" :key="data.ruangan_id" class="border-b border-neutral-100">
                                <td class="p-4 text-neutral-900">{{ data.nama_ruangan }}</td>
                                <td class="p-4 text-neutral-600">{{ data.kapasitas }} orang</td>
                                <td class="p-4">
                                    <span v-if="data.status == 1"
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Tersedia</span>
                                    <span v-else class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Di
                                        Pakai</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- User Management -->
            <div id="user-management" class="bg-white rounded-lg border border-neutral-200">
                <div class="p-6 border-b border-neutral-200">
                    <div class="flex justify-between items-center">
                        <h2 class="text-lg text-neutral-900">Manajemen Pengguna</h2>
                        <button @click="tambahPengguna"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Pengguna
                        </button>
                    </div>
                    <div class="mt-4">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input v-model.trim="serchtextPengguna" type="text" placeholder="Cari pengguna..."
                                class="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-neutral-50">
                            <tr>
                                <th class="text-left p-4 text-sm text-neutral-600">Nama</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in dataPengguna" :key="data.id" class="border-b border-neutral-100">
                                <td class="p-4">
                                    <div class="flex items-center">
                                        <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234"
                                            alt="User" class="w-8 h-8 rounded-full mr-3">
                                        <span class="text-neutral-900">{{ data.nama }}</span>
                                    </div>
                                </td>
                                <td class="p-4 text-neutral-600">{{ data.tipe }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Recent Activities -->
        
    </div>
</template>