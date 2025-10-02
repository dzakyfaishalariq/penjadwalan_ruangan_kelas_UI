<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
// tampilkan waktu sekarang dalam bentuk 00:00
const waktuSekarang = new Date().toLocaleTimeString();
// tampilkan tanggal yang terdiri dari hari, tanggal, bulan, dan tahun
const tanggalSekarang = new Date().toLocaleDateString();
</script>
<template>
    <header id="admin-header" class="bg-white border-b border-neutral-200 px-8 py-6">
        <div class="flex justify-between items-center">
            <div>
                <h1 class="text-2xl text-neutral-900">{{ route.meta.nama_router }}</h1>
                <p class="text-neutral-600">{{ route.meta.deskripsi }}</p>
            </div>
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <!-- <i class="fa-solid fa-bell text-neutral-400 text-xl cursor-pointer"></i> -->
                    <font-awesome-icon icon="fa-solid fa-bell" class="text-neutral-400 text-xl cursor-pointer" />
                    <div class="absolute -top-1 -right-1 w-3 h-3 bg-neutral-600 rounded-full"></div>
                </div>
                <div class="text-right">
                    <p class="text-sm text-neutral-900">{{ tanggalSekarang }}</p>
                    <p class="text-xs text-neutral-500">{{ waktuSekarang }}</p>
                </div>
            </div>
        </div>
    </header>
</template>