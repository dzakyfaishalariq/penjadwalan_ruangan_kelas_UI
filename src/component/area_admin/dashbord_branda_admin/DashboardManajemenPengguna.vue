<script setup>
</script>

<template>
    <div id="user-management-content" class="p-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Pengguna</p>
                        <p class="text-2xl text-neutral-900">186</p>
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
                        <p class="text-sm text-neutral-600">Mahasiswa</p>
                        <p class="text-2xl text-neutral-900">150</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-graduation-cap text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Dosen</p>
                        <p class="text-2xl text-neutral-900">34</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-chalkboard-teacher text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-chalkboard-teacher" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Administrator</p>
                        <p class="text-2xl text-neutral-900">2</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-user-shield text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-user-shield" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>

        <!-- User Management Table -->
        <div id="user-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Pengguna</h2>
                        <p class="text-sm text-neutral-600">
                            Kelola semua pengguna sistem
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input type="text" placeholder="Cari pengguna..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64" />
                        </div>
                        <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Role</option>
                            <option>Mahasiswa</option>
                            <option>Dosen</option>
                            <option>Administrator</option>
                        </select>
                        <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Status</option>
                            <option>Aktif</option>
                            <option>Tidak Aktif</option>
                        </select>
                        <button
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Pengguna
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
                                    Nama
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">Email</th>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Role
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">
                                Program Studi
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">Status</th>
                            <th class="text-left p-4 text-sm text-neutral-600">
                                Terakhir Login
                            </th>
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">Ahmad Rizki</p>
                                        <p class="text-sm text-neutral-500">2021110001</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">ahmad.rizki@student.ac.id</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Mahasiswa</span>
                            </td>
                            <td class="p-4 text-neutral-600">Teknik Informatika</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td>
                            <td class="p-4 text-neutral-600">25 Agu 2025, 08:15</td>
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
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">Dr. Siti Nurhaliza</p>
                                        <p class="text-sm text-neutral-500">NIDN: 0123456789</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">siti.nurhaliza@dosen.ac.id</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Dosen</span>
                            </td>
                            <td class="p-4 text-neutral-600">Teknik Informatika</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td>
                            <td class="p-4 text-neutral-600">24 Agu 2025, 16:45</td>
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
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9012"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">Andi Wijaya</p>
                                        <p class="text-sm text-neutral-500">2021110045</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">andi.wijaya@student.ac.id</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Mahasiswa</span>
                            </td>
                            <td class="p-4 text-neutral-600">Sistem Informasi</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td>
                            <td class="p-4 text-neutral-600">25 Agu 2025, 07:30</td>
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
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3456"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">Prof. Budi Santoso</p>
                                        <p class="text-sm text-neutral-500">NIDN: 0987654321</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">budi.santoso@dosen.ac.id</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Dosen</span>
                            </td>
                            <td class="p-4 text-neutral-600">Teknik Informatika</td>
                            <td class="p-4">
                                <span class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Tidak
                                    Aktif</span>
                            </td>
                            <td class="p-4 text-neutral-600">20 Agu 2025, 14:20</td>
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
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=7890"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">Maya Sari</p>
                                        <p class="text-sm text-neutral-500">2022110023</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">maya.sari@student.ac.id</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Mahasiswa</span>
                            </td>
                            <td class="p-4 text-neutral-600">Teknik Komputer</td>
                            <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td>
                            <td class="p-4 text-neutral-600">25 Agu 2025, 08:00</td>
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
                        Menampilkan 1 - 5 dari 186 pengguna
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
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>