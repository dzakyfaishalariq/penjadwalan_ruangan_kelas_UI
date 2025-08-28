<script setup></script>

<template>
    <!-- Peran Pengguna Section -->
    <section id="user-roles" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl text-neutral-900 mb-4">Peran Pengguna</h2>
                <p class="text-lg text-neutral-600">Sistem dirancang untuk memenuhi kebutuhan berbagai peran dalam
                    lingkungan akademik</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-user-graduate text-neutral-700 text-2xl"></i>
                    </div>
                    <h3 class="text-xl text-neutral-900 mb-4">Mahasiswa (Komti/Ketua Kelas)</h3>
                    <ul class="text-neutral-600 text-sm space-y-2">
                        <li>Hak prioritas pemilihan ruangan</li>
                        <li>Akses 30 menit sebelum jadwal</li>
                        <li>Notifikasi pengingat otomatis</li>
                        <li>Riwayat pemesanan ruangan</li>
                    </ul>
                </div>
                <div class="text-center">
                    <div class="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-chalkboard-teacher text-neutral-700 text-2xl"></i>
                    </div>
                    <h3 class="text-xl text-neutral-900 mb-4">Dosen</h3>
                    <ul class="text-neutral-600 text-sm space-y-2">
                        <li>Hak pemilihan setelah mahasiswa</li>
                        <li>Override untuk keperluan mendesak</li>
                        <li>Akses penuh ke kalender ruangan</li>
                        <li>Laporan penggunaan ruangan</li>
                    </ul>
                </div>
                <div class="text-center">
                    <div class="w-20 h-20 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <i class="fa-solid fa-user-cog text-neutral-700 text-2xl"></i>
                    </div>
                    <h3 class="text-xl text-neutral-900 mb-4">Administrator</h3>
                    <ul class="text-neutral-600 text-sm space-y-2">
                        <li>Kelola semua ruangan dan jadwal</li>
                        <li>Monitor penggunaan sistem</li>
                        <li>Atur aturan dan kebijakan</li>
                        <li>Laporan analitik lengkap</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

</template>