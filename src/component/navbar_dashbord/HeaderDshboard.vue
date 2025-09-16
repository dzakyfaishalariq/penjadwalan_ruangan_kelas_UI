<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const dataUser = ref(null)
dataUser.value = JSON.parse(localStorage.getItem('userData'));
const route = useRoute;
const nameTitle = ref('');
// cek apakah name router berubah jika berbah ubag title h1 sesuai dengan nama routernya

</script>
<template>
    <header class="flex justify-between items-center mb-8">
        <div v-if="route().name === 'dashboard'">
            <h1 class="text-2xl">Selamat datang, {{ dataUser.nama.split(" ")[0] }}!</h1>
        </div>
        <div v-else-if="route().name === 'pemesanan'">
            <h1 class="text-2xl">Pesan Ruangan Kelas</h1>
        </div>
        <div v-else-if="route().name === 'kalender'" class="flex items-center gap-6">
            <h1 class="text-2xl">Kalender Jadwal</h1>
            <!-- <div class="flex gap-2">
                <button
                    class="px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">Mingguan</button>
                <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg">Bulanan</button>
            </div> -->
        </div>
        <div v-else-if="route().name === 'status-ruangan'">
            <h1 class="text-2xl">Status Ruangan Real-Time</h1>
        </div>


        <div v-if="route().name === 'dashboard'" class="relative">
            <!-- <i class="fa-regular fa-bell text-xl text-neutral-600 cursor-pointer"></i> -->
            <font-awesome-icon icon="fa-solid fa-bell" class="text-xl text-neutral-600 cursor-pointer" />
            <span
                class="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-white text-xs flex items-center justify-center rounded-full">3</span>
        </div>
        <div v-else-if="route().name === 'pemesanan'" class="relative">
            <!-- <i class="fa-regular fa-bell text-xl text-neutral-600 cursor-pointer"></i> -->
            <font-awesome-icon icon="fa-solid fa-bell" class="text-xl text-neutral-600 cursor-pointer" />
            <span
                class="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-white text-xs flex items-center justify-center rounded-full">3</span>
        </div>
        <div v-else-if="route().name === 'kalender'" class="flex items-center gap-4">
            <!-- <button class="px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                <i class="fa-solid fa-calendar-day mr-2"></i>Hari Ini
            </button>
            <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg">
                <i class="fa-solid fa-plus mr-2"></i>Pesan Ruangan
            </button> -->
            <div class="relative">
                <!-- <i class="fa-regular fa-bell text-xl text-neutral-600 cursor-pointer"></i> -->
                <font-awesome-icon icon="fa-solid fa-bell" class="text-xl text-neutral-600 cursor-pointer" />
                <span
                    class="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-white text-xs flex items-center justify-center rounded-full">2</span>
            </div>
        </div>
        <div v-else-if="route().name === 'status-ruangan'" class="flex-1 bg-neutral-50 p-8">
            <div class="relative">
                <i class="fa-regular fa-bell text-xl text-neutral-600 cursor-pointer"></i>
                <span
                    class="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-white text-xs flex items-center justify-center rounded-full">2</span>
            </div>
        </div>
    </header>
</template>