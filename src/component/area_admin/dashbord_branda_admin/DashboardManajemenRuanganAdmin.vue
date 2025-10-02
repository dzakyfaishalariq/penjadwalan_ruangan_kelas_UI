<script setup></script>
<template>
    <div id="room-management-content" class="p-8">
        <!-- Stats Cards -->
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
                        <p class="text-sm text-neutral-600">Ruangan Tersedia</p>
                        <p class="text-2xl text-neutral-900">18</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-circle-check text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-circle-check" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Ruangan Terpakai</p>
                        <p class="text-2xl text-neutral-900">6</p>
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
                        <p class="text-sm text-neutral-600">Kapasitas Total</p>
                        <p class="text-2xl text-neutral-900">720</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-users text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Room Management Table -->
        <div id="room-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Ruangan</h2>
                        <p class="text-sm text-neutral-600">Kelola semua ruangan kelas dan fasilitas</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search" class="absolute left-3 top-3 text-neutral-400" />
                            <input type="text" placeholder="Cari ruangan..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64">
                        </div>
                        <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Status</option>
                            <option>Tersedia</option>
                            <option>Terpakai</option>
                            <option>Maintenance</option>
                        </select>
                        <button
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Ruangan
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Nama Ruangan
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Kapasitas
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">Fasilitas</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                            <th class="text-left p-4 text-sm text-neutral-600">Jadwal Hari Ini</th>
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div>
                                    <p class="text-neutral-900">Ruang 101</p>
                                    <p class="text-sm text-neutral-500">Lantai 1 - Gedung A</p>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">30 orang</td>
                            <td class="p-4">
                                <div class="flex space-x-2">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Proyektor</span>
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">AC</span>
                                </div>
                            </td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Tersedia</span>
                            </td>
                            <td class="p-4">
                                <div class="text-sm">
                                    <p class="text-neutral-900">08:00 - 10:00</p>
                                    <p class="text-neutral-500">Matematika Diskrit</p>
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div>
                                    <p class="text-neutral-900">Ruang 102</p>
                                    <p class="text-sm text-neutral-500">Lantai 1 - Gedung A</p>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">25 orang</td>
                            <td class="p-4">
                                <div class="flex space-x-2">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Proyektor</span>
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Whiteboard</span>
                                </div>
                            </td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Terpakai</span>
                            </td>
                            <td class="p-4">
                                <div class="text-sm">
                                    <p class="text-neutral-900">08:00 - 12:00</p>
                                    <p class="text-neutral-500">Basis Data</p>
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div>
                                    <p class="text-neutral-900">Ruang 103</p>
                                    <p class="text-sm text-neutral-500">Lantai 1 - Gedung A</p>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">40 orang</td>
                            <td class="p-4">
                                <div class="flex space-x-2">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Proyektor</span>
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">AC</span>
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Sound</span>
                                </div>
                            </td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Tersedia</span>
                            </td>
                            <td class="p-4">
                                <div class="text-sm">
                                    <p class="text-neutral-900">13:00 - 15:00</p>
                                    <p class="text-neutral-500">Pemrograman Web</p>
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div>
                                    <p class="text-neutral-900">Lab Komputer 1</p>
                                    <p class="text-sm text-neutral-500">Lantai 2 - Gedung B</p>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">35 orang</td>
                            <td class="p-4">
                                <div class="flex space-x-2">
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">35 PC</span>
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Proyektor</span>
                                </div>
                            </td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Maintenance</span>
                            </td>
                            <td class="p-4">
                                <div class="text-sm">
                                    <p class="text-neutral-500">-</p>
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div>
                                    <p class="text-neutral-900">Ruang Seminar</p>
                                    <p class="text-sm text-neutral-500">Lantai 3 - Gedung C</p>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">100 orang</td>
                            <td class="p-4">
                                <div class="flex space-x-2">
                                    <span
                                        class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Proyektor</span>
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">Sound</span>
                                    <span class="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">AC</span>
                                </div>
                            </td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Tersedia</span>
                            </td>
                            <td class="p-4">
                                <div class="text-sm">
                                    <p class="text-neutral-500">Tidak ada jadwal</p>
                                </div>
                            </td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-neutral-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-600">
                        Menampilkan 1 - 5 dari 24 ruangan
                    </p>
                    <div class="flex items-center space-x-2">
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>
                        <button class="px-3 py-1 bg-neutral-900 text-white rounded text-sm">1</button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">2</button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">3</button>
                        <button
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>