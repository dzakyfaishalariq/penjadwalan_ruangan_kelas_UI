<script setup></script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-4 gap-8">
            <div class="col-span-2">
                <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-door-open text-white text-lg"></i> -->
                        <font-awesome-icon icon="fa-solid fa-door-open" class="text-white text-lg" />
                    </div>
                    <span class="ml-3 text-xl text-neutral-900">RoomScheduler</span>
                </div>
                <p class="text-neutral-600 mb-4">Sistem penjadwalan ruangan kelas yang adil, efisien, dan transparan
                    untuk kebutuhan akademik.</p>
                <div class="flex space-x-4">
                    <i class="fa-brands fa-twitter text-neutral-400 hover:text-neutral-600 cursor-pointer"></i>
                    <i class="fa-brands fa-facebook text-neutral-400 hover:text-neutral-600 cursor-pointer"></i>
                    <i class="fa-brands fa-instagram text-neutral-400 hover:text-neutral-600 cursor-pointer"></i>
                </div>
            </div>
            <div>
                <h3 class="text-neutral-900 mb-4">Navigasi</h3>
                <ul class="space-y-2 text-neutral-600">
                    <li><span class="hover:text-neutral-900 cursor-pointer">Beranda</span></li>
                    <li><span class="hover:text-neutral-900 cursor-pointer">Fitur</span></li>
                    <li><span class="hover:text-neutral-900 cursor-pointer">Panduan</span></li>
                    <li><span class="hover:text-neutral-900 cursor-pointer">Login</span></li>
                </ul>
            </div>
            <div>
                <h3 class="text-neutral-900 mb-4">Dukungan</h3>
                <ul class="space-y-2 text-neutral-600">
                    <li><span class="hover:text-neutral-900 cursor-pointer">Bantuan</span></li>
                    <li><span class="hover:text-neutral-900 cursor-pointer">FAQ</span></li>
                    <li><span class="hover:text-neutral-900 cursor-pointer">Kontak</span></li>
                    <li><span class="hover:text-neutral-900 cursor-pointer">Kebijakan</span></li>
                </ul>
            </div>
        </div>
        <div class="border-t border-neutral-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p class="text-neutral-600 text-sm">&copy; 2025 RoomScheduler. All rights reserved.</p>
            <p class="text-neutral-600 text-sm">Jam Operasional: Senin-Jumat, 08.00-17.00 WIB</p>
        </div>
    </div>
</template>