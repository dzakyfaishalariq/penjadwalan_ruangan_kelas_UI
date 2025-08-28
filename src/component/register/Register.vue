<script setup>
import { useRouter } from 'vue-router';
const route = useRouter();
const goToLogin = () => {
    route.push('/login');
}
</script>
<template>
    <div
        class="bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-[800px] flex items-center justify-center py-12 px-4">
        <div class="max-w-md w-full">
            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-6">
                    <div class="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                        <i class="fa-solid fa-door-open text-white text-xl"></i>
                    </div>
                </div>
                <h1 class="text-3xl text-neutral-900 mb-2">Buat Akun Baru</h1>
                <p class="text-neutral-600">Daftar untuk mengakses sistem penjadwalan ruangan</p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
                <form class="space-y-6">
                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="name">Nama Lengkap</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-regular fa-user text-neutral-400"></i>
                            </div>
                            <input type="text" id="name"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Masukkan nama lengkap Anda">
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="email">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-regular fa-envelope text-neutral-400"></i>
                            </div>
                            <input type="email" id="email"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Masukkan alamat email Anda">
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="nim">NIM</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-id-card text-neutral-400"></i>
                            </div>
                            <input type="text" id="nim"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Masukkan Nomor Induk Mahasiswa">
                        </div>
                        <p class="text-xs text-neutral-500">*Khusus untuk mahasiswa</p>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="role">Peran</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-users text-neutral-400"></i>
                            </div>
                            <select id="role"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white appearance-none">
                                <option value="">Pilih peran Anda</option>
                                <option value="student">Mahasiswa</option>
                                <option value="lecturer">Dosen</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-chevron-down text-neutral-400"></i>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="password">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-key text-neutral-400"></i>
                            </div>
                            <input type="password" id="password"
                                class="block w-full pl-12 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Buat password">
                            <div class="absolute inset-y-0 right-0 pr-4 flex items-center">
                                <i
                                    class="fa-regular fa-eye text-neutral-400 cursor-pointer hover:text-neutral-600 transition-colors"></i>
                            </div>
                        </div>
                    </div>

                    <button type="submit"
                        class="w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-900 focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Daftar
                    </button>
                </form>
            </div>

            <div class="text-center mt-6">
                <p class="text-neutral-600">
                    Sudah punya akun?
                    <span @click="goToLogin"
                        class="text-neutral-900 hover:underline cursor-pointer transition-all">Masuk</span>
                </p>
            </div>
        </div>
    </div>
</template>