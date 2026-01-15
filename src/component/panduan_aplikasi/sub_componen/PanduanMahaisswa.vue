<script setup></script>
<template>
    <section id="student-guide" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
                <h2 class="text-3xl text-neutral-900 mb-4">Panduan untuk Mahasiswa</h2>
                <p class="text-lg text-neutral-600">Sebagai komti atau ketua kelas, ikuti langkah-langkah berikut untuk
                    memesan ruangan</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 mb-16">
                <div class="space-y-8">
                    <div class="border border-neutral-200 rounded-xl p-6">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-white text-sm">1</span>
                            </div>
                            <div>
                                <h3 class="text-lg text-neutral-900 mb-2">Login ke Sistem</h3>
                                <p class="text-neutral-600 mb-3">Masuk menggunakan akun mahasiswa yang telah terdaftar
                                    sebagai komti atau ketua kelas</p>
                                <div class="text-sm text-neutral-500">
                                    <font-awesome-icon icon="fa-solid fa-clock" class="mr-2" />
                                    Waktu: Kapan saja
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border border-neutral-200 rounded-xl p-6">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-white text-sm">2</span>
                            </div>
                            <div>
                                <h3 class="text-lg text-neutral-900 mb-2">Cek Jadwal Kelas</h3>
                                <p class="text-neutral-600 mb-3">Lihat jadwal mata kuliah dan tentukan waktu yang
                                    membutuhkan ruangan</p>
                                <div class="text-sm text-neutral-500">
                                    <font-awesome-icon icon="fa-solid fa-calendar" class="mr-2" />
                                    Senin-Jumat, 08.00-17.00 WIB
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border border-neutral-200 rounded-xl p-6">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-white text-sm">3</span>
                            </div>
                            <div>
                                <h3 class="text-lg text-neutral-900 mb-2">Pilih Ruangan</h3>
                                <p class="text-neutral-600 mb-3">30 menit sebelum kelas dimulai, pilih ruangan yang
                                    tersedia</p>
                                <div class="bg-neutral-50 rounded-lg p-3 mt-3">
                                    <div class="text-sm text-neutral-600">
                                        <!-- <i class="fa-solid fa-info-circle mr-2"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-info-circle" class="mr-2" />
                                        Hak prioritas berlaku 30 menit sebelum jadwal kelas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border border-neutral-200 rounded-xl p-6">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-white text-sm">4</span>
                            </div>
                            <div>
                                <h3 class="text-lg text-neutral-900 mb-2">Konfirmasi Pemesanan</h3>
                                <p class="text-neutral-600 mb-3">Sistem akan mengonfirmasi pemesanan dan mengirim
                                    notifikasi</p>
                                <div class="text-sm text-neutral-500">
                                    <!-- <i class="fa-solid fa-bell mr-2"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-bell" class="mr-2" />
                                    Notifikasi otomatis via sistem
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-neutral-50 rounded-xl p-8">
                    <h3 class="text-xl text-neutral-900 mb-6">Aturan Penting untuk Mahasiswa</h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-exclamation-triangle text-neutral-600 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-exclamation-triangle" class="text-neutral-600 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Batas Waktu Pemilihan</h4>
                                <p class="text-sm text-neutral-600">Hak prioritas hilang jika tidak memilih dalam 30
                                    menit sebelum kelas</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-users text-neutral-600 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-600 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Akses Terbatas</h4>
                                <p class="text-sm text-neutral-600">Hanya komti/ketua kelas yang dapat memesan ruangan
                                    untuk kelas</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-calendar-times text-neutral-600 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-calendar-times" class="text-neutral-600 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Jam Operasional</h4>
                                <p class="text-sm text-neutral-600">Sistem aktif Senin-Jumat, 08.00-17.00 WIB (istirahat
                                    12.00-13.00)</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <!-- <i class="fa-solid fa-rotate text-neutral-600 mt-1"></i> -->
                            <font-awesome-icon icon="fa-solid fa-rotate" class="text-neutral-600 mt-1" />
                            <div>
                                <h4 class="text-neutral-900 mb-1">Pengalihan Hak</h4>
                                <p class="text-sm text-neutral-600">Jika terlambat, hak pemilihan otomatis beralih ke
                                    dosen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white border border-neutral-200 rounded-xl p-8">
                <h3 class="text-xl text-neutral-900 mb-6">Status Ruangan dan Indikator</h3>
                <div class="grid md:grid-cols-4 gap-6">
                    <div class="text-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-4 h-4 bg-neutral-500 rounded-full mx-auto mb-2"></div>
                        <h4 class="text-neutral-900 mb-1">Tersedia</h4>
                        <p class="text-xs text-neutral-600">Ruangan dapat dipesan</p>
                    </div>
                    <div class="text-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-4 h-4 bg-neutral-700 rounded-full mx-auto mb-2"></div>
                        <h4 class="text-neutral-900 mb-1">Terpakai</h4>
                        <p class="text-xs text-neutral-600">Sedang digunakan</p>
                    </div>
                    <div class="text-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-4 h-4 bg-neutral-400 rounded-full mx-auto mb-2"></div>
                        <h4 class="text-neutral-900 mb-1">Pending</h4>
                        <p class="text-xs text-neutral-600">Menunggu konfirmasi</p>
                    </div>
                    <div class="text-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-4 h-4 bg-neutral-300 rounded-full mx-auto mb-2"></div>
                        <h4 class="text-neutral-900 mb-1">Maintenance</h4>
                        <p class="text-xs text-neutral-600">Tidak tersedia</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>