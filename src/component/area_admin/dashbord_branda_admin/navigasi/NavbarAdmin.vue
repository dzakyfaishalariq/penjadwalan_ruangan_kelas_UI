<script setup>
import { logout } from '@/utils/auth';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const dataLocal = JSON.parse(localStorage.getItem('userData'))
const isActifTombol = ref(false);

const prosesLogout = () => {
    logout("admin");
}
</script>
<template>
    <div id="admin-sidebar" class="w-64 bg-white border-r border-neutral-200 fixed h-full">
        <div class="p-6">
            <div class="flex items-center mb-8">
                <div class="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
                    <!-- <i class="fa-solid fa-door-open text-white text-xl"></i> -->
                    <font-awesome-icon icon="fa-solid fa-door-open" class="text-white text-xl" />
                </div>
                <div class="ml-3">
                    <h1 class="text-lg text-neutral-900">RoomScheduler</h1>
                    <p class="text-xs text-neutral-500">Admin Panel</p>
                </div>
            </div>

            <nav class="space-y-2">
                <router-link to="/admin/branda"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-100 rounded-lg cursor-pointer"
                    :class="{ 'bg-neutral-100 text-neutral-900': $route.meta.nama_router === 'Dashboard Admin' }">
                    <!-- <i class="fa-solid fa-house w-5"></i> -->
                    <font-awesome-icon icon="fa-solid fa-house" class="w-5" />
                    <span class="ml-3">Dashboard</span>
                </router-link>
                <router-link to="/admin/manajemen-ruangan"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer"
                    :class="{ 'bg-neutral-100 text-neutral-900': $route.meta.nama_router === 'Manajemen Ruangan' }">
                    <!-- <i class="fa-solid fa-building w-5"></i> -->
                    <font-awesome-icon icon="fa-solid fa-building" class="w-5" />
                    <span class="ml-3">Manajemen Ruangan</span>
                </router-link>
                <router-link to="/admin/manajemen-pengguna"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer"
                    :class="{ 'bg-neutral-100 text-neutral-900': $route.meta.nama_router === 'Manajemen Pengguna' }">
                    <!-- <i class="fa-solid fa-users w-5"></i> -->
                    <font-awesome-icon icon="fa-solid fa-users" class="w-5" />
                    <span class="ml-3">Manajemen Pengguna</span>
                </router-link>
                <router-link to="/admin/manajemen-akademik"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer"
                    :class="{ 'bg-neutral-100 text-neutral-900': $route.meta.nama_router === 'Manajemen Akademik' }">
                    <!-- <i class="fa-solid fa-graduation-cap w-5"></i> -->
                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="w-5" />
                    <span class="ml-3">Manajemen Akademik</span>
                </router-link>
                <router-link v-if="isActifTombol" to="/admin/laporan"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer"
                    :class="{ 'bg-neutral-100 text-neutral-900': $route.meta.nama_router === 'Laporan' }">
                    <!-- <i class="fa-solid fa-chart-bar w-5"></i> -->
                    <font-awesome-icon icon="fa-solid fa-chart-bar" class="w-5" />
                    <span class="ml-3">Laporan</span>
                </router-link>
                <div v-if="!isActifTombol"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer">
                    <font-awesome-icon icon="fa-solid fa-chart-bar" class="w-5" />
                    <a class="ml-3" href="">Laporan : coming soon</a>
                </div>
                <router-link v-if="isActifTombol" to="/admin/pengaturan"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer"
                    :class="{ 'bg-neutral-100 text-neutral-900': $route.meta.nama_router === 'Pengaturan' }">
                    <!-- <i class="fa-solid fa-cog w-5"></i> -->
                    <font-awesome-icon icon="fa-solid fa-cog" class="w-5" />
                    <span class="ml-3">Pengaturan</span>
                </router-link>
                <div v-if="!isActifTombol"
                    class="flex items-center p-3 text-neutral-600 hover:bg-neutral-50 rounded-lg cursor-pointer">
                    <font-awesome-icon icon="fa-solid fa-cog" class="w-5" />
                    <a class="ml-3" href="">Pengaturan : coming soon</a>
                </div>
            </nav>
        </div>

        <div class="absolute bottom-0 w-full p-6 border-t border-neutral-200">
            <div class="flex items-center mb-4">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=8901" alt="Admin Avatar"
                    class="w-10 h-10 rounded-full">
                <div class="ml-3">
                    <p class="text-sm text-neutral-900">{{ dataLocal.name }}</p>
                    <p class="text-xs text-neutral-500">{{ dataLocal.email }}</p>
                </div>
            </div>
            <button @click="prosesLogout"
                class="flex items-center w-full p-2 text-neutral-600 hover:text-neutral-900 rounded-lg">
                <!-- <i class="fa-solid fa-sign-out-alt w-5"></i> -->
                <font-awesome-icon icon="fa-solid fa-sign-out-alt" class="w-5" />
                <span class="ml-3">Logout</span>
            </button>
        </div>
    </div>
</template>