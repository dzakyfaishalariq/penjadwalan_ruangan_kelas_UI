<script setup>
import { useRouter } from 'vue-router';
const route = useRouter();
const goToLogin = () => {
    route.push('/login');
}
const goToRegister = () => {
    route.push('/register');
}
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
                <div class="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-door-open text-white text-lg"></i>
                </div>
                <span class="ml-3 text-xl text-neutral-900">RoomScheduler</span>
            </div>
            <nav class="hidden md:flex space-x-8">
                <router-link to="/" class="text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    active-class="text-neutral-900"><span>Beranda</span></router-link>
                <router-link to="/fitur_fitur_unggulan" class="text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    active-class="text-neutral-900"><span>Fitur</span></router-link>
                <router-link to="/panduan_aplikasi" class="text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    active-class="text-neutral-900"> <span>Panduan</span></router-link>
                <router-link to="/kontak" class="text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    active-class="text-neutral-900"><span>Kontak</span></router-link>
            </nav>
            <div class="flex items-center space-x-4">
                <button @click="goToLogin"
                    class="px-4 py-2 text-neutral-600 hover:text-neutral-900 cursor-pointer">Masuk</button>
                <button @click="goToRegister"
                    class="px-6 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-600 cursor-pointer">Daftar</button>
            </div>
        </div>
    </div>
</template>