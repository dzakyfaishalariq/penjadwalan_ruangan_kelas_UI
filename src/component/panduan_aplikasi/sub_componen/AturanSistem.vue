<script setup></script>
<template>
    <section id="system-rules" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
                <h2 class="text-3xl text-neutral-900 mb-4">Aturan Sistem</h2>
                <p class="text-lg text-neutral-600">Ketentuan dan regulasi yang berlaku dalam sistem penjadwalan</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <div class="border-l-4 border-neutral-300 pl-6">
                        <h3 class="text-lg text-neutral-900 mb-2">Jam Operasional</h3>
                        <ul class="space-y-1 text-neutral-600">
                            <li>• Senin - Jumat: 08.00 - 17.00 WIB</li>
                            <li>• Istirahat: 12.00 - 13.00 WIB</li>
                            <li>• Weekend: Hanya untuk dosen (kegiatan khusus)</li>
                        </ul>
                    </div>

                    <div class="border-l-4 border-neutral-300 pl-6">
                        <h3 class="text-lg text-neutral-900 mb-2">Sistem Prioritas</h3>
                        <ul class="space-y-1 text-neutral-600">
                            <li>• Mahasiswa: 30 menit sebelum kelas</li>
                            <li>• Dosen: Setelah batas waktu mahasiswa</li>
                            <li>• Umum: Setelah jam operasional/weekend</li>
                        </ul>
                    </div>

                    <div class="border-l-4 border-neutral-300 pl-6">
                        <h3 class="text-lg text-neutral-900 mb-2">Pembatalan & Perubahan</h3>
                        <ul class="space-y-1 text-neutral-600">
                            <li>• Pembatalan minimal 1 jam sebelum jadwal</li>
                            <li>• Perubahan ruangan dapat dilakukan sebelum waktu mulai</li>
                            <li>• Sistem otomatis membatalkan booking yang tidak digunakan</li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="border-l-4 border-neutral-300 pl-6">
                        <h3 class="text-lg text-neutral-900 mb-2">Hak Akses</h3>
                        <ul class="space-y-1 text-neutral-600">
                            <li>• Komti/Ketua Kelas: Booking untuk kelas</li>
                            <li>• Dosen: Booking untuk mengajar/kegiatan</li>
                            <li>• Admin: Manajemen sistem dan ruangan</li>
                        </ul>
                    </div>

                    <div class="border-l-4 border-neutral-300 pl-6">
                        <h3 class="text-lg text-neutral-900 mb-2">Sanksi & Pelanggaran</h3>
                        <ul class="space-y-1 text-neutral-600">
                            <li>• No-show: Peringatan sistem</li>
                            <li>• Booking palsu: Suspensi sementara</li>
                            <li>• Pelanggaran berulang: Evaluasi akses</li>
                        </ul>
                    </div>

                    <div class="border-l-4 border-neutral-300 pl-6">
                        <h3 class="text-lg text-neutral-900 mb-2">Dukungan Teknis</h3>
                        <ul class="space-y-1 text-neutral-600">
                            <li>• Helpdesk: Senin-Jumat 08.00-16.00</li>
                            <li>• Email support: support@roomscheduler.edu</li>
                            <li>• Panduan online tersedia 24/7</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>