<script setup></script>
<template>
    <div id="dashboard-stats" class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Ruangan</p>
                        <p class="text-2xl text-neutral-900">24</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-building text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-building" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Ruangan Aktif</p>
                        <p class="text-2xl text-neutral-900">18</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-circle-dot text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-circle-dot" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Pengguna</p>
                        <p class="text-2xl text-neutral-900">156</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-users text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Booking Hari Ini</p>
                        <p class="text-2xl text-neutral-900">32</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-calendar-check text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-calendar-check" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Management Tables -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Room Management -->
            <div id="room-management" class="bg-white rounded-lg border border-neutral-200">
                <div class="p-6 border-b border-neutral-200">
                    <div class="flex justify-between items-center">
                        <h2 class="text-lg text-neutral-900">Manajemen Ruangan</h2>
                        <button
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Ruangan
                        </button>
                    </div>
                    <div class="mt-4">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input type="text" placeholder="Cari ruangan..."
                                class="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-neutral-50">
                            <tr>
                                <th class="text-left p-4 text-sm text-neutral-600">Nama Ruangan</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Kapasitas</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-neutral-100">
                                <td class="p-4 text-neutral-900">Ruang 101</td>
                                <td class="p-4 text-neutral-600">30 orang</td>
                                <td class="p-4">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Tersedia</span>
                                </td>
                                <td class="p-4">
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-edit"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-edit" />
                                        </button>
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-trash"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-neutral-100">
                                <td class="p-4 text-neutral-900">Ruang 102</td>
                                <td class="p-4 text-neutral-600">25 orang</td>
                                <td class="p-4">
                                    <span
                                        class="px-2 py-1 bg-neutral-200 text-neutral-800 text-xs rounded">Terpakai</span>
                                </td>
                                <td class="p-4">
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-edit"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-edit" />
                                        </button>
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-trash"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4 text-neutral-900">Ruang 103</td>
                                <td class="p-4 text-neutral-600">40 orang</td>
                                <td class="p-4">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Tersedia</span>
                                </td>
                                <td class="p-4">
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-edit"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-edit" />
                                        </button>
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-trash"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- User Management -->
            <div id="user-management" class="bg-white rounded-lg border border-neutral-200">
                <div class="p-6 border-b border-neutral-200">
                    <div class="flex justify-between items-center">
                        <h2 class="text-lg text-neutral-900">Manajemen Pengguna</h2>
                        <button
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Pengguna
                        </button>
                    </div>
                    <div class="mt-4">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input type="text" placeholder="Cari pengguna..."
                                class="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-neutral-50">
                            <tr>
                                <th class="text-left p-4 text-sm text-neutral-600">Nama</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Role</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                                <th class="text-left p-4 text-sm text-neutral-600">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-neutral-100">
                                <td class="p-4">
                                    <div class="flex items-center">
                                        <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234"
                                            alt="User" class="w-8 h-8 rounded-full mr-3">
                                        <span class="text-neutral-900">Ahmad Rizki</span>
                                    </div>
                                </td>
                                <td class="p-4 text-neutral-600">Mahasiswa</td>
                                <td class="p-4">
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Aktif</span>
                                </td>
                                <td class="p-4">
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-edit"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-edit" />
                                        </button>
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-trash"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-neutral-100">
                                <td class="p-4">
                                    <div class="flex items-center">
                                        <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678"
                                            alt="User" class="w-8 h-8 rounded-full mr-3">
                                        <span class="text-neutral-900">Dr. Sarah Putri</span>
                                    </div>
                                </td>
                                <td class="p-4 text-neutral-600">Dosen</td>
                                <td class="p-4">
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Aktif</span>
                                </td>
                                <td class="p-4">
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-edit"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-edit" />
                                        </button>
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-trash"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-4">
                                    <div class="flex items-center">
                                        <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9012"
                                            alt="User" class="w-8 h-8 rounded-full mr-3">
                                        <span class="text-neutral-900">Budi Santoso</span>
                                    </div>
                                </td>
                                <td class="p-4 text-neutral-600">Mahasiswa</td>
                                <td class="p-4">
                                    <span
                                        class="px-2 py-1 bg-neutral-200 text-neutral-800 text-xs rounded">Non-aktif</span>
                                </td>
                                <td class="p-4">
                                    <div class="flex space-x-2">
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-edit"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-edit" />
                                        </button>
                                        <button class="p-2 text-neutral-600 hover:text-neutral-900">
                                            <!-- <i class="fa-solid fa-trash"></i> -->
                                            <font-awesome-icon icon="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Recent Activities -->
        <div id="recent-activities" class="mt-8 bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <h2 class="text-lg text-neutral-900">Aktivitas Terbaru</h2>
            </div>
            <div class="p-6">
                <div class="space-y-4">
                    <div class="flex items-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center mr-4">
                            <!-- <i class="fa-solid fa-plus text-neutral-600"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="text-neutral-600" />
                        </div>
                        <div class="flex-1">
                            <p class="text-neutral-900">Ruang 105 berhasil ditambahkan</p>
                            <p class="text-sm text-neutral-600">2 menit yang lalu</p>
                        </div>
                    </div>
                    <div class="flex items-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center mr-4">
                            <!-- <i class="fa-solid fa-edit text-neutral-600"></i> -->
                            <font-awesome-icon icon="fa-solid fa-edit" class="text-neutral-600" />
                        </div>
                        <div class="flex-1">
                            <p class="text-neutral-900">Data pengguna Ahmad Rizki diperbarui</p>
                            <p class="text-sm text-neutral-600">15 menit yang lalu</p>
                        </div>
                    </div>
                    <div class="flex items-center p-4 bg-neutral-50 rounded-lg">
                        <div class="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center mr-4">
                            <!-- <i class="fa-solid fa-calendar text-neutral-600"></i> -->
                            <font-awesome-icon icon="fa-solid fa-calendar" class="text-neutral-600" />
                        </div>
                        <div class="flex-1">
                            <p class="text-neutral-900">Booking ruang 102 dikonfirmasi</p>
                            <p class="text-sm text-neutral-600">30 menit yang lalu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>