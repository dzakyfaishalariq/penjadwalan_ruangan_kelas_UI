<script setup></script>
<template>
    <div class="bg-white rounded-xl border border-neutral-200 overflow-hidden">
        <div class="border-b border-neutral-200">
            <div class="flex">
                <button class="px-6 py-4 bg-neutral-900 text-white">Profil</button>
                <!-- <button class="px-6 py-4 text-neutral-600 hover:bg-neutral-50">Keamanan</button> -->
            </div>
        </div>

        <div class="p-6">
            <div class="max-w-2xl">
                <div class="mb-8">
                    <div class="flex items-center gap-6 mb-8">
                        <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123"
                            class="w-24 h-24 rounded-full">
                        <button class="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200">
                            <i class="fa-solid fa-camera mr-2"></i>Ganti Foto
                        </button>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Nama Lengkap</label>
                            <input type="text" value="Alex Johnson"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Email</label>
                            <input type="email" value="alex.johnson@email.com"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">NIM</label>
                            <input type="text" value="12345678"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg bg-neutral-50" disabled>
                            <p class="mt-1 text-sm text-neutral-500">NIM tidak dapat diubah</p>
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Peran</label>
                            <input type="text" value="Mahasiswa"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg bg-neutral-50" disabled>
                        </div>
                    </div>
                </div>

                <button class="px-6 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan Perubahan
                </button>
            </div>
        </div>
    </div>
</template>