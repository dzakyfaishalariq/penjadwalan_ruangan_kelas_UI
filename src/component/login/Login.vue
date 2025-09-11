<script setup>
import api from '@/apisetting/api';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { setAuthData } from '@/utils/auth';
import PopAppSucsess from './PopAppSucsess.vue';
import PopAppGagal from './PopAppGagal.vue';
const route = useRouter();
const goToRegister = () => {
    route.push('/register');
}

const dataForm = ref({
    email: '',
    password: ''
})

// validasi email
const error_email = computed(() => {
    if (!dataForm.value.email.trim()) {
        return 'Email tidak boleh kosong';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dataForm.value.email)) {
        return 'Email tidak valid';
    } else {
        return '';
    }
})

// validasi password
const error_password = computed(() => {
    if (!dataForm.value.password.trim()) {
        return 'Password tidak boleh kosong';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(dataForm.value.password)) {
        return 'Password harus memiliki setidaknya satu huruf besar, satu huruf kecil, dan satu angka';
    } else {
        return '';
    }
})

// hendel login
const login = async () => {
    try {
        // memanggil api
        const response = await api.post('/mahasiswa_login', dataForm.value);
        // menyimpan data ke localstorage
        setAuthData(response.data.data.api_key, response.data.data.user);
        // cek apakah barier token ada
        if (localStorage.getItem('barierToken')) {
            // Redirect ke halaman yang diminta yaitu dashboard
            route.push('/dashboard/branda')
        }
        else {
            alert("Login gagal, silakan coba lagi");
        }
        // console.log(response.data.data.user);
    } catch (error) {
        alert("Login gagal, silakan coba lagi keterangan : " + error.response.data.message);
    }
}

</script>
<template>
    <div
        class="bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-[800px] flex items-center justify-center py-12 px-4">
        <div class="max-w-md w-full mx-4">
            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-6">
                    <div class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-door-open text-white text-xl"></i>
                    </div>
                </div>
                <h1 class="text-2xl text-neutral-900 mb-2">Masuk ke Akun Anda </h1>
                <p class="text-neutral-600">Silakan masuk untuk mengakses sistem penjadwalan</p>
            </div>

            <!-- Login card -->
            <div class="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <form @submit.prevent="login" class="space-y-6">
                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="email">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-regular fa-envelope text-neutral-400"></i>
                            </div>
                            <input v-model="dataForm.email" type="email" id="email"
                                class="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-200 focus:border-neutral-900"
                                placeholder="nama@universitas.ac.id">
                            <div class="text-xs text-red-500">{{ error_email }}</div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="password">Kata Sandi</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-regular fa-lock text-neutral-400"></i>
                            </div>
                            <input v-model="dataForm.password" type="password" id="password"
                                class="block w-full pl-10 pr-10 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-200 focus:border-neutral-900"
                                placeholder="Masukkan kata sandi">
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <i class="fa-regular fa-eye text-neutral-400 cursor-pointer hover:text-neutral-600"></i>
                            </div>
                            <div class="text-xs text-red-500">{{ error_password }}</div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" class="h-4 w-4 border-neutral-300 rounded">
                            <label for="remember" class="ml-2 text-sm text-neutral-600">Ingat saya</label>
                        </div>
                        <span class="text-sm text-neutral-700 hover:text-neutral-900 cursor-pointer">Lupa kata
                            sandi?</span>
                    </div>

                    <button type="submit"
                        class="w-full bg-neutral-900 text-white py-2.5 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
                        Masuk
                    </button>
                </form>
            </div>

            <div class="text-center mt-6">
                <p class="text-neutral-600">
                    Belum punya akun?
                    <span @click="goToRegister" class="text-neutral-900 hover:underline cursor-pointer">Daftar
                        Sekarang</span>
                </p>
            </div>
        </div>
    </div>
</template>