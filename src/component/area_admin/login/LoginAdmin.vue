<script setup>
import api from '@/apisetting/api';
import { ref } from 'vue';
import { setAuthData } from '@/utils/auth';
const dataLogin = ref({
    email: '',
    password: '',
});

// lakukan login dengan api
const login = async () => {
    try {
        const response = await api.post('/admin_login', dataLogin.value);
        console.log(response.data);
        // menyimpan data ke localstorage
        setAuthData(response.data.data.api_key, response.data.data.user);
        // cek apakah barier token ada
        if (localStorage.getItem('barierToken')) {
            // Redirect ke halaman yang diminta yaitu dashboard
            window.location.href = '/admin/branda';
        } else {
            alert("Login gagal, silakan coba lagi");
        }
    } catch (error) {
        console.error(error);
    } finally {
        alert('Login Berhasil');
    }
}
const aktifkanLihatPassword = ref(false);
</script>
<template>
    <div class=" pt-4 pb-4 min-h-screen bg-neutral-50 flex items-center justify-center">
        <!-- Login Container -->
        <div id="admin-login-container" class="w-full max-w-md">
            <!-- Logo and Header -->
            <div class="text-center mb-8">
                <div class="w-16 h-16 bg-neutral-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <!-- <i class="fa-solid fa-door-open text-white text-2xl"></i> -->
                    <font-awesome-icon icon="fa-solid fa-door-open" class="text-white text-2xl" />
                </div>
                <h1 class="text-2xl text-neutral-900 mb-2">RoomScheduler</h1>
                <p class="text-neutral-600">Admin Panel Login</p>
            </div>

            <!-- Login Form -->
            <div id="login-form" class="bg-white rounded-lg border border-neutral-200 p-8 shadow-sm">
                <div class="mb-6">
                    <h2 class="text-xl text-neutral-900 mb-2">Masuk sebagai Administrator</h2>
                    <p class="text-sm text-neutral-600">Kelola sistem penjadwalan ruangan kelas</p>
                </div>

                <form class="space-y-6">
                    <!-- Email Field -->
                    <div>
                        <label class="block text-sm text-neutral-700 mb-2">Email Administrator</label>
                        <div class="relative">
                            <!-- <i class="fa-solid fa-envelope absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-envelope"
                                class="absolute left-3 top-4 text-neutral-400" />
                            <input v-model="dataLogin.email" type="email" placeholder="admin@roomscheduler.com"
                                class="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500">
                        </div>
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label class="block text-sm text-neutral-700 mb-2">Password</label>
                        <div class="relative">
                            <!-- <i class="fa-solid fa-lock absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-lock" class="absolute left-3 top-4 text-neutral-400" />
                            <input v-model="dataLogin.password" placeholder="Masukkan password"
                                :type="aktifkanLihatPassword ? 'text' : 'password'"
                                class="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500">
                            <button type="button" @click="aktifkanLihatPassword = !aktifkanLihatPassword"
                                class="absolute right-3 top-3 text-neutral-400 hover:text-neutral-600">
                                <!-- <i class="fa-solid fa-eye"></i> -->
                                <font-awesome-icon icon="fa-solid fa-eye" />
                            </button>
                        </div>
                    </div>

                    <!-- Remember Me -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center">
                            <input type="checkbox"
                                class="w-4 h-4 text-neutral-900 border-neutral-300 rounded focus:ring-neutral-500">
                            <span class="ml-2 text-sm text-neutral-600">Ingat saya</span>
                        </label>
                        <span class="text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer">Lupa
                            password?</span>
                    </div>

                    <!-- Login Button -->
                    <button @click.prevent="login" type="submit"
                        class="w-full bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center">
                        <!-- <i class="fa-solid fa-sign-in-alt mr-2"></i> -->
                        <font-awesome-icon icon="fa-solid fa-sign-in-alt" class="mr-2" />
                        Masuk ke Admin Panel
                    </button>
                </form>

                <!-- Security Notice -->
                <div class="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div class="flex items-start">
                        <!-- <i class="fa-solid fa-shield-alt text-neutral-600 mt-1 mr-3"></i> -->
                        <font-awesome-icon icon="fa-solid fa-shield-alt" class="text-neutral-600 mt-1 mr-3" />
                        <div>
                            <p class="text-sm text-neutral-700 mb-1">Keamanan Tinggi</p>
                            <p class="text-xs text-neutral-600">Akses admin dilindungi dengan enkripsi dan monitoring
                                keamanan 24/7.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- System Info -->
            <div id="system-info" class="mt-8 text-center">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <h3 class="text-lg text-neutral-900 mb-4">Sistem Penjadwalan Ruangan</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div class="text-center">
                            <div
                                class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <!-- <i class="fa-solid fa-clock text-neutral-600"></i> -->
                                <font-awesome-icon icon="fa-solid fa-clock" class="text-neutral-600" />
                            </div>
                            <p class="text-neutral-600">Jam Operasional</p>
                            <p class="text-neutral-900">08:00 - 17:00 WIB</p>
                        </div>
                        <div class="text-center">
                            <div
                                class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <!-- <i class="fa-solid fa-calendar text-neutral-600"></i> -->
                                <font-awesome-icon icon="fa-solid fa-calendar" class="text-neutral-600" />
                            </div>
                            <p class="text-neutral-600">Hari Kerja</p>
                            <p class="text-neutral-900">Senin - Jumat</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <footer id="login-footer" class="mt-8 text-center text-sm text-neutral-500">
                <p>© 2025 RoomScheduler. Sistem manajemen ruangan yang adil dan efisien.</p>
                <div class="mt-2 space-x-4">
                    <span class="hover:text-neutral-700 cursor-pointer">Bantuan</span>
                    <span class="hover:text-neutral-700 cursor-pointer">Kontak</span>
                    <span class="hover:text-neutral-700 cursor-pointer">Kebijakan Privasi</span>
                </div>
            </footer>
        </div>
    </div>
</template>