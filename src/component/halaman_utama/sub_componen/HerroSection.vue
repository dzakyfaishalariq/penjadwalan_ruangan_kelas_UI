<script setup>
</script>

<template>
    <section id="hero" class="bg-gradient-to-br from-neutral-50 to-neutral-100 h-[600px]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div class="grid lg:grid-cols-2 gap-12 items-center w-full">
                <div class="space-y-8">
                    <div class="space-y-4">
                        <h1 class="text-4xl lg:text-5xl text-neutral-900 leading-tight">
                            Manajemen Ruangan Kelas yang
                            <span class="text-neutral-700">Adil & Efisien</span>
                        </h1>
                        <p class="text-xl text-neutral-600 leading-relaxed">
                            Pesan ruangan kelas dengan mudah, pantau ketersediaan real-time, dan pastikan setiap jadwal
                            berjalan lancar.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button
                            class="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 hover:shadow-md transition-colors cursor-pointer">
                            Login Sekarang
                        </button>
                        <button
                            class="px-8 py-3 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 hover:shadow-md transition-colors cursor-pointer">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                    <div class="flex items-center space-x-8 pt-4">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-check-circle text-neutral-600"></i>
                            <span class="text-sm text-neutral-600">Sistem Prioritas Otomatis</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-clock text-neutral-600"></i>
                            <span class="text-sm text-neutral-600">Real-Time Status</span>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
                        <div class="space-y-6">
                            <div class="flex items-center justify-between">
                                <h3 class="text-neutral-900">Status Ruangan</h3>
                                <div class="w-3 h-3 bg-neutral-500 rounded-full"></div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-neutral-50 rounded-lg p-4">
                                    <div class="text-sm text-neutral-600">Ruang 101</div>
                                    <div class="text-xs text-neutral-600 mt-1">Tersedia</div>
                                </div>
                                <div class="bg-neutral-50 rounded-lg p-4">
                                    <div class="text-sm text-neutral-600">Ruang 102</div>
                                    <div class="text-xs text-neutral-600 mt-1">Terpakai</div>
                                </div>
                                <div class="bg-neutral-50 rounded-lg p-4">
                                    <div class="text-sm text-neutral-600">Ruang 103</div>
                                    <div class="text-xs text-neutral-600 mt-1">Tersedia</div>
                                </div>
                                <div class="bg-neutral-50 rounded-lg p-4">
                                    <div class="text-sm text-neutral-600">Ruang 104</div>
                                    <div class="text-xs text-neutral-600 mt-1">Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>