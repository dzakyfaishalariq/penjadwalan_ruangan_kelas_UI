<script setup></script>
<template>
    <div class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-clock text-neutral-700"></i>
                </div>
                <h3>Jadwal Berikutnya</h3>
            </div>
            <p class="text-neutral-600">Algoritma (R.301)</p>
            <p class="text-sm text-neutral-500">09:00 - 10:40 WIB</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-door-open text-neutral-700"></i>
                </div>
                <h3>Ruangan Terpakai</h3>
            </div>
            <p class="text-2xl">8<span class="text-neutral-400 text-lg">/15</span></p>
            <p class="text-sm text-neutral-500">Ruangan aktif saat ini</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-user-clock text-neutral-700"></i>
                </div>
                <h3>Status Prioritas</h3>
            </div>
            <p class="text-neutral-600">Hak pilih aktif dalam</p>
            <p class="text-sm text-neutral-900">15 menit</p>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-6">
        <button
            class="flex items-center justify-center gap-3 bg-neutral-900 text-white p-4 rounded-xl hover:bg-neutral-800">
            <i class="fa-solid fa-plus"></i>
            <span>Pesan Ruangan</span>
        </button>
        <button
            class="flex items-center justify-center gap-3 bg-white border border-neutral-200 p-4 rounded-xl hover:bg-neutral-50">
            <i class="fa-solid fa-calendar"></i>
            <span>Lihat Kalender</span>
        </button>
        <button
            class="flex items-center justify-center gap-3 bg-white border border-neutral-200 p-4 rounded-xl hover:bg-neutral-50">
            <i class="fa-solid fa-door-open"></i>
            <span>Cek Status Ruangan</span>
        </button>
    </div>
</template>