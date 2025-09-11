<script setup>
const props = defineProps({
    errorTitle: String,
    errorMessage: String
})
</script>
<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 relative animate-fade-in">
            <div class="absolute top-4 right-4 cursor-pointer">
                <i class="fa-solid fa-xmark text-neutral-400 hover:text-neutral-600"></i>
            </div>

            <div class="text-center">
                <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fa-solid fa-circle-exclamation text-3xl text-neutral-700"></i>
                </div>

                <h3 class="text-xl text-neutral-900 mb-2">{{ errorTitle }}</h3>
                <p class="text-neutral-600 mb-6">{{ errorMessage }}
                </p>

                <button
                    class="w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-neutral-800 transition-all duration-200">
                    Coba Lagi
                </button>
            </div>
        </div>
    </div>
</template>