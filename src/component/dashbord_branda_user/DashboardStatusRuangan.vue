<script setup></script>
<template>
    <div class="flex gap-4 mb-6">
        <div class="flex-1 flex gap-4">
            <input type="date" class="px-4 py-2 bg-white border border-neutral-200 rounded-lg" value="2025-08-25">

            <select class="px-4 py-2 bg-white border border-neutral-200 rounded-lg">
                <option>Semua Lantai</option>
                <option>Lantai 1</option>
                <option>Lantai 2</option>
                <option>Lantai 3</option>
            </select>

            <select class="px-4 py-2 bg-white border border-neutral-200 rounded-lg">
                <option>08:00 - 09:00</option>
                <option>09:00 - 10:00</option>
                <option>10:00 - 11:00</option>
                <option>11:00 - 12:00</option>
            </select>
        </div>

        <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg">
            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
            Pesan Ruangan
        </button>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl">Ruangan 301</h3>
                <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Tersedia</span>
            </div>
            <div class="space-y-2 text-sm text-neutral-600">
                <p>
                    <!-- <i class="fa-solid fa-building mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-building" class="mr-2" />
                    Lantai 3
                </p>
                <p>
                    <!-- <i class="fa-solid fa-users mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-users" class="mr-2" />
                    Kapasitas: 40 orang
                </p>
                <p>
                    <!-- <i class="fa-solid fa-clock mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-clock" class="mr-2" />
                    Tersedia hingga 17:00
                </p>
            </div>
        </div>

        <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl">Ruangan 302</h3>
                <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Terpakai</span>
            </div>
            <div class="space-y-2 text-sm text-neutral-600">
                <p>
                    <!-- <i class="fa-solid fa-building mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-building" class="mr-2" />
                    Lantai 3
                </p>
                <p>
                    <!-- <i class="fa-solid fa-users mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-users" class="mr-2" />
                    Kapasitas: 30 orang
                </p>
                <p>
                    <!-- <i class="fa-solid fa-clock mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-clock" class="mr-2" />
                    Tersedia kembali 10:00
                </p>
            </div>
        </div>

        <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl">Ruangan 303</h3>
                <span class="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Tersedia</span>
            </div>
            <div class="space-y-2 text-sm text-neutral-600">
                <p>
                    <!-- <i class="fa-solid fa-building mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-building" class="mr-2" />
                    Lantai 3
                </p>
                <p>
                    <!-- <i class="fa-solid fa-users mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-users" class="mr-2" />
                    Kapasitas: 35 orang
                </p>
                <p>
                    <!-- <i class="fa-solid fa-clock mr-2"></i> -->
                    <font-awesome-icon icon="fa-solid fa-clock" class="mr-2" />
                    Tersedia hingga 17:00
                </p>
            </div>
        </div>
    </div>
</template>