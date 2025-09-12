<script setup>
import api from '@/apisetting/api';
import { ref } from 'vue';

const totalRuanganTerpakai = ref(0);
const totalSemuaRuangan = ref(0);
// akses api total ruangan
api.get('/mahasiswa_akses_total/ruangan_terpakai', {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
    }
})
    .then(response => {
        totalRuanganTerpakai.value = response.data.data;
    })
    .catch(error => {
        console.error(error);
    })
// akses total semuia ruangan
api.get('/mahasiswa_akses_total/ruangan', {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
    }
})
    .then(response => {
        totalSemuaRuangan.value = response.data.data;
    })
    .catch(error => {
        console.error(error);
    })

</script>
<template>
    <div class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <!-- <i class="fa-solid fa-clock text-neutral-700"></i> -->
                    <font-awesome-icon icon="fa-solid fa-clock" class="text-neutral-700" />
                </div>
                <h3>Jadwal Berikutnya</h3>
            </div>
            <p class="text-neutral-600">Algoritma (R.301)</p>
            <p class="text-sm text-neutral-500">09:00 - 10:40 WIB</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <!-- <i class="fa-solid fa-door-open text-neutral-700"></i> -->
                    <font-awesome-icon icon="fa-solid fa-door-open" class="text-neutral-700" />
                </div>
                <h3>Ruangan Terpakai</h3>
            </div>
            <p class="text-2xl">{{ totalRuanganTerpakai }}<span class="text-neutral-400 text-lg">/{{ totalSemuaRuangan
            }}</span></p>
            <p class="text-sm text-neutral-500">Ruangan aktif saat ini</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <!-- <i class="fa-solid fa-user-clock text-neutral-700"></i> -->
                    <font-awesome-icon icon="fa-solid fa-user-clock" class="text-neutral-700" />
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
            <!-- <i class="fa-solid fa-plus"></i> -->
            <font-awesome-icon icon="fa-solid fa-plus" />
            <span>Pesan Ruangan</span>
        </button>
        <button
            class="flex items-center justify-center gap-3 bg-white border border-neutral-200 p-4 rounded-xl hover:bg-neutral-50">
            <!-- <i class="fa-solid fa-calendar"></i> -->
            <font-awesome-icon icon="fa-solid fa-calendar" />
            <span>Lihat Kalender</span>
        </button>
        <button
            class="flex items-center justify-center gap-3 bg-white border border-neutral-200 p-4 rounded-xl hover:bg-neutral-50">
            <!-- <i class="fa-solid fa-door-open"></i> -->
            <font-awesome-icon icon="fa-solid fa-door-open" />
            <span>Cek Status Ruangan</span>
        </button>
    </div>
</template>