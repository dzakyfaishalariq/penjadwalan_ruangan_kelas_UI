<script setup></script>
<template>
    <section id="lecturer-guide" class="py-16 bg-neutral-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
                <h2 class="text-3xl text-neutral-900 mb-4">Panduan untuk Dosen</h2>
                <p class="text-lg text-neutral-600">Langkah-langkah pemesanan ruangan untuk dosen pengajar</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <div class="bg-white border border-neutral-200 rounded-xl p-6">
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                        <!-- <i class="fa-solid fa-user-graduate text-neutral-700 text-xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-user-graduate" class="text-neutral-700 text-lg" />
                    </div>
                    <h3 class="text-lg text-neutral-900 mb-3">Hak Prioritas Kedua</h3>
                    <p class="text-neutral-600 mb-4">Dosen mendapat hak pemilihan ruangan jika mahasiswa terlambat atau
                        tidak memilih</p>
                    <div class="text-sm text-neutral-500">
                        <!-- <i class="fa-solid fa-clock mr-2"></i> -->
                        <font-awesome-icon icon="fa-solid fa-clock" class="text-neutral-400 mr-2" />
                        Aktif setelah batas waktu mahasiswa
                    </div>
                </div>

                <div class="bg-white border border-neutral-200 rounded-xl p-6">
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                        <!-- <i class="fa-solid fa-calendar-plus text-neutral-700 text-xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-calendar-plus" class="text-neutral-700 text-lg" />
                    </div>
                    <h3 class="text-lg text-neutral-900 mb-3">Akses Weekend</h3>
                    <p class="text-neutral-600 mb-4">Dosen dapat memesan ruangan di hari Sabtu-Minggu untuk kegiatan
                        khusus</p>
                    <div class="text-sm text-neutral-500">
                        <!-- <i class="fa-solid fa-calendar-week mr-2"></i> -->
                        <font-awesome-icon icon="fa-solid fa-calendar-week" class="text-neutral-400 mr-2" />
                        Sabtu-Minggu tersedia
                    </div>
                </div>

                <div class="bg-white border border-neutral-200 rounded-xl p-6">
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
                        <!-- <i class="fa-solid fa-bell text-neutral-700 text-xl"></i> -->
                        <font-awesome-icon icon="fa-solid fa-bell" class="text-neutral-700 text-lg" />
                    </div>
                    <h3 class="text-lg text-neutral-900 mb-3">Notifikasi Khusus</h3>
                    <p class="text-neutral-600 mb-4">Mendapat notifikasi jika ada perubahan status ruangan atau konflik
                        jadwal</p>
                    <div class="text-sm text-neutral-500">
                        <!-- <i class="fa-solid fa-envelope mr-2"></i> -->
                        <font-awesome-icon icon="fa-solid fa-envelope" class="text-neutral-400 mr-2" />
                        Email & sistem notifikasi
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>