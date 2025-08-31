<script setup></script>

<template>
    <section id="priority-system" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <div class="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center">
                        <!-- <i class="fa-solid fa-hourglass-half text-neutral-700 text-2xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-hourglass-half" class="text-neutral-700 text-2xl" />
                    </div>
                    <h2 class="text-3xl text-neutral-900">Sistem Prioritas Otomatis</h2>
                    <p class="text-lg text-neutral-600">
                        Mahasiswa memiliki hak prioritas untuk memilih ruangan 30 menit sebelum kelas dimulai. Jika
                        mahasiswa terlambat, hak pemilihan otomatis beralih ke dosen.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-clock text-neutral-500 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-clock" class="text-neutral-500 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Waktu Prioritas Mahasiswa</h4>
                                <p class="text-neutral-600 text-sm">30 menit sebelum jadwal kelas dimulai</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-user-graduate text-neutral-500 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-user-graduate" class="text-neutral-500 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Khusus Komti/Ketua Kelas</h4>
                                <p class="text-neutral-600 text-sm">Hanya mahasiswa dengan peran tertentu yang dapat
                                    memilih</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-exchange-alt text-neutral-500 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-exchange-alt" class="text-neutral-500 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Transfer Otomatis ke Dosen</h4>
                                <p class="text-neutral-600 text-sm">Hak pemilihan beralih jika mahasiswa terlambat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-neutral-50 rounded-2xl p-8">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-neutral-900 mb-4">Timeline Prioritas</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs">1</span>
                                </div>
                                <div>
                                    <div class="text-sm text-neutral-900">08:30 - Mahasiswa dapat memilih</div>
                                    <div class="text-xs text-neutral-600">Untuk kelas jam 09:00</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 bg-neutral-400 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs">2</span>
                                </div>
                                <div>
                                    <div class="text-sm text-neutral-600">09:00 - Hak beralih ke dosen</div>
                                    <div class="text-xs text-neutral-600">Jika mahasiswa belum memilih</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="realtime-status" class="py-20 bg-neutral-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 class="text-neutral-900 mb-6">Dashboard Status Ruangan</h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-neutral-50 rounded-lg p-4 border-l-4 border-neutral-500">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm text-neutral-900">Ruang A101</span>
                                <div class="w-3 h-3 bg-neutral-500 rounded-full"></div>
                            </div>
                            <div class="text-xs text-neutral-600">Tersedia</div>
                            <div class="text-xs text-neutral-500 mt-1">Kapasitas: 40</div>
                        </div>
                        <div class="bg-neutral-50 rounded-lg p-4 border-l-4 border-neutral-400">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm text-neutral-900">Ruang A102</span>
                                <div class="w-3 h-3 bg-neutral-400 rounded-full"></div>
                            </div>
                            <div class="text-xs text-neutral-600">Terpakai</div>
                            <div class="text-xs text-neutral-500 mt-1">09:00 - 10:30</div>
                        </div>
                        <div class="bg-neutral-50 rounded-lg p-4 border-l-4 border-neutral-400">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm text-neutral-900">Ruang A103</span>
                                <div class="w-3 h-3 bg-neutral-400 rounded-full"></div>
                            </div>
                            <div class="text-xs text-neutral-600">Pending</div>
                            <div class="text-xs text-neutral-500 mt-1">Menunggu konfirmasi</div>
                        </div>
                        <div class="bg-neutral-50 rounded-lg p-4 border-l-4 border-neutral-500">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm text-neutral-900">Ruang A104</span>
                                <div class="w-3 h-3 bg-neutral-500 rounded-full"></div>
                            </div>
                            <div class="text-xs text-neutral-600">Tersedia</div>
                            <div class="text-xs text-neutral-500 mt-1">Kapasitas: 35</div>
                        </div>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center">
                        <i class="fa-solid fa-circle-dot text-neutral-700 text-2xl"></i>
                    </div>
                    <h2 class="text-3xl text-neutral-900">Status Real-Time</h2>
                    <p class="text-lg text-neutral-600">
                        Pantau ketersediaan ruangan secara langsung dengan update otomatis setiap detik. Sistem
                        menampilkan status dengan indikator visual yang jelas.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-4 h-4 bg-neutral-500 rounded-full mt-1"></div>
                            <div>
                                <h4 class="text-neutral-900 mb-1">Tersedia</h4>
                                <p class="text-neutral-600 text-sm">Ruangan dapat langsung dipesan</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-4 h-4 bg-neutral-400 rounded-full mt-1"></div>
                            <div>
                                <h4 class="text-neutral-900 mb-1">Terpakai</h4>
                                <p class="text-neutral-600 text-sm">Ruangan sedang digunakan dengan jadwal tertentu</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-4 h-4 bg-neutral-400 rounded-full mt-1"></div>
                            <div>
                                <h4 class="text-neutral-900 mb-1">Pending</h4>
                                <p class="text-neutral-600 text-sm">Menunggu konfirmasi pemesanan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="calendar-notification" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <div class="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center">
                        <!-- <i class="fa-solid fa-calendar-check text-neutral-700 text-2xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-calendar-check" class="text-neutral-700 text-2xl" />
                    </div>
                    <h2 class="text-3xl text-neutral-900">Kalender & Notifikasi</h2>
                    <p class="text-lg text-neutral-600">
                        Semua jadwal pemesanan otomatis tercatat dalam kalender sistem. Dapatkan notifikasi pengingat
                        untuk setiap aktivitas penting.
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-bell text-neutral-500 mt-1"></i>
                            <div>
                                <h4 class="text-neutral-900 mb-1">Notifikasi Real-Time</h4>
                                <p class="text-neutral-600 text-sm">Pengingat 15 menit sebelum jadwal dimulai</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-sync text-neutral-500 mt-1"></i>
                            <div>
                                <h4 class="text-neutral-900 mb-1">Sinkronisasi Otomatis</h4>
                                <p class="text-neutral-600 text-sm">Jadwal tersimpan otomatis setelah konfirmasi</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <i class="fa-solid fa-mobile-alt text-neutral-500 mt-1"></i>
                            <div>
                                <h4 class="text-neutral-900 mb-1">Multi-Platform</h4>
                                <p class="text-neutral-600 text-sm">Akses kalender dari web dan mobile</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-neutral-50 rounded-2xl p-8">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-neutral-900">Jadwal Hari Ini</h3>
                            <i class="fa-solid fa-bell text-neutral-400"></i>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                                <div class="w-2 h-8 bg-neutral-900 rounded-full"></div>
                                <div>
                                    <div class="text-sm text-neutral-900">Ruang A101</div>
                                    <div class="text-xs text-neutral-600">09:00 - 10:30</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                                <div class="w-2 h-8 bg-neutral-400 rounded-full"></div>
                                <div>
                                    <div class="text-sm text-neutral-900">Ruang A103</div>
                                    <div class="text-xs text-neutral-600">13:00 - 14:30</div>
                                    <div class="text-xs text-neutral-600">Reminder dalam 15 menit</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                                <div class="w-2 h-8 bg-neutral-400 rounded-full"></div>
                                <div>
                                    <div class="text-sm text-neutral-900">Ruang B201</div>
                                    <div class="text-xs text-neutral-600">15:00 - 16:30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>