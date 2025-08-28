<script setup></script>
<template>
    <div class="bg-neutral-50 min-h-[800px] flex items-center justify-center py-12">
        <div class="max-w-md w-full mx-4">
            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-6">
                    <div class="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-door-open text-white text-xl"></i>
                    </div>
                </div>
                <h1 class="text-2xl text-neutral-900 mb-2">Masuk ke Akun Anda</h1>
                <p class="text-neutral-600">Silakan masuk untuk mengakses sistem penjadwalan</p>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <form class="space-y-6">
                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="email">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-regular fa-envelope text-neutral-400"></i>
                            </div>
                            <input type="email" id="email"
                                class="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-200 focus:border-neutral-900"
                                placeholder="nama@universitas.ac.id">
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="password">Kata Sandi</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-regular fa-lock text-neutral-400"></i>
                            </div>
                            <input type="password" id="password"
                                class="block w-full pl-10 pr-10 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-200 focus:border-neutral-900"
                                placeholder="Masukkan kata sandi">
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <i class="fa-regular fa-eye text-neutral-400 cursor-pointer hover:text-neutral-600"></i>
                            </div>
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
                        class="w-full bg-neutral-900 text-white py-2.5 rounded-lg hover:bg-neutral-800 transition-colors">
                        Masuk
                    </button>
                </form>
            </div>

            <div class="text-center mt-6">
                <p class="text-neutral-600">
                    Belum punya akun?
                    <span class="text-neutral-900 hover:underline cursor-pointer">Daftar Sekarang</span>
                </p>
            </div>
        </div>
    </div>
</template>