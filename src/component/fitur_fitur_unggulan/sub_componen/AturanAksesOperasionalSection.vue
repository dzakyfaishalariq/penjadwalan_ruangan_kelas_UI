<script setup></script>

<template>
    <!-- Aturan Akses & Operasional Section -->
    <section id="access-rules" class="py-20 bg-neutral-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl text-neutral-900 mb-4">Aturan Akses & Operasional</h2>
                <p class="text-lg text-neutral-600">Sistem yang transparan dengan aturan yang jelas untuk semua pengguna
                </p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white rounded-xl p-8 shadow-sm">
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                        <!-- <i class="fa-solid fa-clock text-neutral-700 text-xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-clock" class="text-neutral-700 text-xl" />
                    </div>
                    <h3 class="text-xl text-neutral-900 mb-4">Jam Operasional</h3>
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-neutral-600">Senin - Jumat</span>
                            <span class="text-neutral-900">08:00 - 17:00 WIB</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-neutral-600">Istirahat</span>
                            <span class="text-neutral-900">12:00 - 13:00 WIB</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-neutral-600">Sabtu - Minggu</span>
                            <span class="text-neutral-500">Akses Terbuka</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl p-8 shadow-sm">
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                        <!-- <i class="fa-solid fa-users text-neutral-700 text-xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-700 text-xl" />
                    </div>
                    <h3 class="text-xl text-neutral-900 mb-4">Akses Ruangan Umum</h3>
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-check text-neutral-400 mt-1"></i>
                            <span class="text-neutral-600 text-sm">Ruangan terbuka untuk semua di akhir pekan</span>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-check text-neutral-400 mt-1"></i>
                            <span class="text-neutral-600 text-sm">Akses bebas jika melewati batas waktu
                                pemilihan</span>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-check text-neutral-400 mt-1"></i>
                            <span class="text-neutral-600 text-sm">Sistem first-come-first-served untuk akses
                                umum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>