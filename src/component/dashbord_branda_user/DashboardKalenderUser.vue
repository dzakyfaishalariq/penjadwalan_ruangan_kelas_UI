<script setup>

</script>
<template>
    <div class="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div class="flex justify-between items-center mb-6">
            <div class="flex items-center gap-4">
                <button class="p-2 hover:bg-neutral-100 rounded-lg">
                    <!-- <i class="fa-solid fa-chevron-left"></i> -->
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </button>
                <h2 class="text-xl">21-27 Agustus 2025</h2>
                <button class="p-2 hover:bg-neutral-100 rounded-lg">
                    <!-- <i class="fa-solid fa-chevron-right"></i> -->
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </button>
            </div>
        </div>

        <div class="grid grid-cols-7 gap-4">
            <div class="text-center p-2 text-sm text-neutral-600">Sen</div>
            <div class="text-center p-2 text-sm text-neutral-600">Sel</div>
            <div class="text-center p-2 text-sm text-neutral-600">Rab</div>
            <div class="text-center p-2 text-sm text-neutral-600">Kam</div>
            <div class="text-center p-2 text-sm text-neutral-600">Jum</div>
            <div class="text-center p-2 text-sm text-neutral-400">Sab</div>
            <div class="text-center p-2 text-sm text-neutral-400">Min</div>

            <div class="h-24 border border-neutral-200 rounded-lg p-2">
                <span class="text-sm">21</span>
            </div>
            <div class="h-24 border border-neutral-200 rounded-lg p-2">
                <span class="text-sm">22</span>
                <div class="mt-1 p-1 bg-neutral-100 rounded text-xs">R.301 - Algoritma</div>
            </div>
            <div class="h-24 border border-neutral-200 rounded-lg p-2">
                <span class="text-sm">23</span>
            </div>
            <div class="h-24 border border-neutral-200 rounded-lg p-2">
                <span class="text-sm">24</span>
                <div class="mt-1 p-1 bg-neutral-100 rounded text-xs">R.302 - Database</div>
            </div>
            <div class="h-24 border border-neutral-200 rounded-lg p-2 bg-neutral-50">
                <span class="text-sm">25</span>
                <div class="mt-1 p-1 bg-neutral-100 rounded text-xs">R.303 - Jaringan</div>
            </div>
            <div class="h-24 border border-neutral-200 rounded-lg p-2 bg-neutral-100">
                <span class="text-sm text-neutral-400">26</span>
            </div>
            <div class="h-24 border border-neutral-200 rounded-lg p-2 bg-neutral-100">
                <span class="text-sm text-neutral-400">27</span>
            </div>
        </div>
    </div>

</template>