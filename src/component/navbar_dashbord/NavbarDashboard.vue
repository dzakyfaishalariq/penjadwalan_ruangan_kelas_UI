<script setup>
// import { useRouter } from 'vue-router';
import { logout } from '@/utils/auth';
import { computed, ref } from 'vue';
// const route = useRouter();
// ambil nama di local storage
const dataUser = ref(null);
dataUser.value = JSON.parse(localStorage.getItem('userData'));

// create avatar
const userInitials = computed(() => {
    if (!dataUser.value.nama) return '';

    const names = dataUser.value.nama.split(' ');
    let initials = '';

    if (names.length === 1) {
        // Jika hanya satu kata, ambil 2 karakter pertama
        initials = names[0].substring(0, 2).toUpperCase();
    } else {
        // Jika lebih dari satu kata, ambil inisial dari kata pertama dan terakhir
        initials = (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }

    return initials;
})


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
            <div v-if="dataUser.nama" class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span class="text-white font-semibold text-sm">{{ userInitials }}</span>
            </div>
            <img v-else src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123" alt="Avatar"
                class="w-10 h-10 rounded-full">
            <div>
                <p>{{ dataUser.nama }}</p>
                <p class="text-sm text-neutral-400">{{ dataUser.role }}</p>
            </div>
        </div>

        <nav class="space-y-2">
            <router-link to="/dashboard/branda" class="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
                :class="{
                    'bg-neutral-800': $route.name === 'dashboard',
                    'hover:bg-neutral-800': $route.name !== 'dashboard',
                }">
                <!-- <i class="fa-solid fa-house text-neutral-300"></i> -->
                <font-awesome-icon icon="fa-solid fa-house" class="text-neutral-300" />
                <span>Beranda</span>
            </router-link>
            <router-link to="/dashboard/pemesanan" class="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
                :class="{ 'bg-neutral-800': $route.name === 'pemesanan', 'hover:bg-neutral-800': $route.name !== 'pemesanan' }">
                <!-- <i class="fa-solid fa-calendar-plus text-neutral-300"></i> -->
                <font-awesome-icon icon="fa-solid fa-calendar-plus" class="text-neutral-300" />
                <span>Pemesanan</span>
            </router-link>
            <router-link to="/dashboard/hasil-pemesanan"
                class="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
                :class="{ 'bg-neutral-800': $route.name === 'pemesananhasil-pemesanan', 'hover:bg-neutral-800': $route.name !== 'hasil-pemesanan' }">
                <!-- <i class="fa-solid fa-calendar-check text-neutral-300"></i> -->
                <font-awesome-icon icon="fa-solid fa-calendar-check" class="text-neutral-300" />
                <span>Hasil Pemesanan</span>
            </router-link>
            <router-link to="/dashboard/kalender" class="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
                :class="{ 'bg-neutral-800': $route.name === 'kalender', 'hover:bg-neutral-800': $route.name !== 'kalender' }">
                <!-- <i class="fa-solid fa-calendar text-neutral-300"></i> -->
                <font-awesome-icon icon="fa-solid fa-calendar" class="text-neutral-300" />
                <span>Kalender</span>
            </router-link>
            <router-link to="/dashboard/status-ruangan"
                class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl cursor-pointer"
                :class="{ 'bg-neutral-800': $route.name === 'status-ruangan', 'hover:bg-neutral-800': $route.name !== 'status-ruangan' }">
                <!-- <i class="fa-solid fa-door-closed text-neutral-300"></i> -->
                <font-awesome-icon icon="fa-solid fa-door-closed" class="text-neutral-300" />
                <span>Status Ruangan</span>
            </router-link>
            <router-link to="/dashboard/pengaturan-user"
                class="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer"
                :class="{ 'bg-neutral-800': $route.name === 'pengaturan-user', 'hover:bg-neutral-800': $route.name !== 'pengaturan-user' }">
                <!-- <i class="fa-solid fa-gear text-neutral-300"></i> -->
                <font-awesome-icon icon="fa-solid fa-gear" class="text-neutral-300" />
                <span>Pengaturan</span>
            </router-link>
        </nav>

        <div class="mt-auto pt-6 border-t border-neutral-700">
            <span @click="handleLogout"
                class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 rounded-xl text-neutral-400 cursor-pointer">
                <!-- <i class="fa-solid fa-right-from-bracket"></i> -->
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                <span>Keluar</span>
            </span>
        </div>
    </aside>
</template>