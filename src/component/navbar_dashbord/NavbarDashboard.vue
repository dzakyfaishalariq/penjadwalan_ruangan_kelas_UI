<script setup>
import { useRouter } from 'vue-router';
import { logout } from '@/utils/auth';
import { ref } from 'vue';
const route = useRouter();
// ambil nama di local storage
const dataUser = ref(null);
dataUser.value = JSON.parse(localStorage.getItem('userData'));


// nameUser.value = dataUser.value.name;


const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
        logout();
    }
}

</script>
<template>
    <aside id="sidebar" class="w-64 bg-neutral-900 text-white p-6">
        <div class="flex items-center gap-3 mb-8">
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123" alt="Avatar"
                class="w-10 h-10 rounded-full">
            <div>
                <p>{{ dataUser.nama }}</p>
                <p class="text-sm text-neutral-400">{{ dataUser.role }}</p>
            </div>
        </div>

        <nav class="space-y-2">
            <span class="flex items-center gap-3 px-4 py-3 bg-neutral-800 rounded-xl cursor-pointer">
                <i class="fa-solid fa-house text-neutral-300"></i>
                <span>Beranda</span>
            </span>
            <span class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl cursor-pointer">
                <i class="fa-solid fa-calendar-plus text-neutral-300"></i>
                <span>Pemesanan</span>
            </span>
            <span class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl cursor-pointer">
                <i class="fa-solid fa-calendar text-neutral-300"></i>
                <span>Kalender</span>
            </span>
            <span class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl cursor-pointer">
                <i class="fa-solid fa-door-closed text-neutral-300"></i>
                <span>Status Ruangan</span>
            </span>
            <span class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl cursor-pointer">
                <i class="fa-solid fa-gear text-neutral-300"></i>
                <span>Pengaturan</span>
            </span>
        </nav>

        <div class="mt-auto pt-6 border-t border-neutral-700">
            <span @click="handleLogout"
                class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl text-neutral-400 cursor-pointer">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span>Keluar</span>
            </span>
        </div>
    </aside>
</template>