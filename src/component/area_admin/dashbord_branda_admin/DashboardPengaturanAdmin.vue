<script setup>
</script>
<template>
    <div id="settings-content" class="p-8">
        <!-- General Settings -->
        <div class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
            <div class="border-b border-neutral-200 pb-4 mb-6">
                <h2 class="text-lg text-neutral-900 mb-2">Pengaturan Umum</h2>
                <p class="text-sm text-neutral-600">Konfigurasi dasar sistem penjadwalan ruangan</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Nama Sistem</label>
                    <input type="text" value="RoomScheduler"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Email Administrator</label>
                    <input type="email" value="admin@roomscheduler.com"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Zona Waktu</label>
                    <select
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        <option>WIB (UTC+7)</option>
                        <option>WITA (UTC+8)</option>
                        <option>WIT (UTC+9)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Bahasa Sistem</label>
                    <select
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        <option>Bahasa Indonesia</option>
                        <option>English</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Booking Rules -->
        <div class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
            <div class="border-b border-neutral-200 pb-4 mb-6">
                <h2 class="text-lg text-neutral-900 mb-2">Aturan Pemesanan</h2>
                <p class="text-sm text-neutral-600">Konfigurasi waktu dan prioritas pemesanan ruangan</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Waktu Prioritas Mahasiswa (menit sebelum
                        kelas)</label>
                    <input type="number" value="30"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Durasi Maksimal Pemesanan (jam)</label>
                    <input type="number" value="4"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Jam Mulai Operasional</label>
                    <input type="time" value="08:00"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Jam Selesai Operasional</label>
                    <input type="time" value="17:00"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Jam Mulai Istirahat</label>
                    <input type="time" value="12:00"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Jam Selesai Istirahat</label>
                    <input type="time" value="13:00"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
            </div>

            <div class="mt-6">
                <label class="flex items-center">
                    <input type="checkbox" checked class="mr-3">
                    <span class="text-sm text-neutral-700">Izinkan akses ruangan di akhir pekan (Sabtu & Minggu)</span>
                </label>
            </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
            <div class="border-b border-neutral-200 pb-4 mb-6">
                <h2 class="text-lg text-neutral-900 mb-2">Pengaturan Notifikasi</h2>
                <p class="text-sm text-neutral-600">Konfigurasi notifikasi email dan sistem</p>
            </div>

            <div class="space-y-4">
                <label class="flex items-center justify-between">
                    <div>
                        <span class="text-sm text-neutral-700">Notifikasi Pemesanan Berhasil</span>
                        <p class="text-xs text-neutral-500">Kirim notifikasi saat pemesanan berhasil dibuat</p>
                    </div>
                    <div class="relative">
                        <input type="checkbox" checked class="sr-only">
                        <div class="w-10 h-6 bg-neutral-900 rounded-full shadow-inner"></div>
                        <div class="absolute w-4 h-4 bg-white rounded-full shadow right-1 top-1"></div>
                    </div>
                </label>

                <label class="flex items-center justify-between">
                    <div>
                        <span class="text-sm text-neutral-700">Pengingat Pemesanan</span>
                        <p class="text-xs text-neutral-500">Kirim pengingat 15 menit sebelum jadwal dimulai</p>
                    </div>
                    <div class="relative">
                        <input type="checkbox" checked class="sr-only">
                        <div class="w-10 h-6 bg-neutral-900 rounded-full shadow-inner"></div>
                        <div class="absolute w-4 h-4 bg-white rounded-full shadow right-1 top-1"></div>
                    </div>
                </label>

                <label class="flex items-center justify-between">
                    <div>
                        <span class="text-sm text-neutral-700">Notifikasi Pembatalan</span>
                        <p class="text-xs text-neutral-500">Kirim notifikasi saat pemesanan dibatalkan</p>
                    </div>
                    <div class="relative">
                        <input type="checkbox" class="sr-only">
                        <div class="w-10 h-6 bg-neutral-200 rounded-full shadow-inner"></div>
                        <div class="absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1"></div>
                    </div>
                </label>

                <label class="flex items-center justify-between">
                    <div>
                        <span class="text-sm text-neutral-700">Laporan Harian Admin</span>
                        <p class="text-xs text-neutral-500">Kirim ringkasan harian ke email admin</p>
                    </div>
                    <div class="relative">
                        <input type="checkbox" checked class="sr-only">
                        <div class="w-10 h-6 bg-neutral-900 rounded-full shadow-inner"></div>
                        <div class="absolute w-4 h-4 bg-white rounded-full shadow right-1 top-1"></div>
                    </div>
                </label>
            </div>
        </div>

        <!-- Security Settings -->
        <div class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
            <div class="border-b border-neutral-200 pb-4 mb-6">
                <h2 class="text-lg text-neutral-900 mb-2">Pengaturan Keamanan</h2>
                <p class="text-sm text-neutral-600">Konfigurasi keamanan dan akses sistem</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Durasi Sesi Login (menit)</label>
                    <input type="number" value="480"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Maksimal Percobaan Login</label>
                    <input type="number" value="5"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
            </div>

            <div class="mt-6 space-y-4">
                <label class="flex items-center">
                    <input type="checkbox" checked class="mr-3">
                    <span class="text-sm text-neutral-700">Wajibkan verifikasi email untuk akun baru</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" class="mr-3">
                    <span class="text-sm text-neutral-700">Aktifkan autentikasi dua faktor (2FA)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" checked class="mr-3">
                    <span class="text-sm text-neutral-700">Log aktivitas pengguna</span>
                </label>
            </div>
        </div>

        <!-- Backup & Maintenance -->
        <div class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
            <div class="border-b border-neutral-200 pb-4 mb-6">
                <h2 class="text-lg text-neutral-900 mb-2">Backup & Maintenance</h2>
                <p class="text-sm text-neutral-600">Pengaturan backup data dan pemeliharaan sistem</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Frekuensi Backup Otomatis</label>
                    <select
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        <option>Harian</option>
                        <option>Mingguan</option>
                        <option>Bulanan</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Retensi Backup (hari)</label>
                    <input type="number" value="30"
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                </div>
            </div>

            <div class="mt-6 flex space-x-4">
                <button class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    <!-- <i class="fa-solid fa-download mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-download" class="mr-2" />
                    Backup Manual
                </button>
                <button
                    class="flex items-center px-4 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50">
                    <!-- <i class="fa-solid fa-history mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-history" class="mr-2" />
                    Restore Data
                </button>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-between items-center">
            <button class="px-6 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50">
                Reset ke Default
            </button>
            <div class="flex space-x-4">
                <button class="px-6 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button class="px-6 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan Pengaturan
                </button>
            </div>
        </div>
    </div>
</template>