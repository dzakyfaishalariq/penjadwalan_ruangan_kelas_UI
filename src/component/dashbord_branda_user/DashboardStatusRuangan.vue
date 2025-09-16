<script setup>
import api from '@/apisetting/api';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dataRuangan = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(6);
const totalItems = ref(0);
const totalPages = ref(0);
const serchtext = ref('');
// const isLoading = ref(false);
const loadingData = ref(false);
const progres = ref(0);

// realtime serch use watch
let setTimeOut = null;
watch(serchtext, (newValue) => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
        fetchData(1, newValue);
    }, 500);
})

// panggil api data ruangan 
const fetchData = async (page = 1, serchData = '') => {
    try {
        // isLoading.value = true;
        loadingData.value = false;
        progres.value = 25;
        const response = await api.get(`/mahasiswa_akses_ruangan/${itemsPerPage.value}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                search: serchData
            }
        });
        progres.value = 50;
        dataRuangan.value = response.data.data.data;
        totalItems.value = response.data.data.total;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    } catch (error) {
        console.error(error);
        localStorage.removeItem('barierToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userData');
    } finally {
        // isLoading.value = false;
        progres.value = 100;
        loadingData.value = true;
    }
};

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

// const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages.value) {
//         currentPage.value = page;
//         fetchData(page);
//     }
// }

const tombolPesan = () => {
    router.push('/dashboard/pemesanan');
}

onMounted(() => {
    fetchData(1);
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
    <div class="flex gap-4 mb-6">
        <div class="flex-1 flex gap-4">
            <input type="text" class="px-4 py-2 bg-white border border-neutral-200 rounded-lg" v-model.trim="serchtext">
            <!-- tambah icon cari dan text nya -->
            <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-neutral-600" />
            </div>
            <!-- <select class="px-4 py-2 bg-white border border-neutral-200 rounded-lg">
                <option>Semua Lantai</option>
                <option>Lantai 1</option>
                <option>Lantai 2</option>
                <option>Lantai 3</option>
            </select>

            <select class="px-4 py-2 bg-white border border-neutral-200 rounded-lg">
                <option>08:00 - 09:00</option>
                <option>09:00 - 10:00</option>
                <option>10:00 - 11:00</option>
                <option>11:00 - 12:00</option>
            </select> -->
        </div>

        <button @click="tombolPesan" class="px-4 py-2 bg-neutral-900 text-white rounded-lg">
            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
            Pesan Ruangan
        </button>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="ruangan in dataRuangan" :key="ruangan.id" class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex justify-between items-start mb-4">
                <h3 class=" text-lg">{{ ruangan.nama_ruangan }}</h3>
                <span v-if="ruangan.status == 1"
                    class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Tersedia</span>
                <span v-else class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Dipesan</span>
            </div>
            <div class="space-y-2 text-sm text-neutral-600">
                <p>
                    <!-- <i class="fa-solid fa-building mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-building" class="mr-2" />
                    Lantai {{ ruangan.lantai }}
                </p>
                <p>
                    <!-- <i class="fa-solid fa-users mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-users" class="mr-2" />
                    Kapasitas: {{ ruangan.kapasitas }} orang
                </p>
                <p>
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="mr-2" />
                    Prodi : {{ ruangan.nama_prodi }}
                </p>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-between mt-8">
        <div class="text-sm text-neutral-600">
            Menampilkan 1 - {{ itemsPerPage }} dari {{ totalItems }} ruangan
        </div>

        <div class="flex items-center gap-2">
            <button @click="prevPage"
                class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:border-neutral-600"
                :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">
                <!-- <i class="fa-solid fa-chevron-left text-sm"></i> -->
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-sm" />
            </button>

            <button @click="nextPage"
                class="flex items-center justify-center w-10 h-10 border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:border-neutral-600"
                :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">
                <!-- <i class="fa-solid fa-chevron-right text-sm"></i> -->
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-sm" />
            </button>
        </div>
    </div>
</template>