<script setup></script>
<template>
    <div id="reports-content" class="p-8">
        <!-- Filter Section -->
        <div class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
            <h2 class="text-lg text-neutral-900 mb-4">Filter Laporan</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Periode</label>
                    <select
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        <option>Minggu Ini</option>
                        <option>Bulan Ini</option>
                        <option>3 Bulan Terakhir</option>
                        <option>Tahun Ini</option>
                        <option>Custom</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Ruangan</label>
                    <select
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        <option>Semua Ruangan</option>
                        <option>Lab Komputer 1</option>
                        <option>Lab Komputer 2</option>
                        <option>Ruang Kelas A101</option>
                        <option>Ruang Kelas B201</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm text-neutral-600 mb-2">Pengguna</label>
                    <select
                        class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        <option>Semua Pengguna</option>
                        <option>Mahasiswa</option>
                        <option>Dosen</option>
                    </select>
                </div>
                <div class="flex items-end">
                    <button class="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                        <!-- <i class="fa-solid fa-filter mr-2"></i> -->
                        <font-awesome-icon icon="fa-solid fa-filter" class="mr-2" />
                        Filter
                    </button>
                </div>
            </div>
        </div>

        <!-- Statistics Overview -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <p class="text-sm text-neutral-600">Total Pemesanan</p>
                        <p class="text-2xl text-neutral-900">1,247</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-calendar-check text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-calendar-check" class="text-neutral-600" />
                    </div>
                </div>
                <div class="flex items-center text-sm">
                    <!-- <i class="fa-solid fa-arrow-up text-neutral-600 mr-1"></i> -->
                    <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-neutral-600 mr-1" />
                    <span class="text-neutral-600">+12% dari bulan lalu</span>
                </div>
            </div>

            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <p class="text-sm text-neutral-600">Tingkat Okupansi</p>
                        <p class="text-2xl text-neutral-900">78%</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-chart-pie text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-chart-pie" class="text-neutral-600" />
                    </div>
                </div>
                <div class="flex items-center text-sm">
                    <!-- <i class="fa-solid fa-arrow-up text-neutral-600 mr-1"></i> -->
                    <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-neutral-600 mr-1" />
                    <span class="text-neutral-600">+5% dari bulan lalu</span>
                </div>
            </div>

            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <p class="text-sm text-neutral-600">Rata-rata Durasi</p>
                        <p class="text-2xl text-neutral-900">2.4h</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-clock text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-clock" class="text-neutral-600" />
                    </div>
                </div>
                <div class="flex items-center text-sm">
                    <!-- <i class="fa-solid fa-arrow-down text-neutral-600 mr-1"></i> -->
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="text-neutral-600 mr-1" />
                    <span class="text-neutral-600">-3% dari bulan lalu</span>
                </div>
            </div>

            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <p class="text-sm text-neutral-600">Pembatalan</p>
                        <p class="text-2xl text-neutral-900">89</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-times-circle text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-times-circle" class="text-neutral-600" />
                    </div>
                </div>
                <div class="flex items-center text-sm">
                    <!-- <i class="fa-solid fa-arrow-down text-neutral-600 mr-1"></i> -->
                    <font-awesome-icon icon="fa-solid fa-arrow-down" class="text-neutral-600 mr-1" />
                    <span class="text-neutral-600">-8% dari bulan lalu</span>
                </div>
            </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Usage Chart -->
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg text-neutral-900">
                        Penggunaan Ruangan per Hari
                    </h3>
                    <button class="text-sm text-neutral-600 hover:text-neutral-900">
                        <!-- <i class="fa-solid fa-download mr-1"></i> -->
                        <font-awesome-icon icon="fa-solid fa-download" class="mr-1" />
                        Export
                    </button>
                </div>
                <div class="h-64 bg-neutral-50 rounded-lg flex items-center justify-center">
                    <div class="text-center">
                        <!-- <i class="fa-solid fa-chart-line text-4xl text-neutral-400 mb-2"></i> -->
                        <font-awesome-icon icon="fa-solid fa-chart-line" class="text-4xl text-neutral-400 mb-2" />
                        <p class="text-neutral-600">Grafik Penggunaan Harian</p>
                    </div>
                </div>
            </div>

            <!-- Room Popularity -->
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg text-neutral-900">Ruangan Terpopuler</h3>
                    <button class="text-sm text-neutral-600 hover:text-neutral-900">
                        <!-- <i class="fa-solid fa-download mr-1"></i> -->
                        <font-awesome-icon icon="fa-solid fa-download" class="mr-1" />
                        Export
                    </button>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mr-3">
                                <span class="text-sm text-neutral-900">1</span>
                            </div>
                            <div>
                                <p class="text-neutral-900">Lab Komputer 1</p>
                                <p class="text-sm text-neutral-500">234 pemesanan</p>
                            </div>
                        </div>
                        <div class="w-20 bg-neutral-100 rounded-full h-2">
                            <div class="bg-neutral-900 h-2 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mr-3">
                                <span class="text-sm text-neutral-900">2</span>
                            </div>
                            <div>
                                <p class="text-neutral-900">Ruang Kelas A101</p>
                                <p class="text-sm text-neutral-500">198 pemesanan</p>
                            </div>
                        </div>
                        <div class="w-20 bg-neutral-100 rounded-full h-2">
                            <div class="bg-neutral-900 h-2 rounded-full" style="width: 70%"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mr-3">
                                <span class="text-sm text-neutral-900">3</span>
                            </div>
                            <div>
                                <p class="text-neutral-900">Lab Komputer 2</p>
                                <p class="text-sm text-neutral-500">167 pemesanan</p>
                            </div>
                        </div>
                        <div class="w-20 bg-neutral-100 rounded-full h-2">
                            <div class="bg-neutral-900 h-2 rounded-full" style="width: 60%"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mr-3">
                                <span class="text-sm text-neutral-900">4</span>
                            </div>
                            <div>
                                <p class="text-neutral-900">Ruang Kelas B201</p>
                                <p class="text-sm text-neutral-500">143 pemesanan</p>
                            </div>
                        </div>
                        <div class="w-20 bg-neutral-100 rounded-full h-2">
                            <div class="bg-neutral-900 h-2 rounded-full" style="width: 50%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detailed Reports Table -->
        <div class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-lg text-neutral-900">Laporan Detail Pemesanan</h3>
                        <p class="text-sm text-neutral-600">
                            Riwayat pemesanan ruangan terbaru
                        </p>
                    </div>
                    <div class="flex space-x-3">
                        <button
                            class="flex items-center px-4 py-2 border border-neutral-300 rounded-lg text-neutral-600 hover:bg-neutral-50">
                            <!-- <i class="fa-solid fa-download mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-download" class="mr-2" />
                            Export CSV
                        </button>
                        <button
                            class="flex items-center px-4 py-2 border border-neutral-300 rounded-lg text-neutral-600 hover:bg-neutral-50">
                            <!-- <i class="fa-solid fa-file-pdf mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-file-pdf" class="mr-2" />
                            Export PDF
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th class="text-left p-4 text-sm text-neutral-600">Tanggal</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Ruangan</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Pengguna</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Waktu</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Durasi</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-neutral-100">
                            <td class="p-4 text-neutral-900">25 Agu 2025</td>
                            <td class="p-4 text-neutral-600">Lab Komputer 1</td>
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1111"
                                        alt="User" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="text-neutral-900">Ahmad Rizki</span>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">08:00 - 10:00</td>
                            <td class="p-4 text-neutral-600">2 jam</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Selesai</span>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100">
                            <td class="p-4 text-neutral-900">25 Agu 2025</td>
                            <td class="p-4 text-neutral-600">Ruang Kelas A101</td>
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=2222"
                                        alt="User" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="text-neutral-900">Dr. Siti Nurhaliza</span>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">10:00 - 12:00</td>
                            <td class="p-4 text-neutral-600">2 jam</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Berlangsung</span>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100">
                            <td class="p-4 text-neutral-900">24 Agu 2025</td>
                            <td class="p-4 text-neutral-600">Lab Komputer 2</td>
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3333"
                                        alt="User" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="text-neutral-900">Andi Wijaya</span>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">13:00 - 15:00</td>
                            <td class="p-4 text-neutral-600">2 jam</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Selesai</span>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100">
                            <td class="p-4 text-neutral-900">24 Agu 2025</td>
                            <td class="p-4 text-neutral-600">Ruang Kelas B201</td>
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=4444"
                                        alt="User" class="w-8 h-8 rounded-full mr-2" />
                                    <span class="text-neutral-900">Maya Sari</span>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">15:00 - 17:00</td>
                            <td class="p-4 text-neutral-600">2 jam</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Dibatalkan</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-neutral-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-600">
                        Menampilkan 1 - 4 dari 1,247 pemesanan
                    </p>
                    <div class="flex items-center space-x-2">
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>
                        <button class="px-3 py-1 bg-neutral-900 text-white rounded text-sm">
                            1
                        </button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            2
                        </button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            3
                        </button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            4
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>