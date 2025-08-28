<script setup></script>
<template>
    <section id="contact-content" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16">
                <div class="space-y-8">
                    <div>
                        <h2 class="text-3xl text-neutral-900 mb-6">Informasi Kontak</h2>
                        <p class="text-lg text-neutral-600 mb-8">
                            Kami berkomitmen memberikan layanan terbaik untuk sistem penjadwalan ruangan kelas Anda
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div
                                class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-envelope text-neutral-700 text-lg"></i>
                            </div>
                            <div>
                                <h3 class="text-neutral-900 mb-1">Email Support</h3>
                                <p class="text-neutral-600">support@roomscheduler.edu</p>
                                <p class="text-sm text-neutral-500">Respons dalam 2-4 jam kerja</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div
                                class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-phone text-neutral-700 text-lg"></i>
                            </div>
                            <div>
                                <h3 class="text-neutral-900 mb-1">Telepon</h3>
                                <p class="text-neutral-600">+62 21 1234-5678</p>
                                <p class="text-sm text-neutral-500">Senin-Jumat, 08.00-17.00 WIB</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div
                                class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-map-marker-alt text-neutral-700 text-lg"></i>
                            </div>
                            <div>
                                <h3 class="text-neutral-900 mb-1">Alamat Kantor</h3>
                                <p class="text-neutral-600">Gedung IT Center Lt. 3<br>Jl. Pendidikan No. 123<br>Jakarta
                                    Selatan 12345</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div
                                class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-clock text-neutral-700 text-lg"></i>
                            </div>
                            <div>
                                <h3 class="text-neutral-900 mb-1">Jam Operasional Sistem</h3>
                                <p class="text-neutral-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                                <p class="text-sm text-neutral-500">Istirahat: 12.00 - 13.00 WIB</p>
                                <p class="text-sm text-neutral-500">Sabtu-Minggu: Akses terbuka</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-neutral-50 rounded-xl p-6">
                        <h3 class="text-neutral-900 mb-4">Tim Support Khusus</h3>
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div class="text-center">
                                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=4567"
                                    alt="Support Team" class="w-16 h-16 rounded-full mx-auto mb-2">
                                <h4 class="text-neutral-900 text-sm">Ahmad Rizki</h4>
                                <p class="text-xs text-neutral-600">Technical Support</p>
                            </div>
                            <div class="text-center">
                                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=7890"
                                    alt="Support Team" class="w-16 h-16 rounded-full mx-auto mb-2">
                                <h4 class="text-neutral-900 text-sm">Sari Indah</h4>
                                <p class="text-xs text-neutral-600">Customer Success</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
                    <h2 class="text-2xl text-neutral-900 mb-6">Kirim Pesan</h2>
                    <form class="space-y-6">
                        <div class="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm text-neutral-700 mb-2">Nama Lengkap</label>
                                <input type="text"
                                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500"
                                    placeholder="Masukkan nama lengkap">
                            </div>
                            <div>
                                <label class="block text-sm text-neutral-700 mb-2">Role</label>
                                <select
                                    class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                                    <option>Pilih Role</option>
                                    <option>Mahasiswa</option>
                                    <option>Ketua Kelas</option>
                                    <option>Dosen</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm text-neutral-700 mb-2">Email</label>
                            <input type="email"
                                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500"
                                placeholder="nama@email.com">
                        </div>

                        <div>
                            <label class="block text-sm text-neutral-700 mb-2">Kategori Masalah</label>
                            <select
                                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                                <option>Pilih kategori</option>
                                <option>Masalah Login</option>
                                <option>Kesalahan Pemesanan</option>
                                <option>Status Ruangan Tidak Update</option>
                                <option>Notifikasi Tidak Masuk</option>
                                <option>Masalah Prioritas</option>
                                <option>Lainnya</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-sm text-neutral-700 mb-2">Pesan</label>
                            <textarea rows="5"
                                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500"
                                placeholder="Jelaskan masalah atau pertanyaan Anda secara detail..."></textarea>
                        </div>

                        <div class="flex items-start space-x-3">
                            <input type="checkbox" class="mt-1" id="urgent">
                            <label for="urgent" class="text-sm text-neutral-600">
                                Tandai sebagai <span class="text-neutral-900">urgent</span> jika memerlukan respons
                                segera
                            </label>
                        </div>

                        <button type="submit"
                            class="w-full px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>