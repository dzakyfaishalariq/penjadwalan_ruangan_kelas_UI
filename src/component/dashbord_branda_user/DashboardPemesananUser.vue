<script setup>
</script>
<template>
    <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
                <label class="block mb-2 text-sm">Tanggal</label>
                <div class="relative">
                    <input type="date" class="w-full p-3 border border-neutral-200 rounded-xl">
                </div>
            </div>

            <div>
                <label class="block mb-2 text-sm">Ruangan</label>
                <select class="w-full p-3 border border-neutral-200 rounded-xl bg-white">
                    <option>R.301</option>
                    <option>R.302</option>
                    <option>R.303</option>
                </select>
            </div>

            <div>
                <label class="block mb-2 text-sm">Waktu Mulai</label>
                <select class="w-full p-3 border border-neutral-200 rounded-xl bg-white">
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                </select>
            </div>

            <div>
                <label class="block mb-2 text-sm">Waktu Selesai</label>
                <select class="w-full p-3 border border-neutral-200 rounded-xl bg-white">
                    <option>09:40</option>
                    <option>10:40</option>
                    <option>11:40</option>
                </select>
            </div>
        </div>

        <div class="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl mb-6">
            <i class="fa-solid fa-circle-check text-neutral-700"></i>
            <span>Ruangan tersedia pada slot waktu terpilih</span>
        </div>

        <button class="w-full bg-neutral-900 text-white p-4 rounded-xl hover:bg-neutral-800">
            Pesan Sekarang
        </button>
    </div>
</template>