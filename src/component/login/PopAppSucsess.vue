<script setup>
import { useRoute } from 'vue-router';
const props = defineProps({
    nama: String,
    role: String,
    pesan: String
});
</script>
<template>
    <div id="success-modal" class="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div class="text-center">
                <div class="w-16 h-16 bg-neutral-900 rounded-full mx-auto flex items-center justify-center mb-6">
                    <i class="fa-solid fa-check text-white text-2xl"></i>
                </div>
                <h2 class="text-2xl text-neutral-900 mb-2">{{ pesan }}</h2>
                <div class="flex items-center justify-center gap-4 mb-4">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123" alt="Avatar"
                        class="w-12 h-12 rounded-full">
                    <div class="text-left">
                        <p class="text-lg text-neutral-900">{{ nama }}</p>
                        <p class="text-neutral-600">
                            <i class="fa-solid fa-user-graduate mr-2"></i>
                            {{ role }}
                        </p>
                    </div>
                </div>
                <p class="text-neutral-600 mb-6">Anda akan diarahkan ke dashboard dalam beberapa detik...</p>
                <div class="flex justify-center">
                    <div class="animate-spin w-8 h-8 border-4 border-neutral-200 border-t-neutral-900 rounded-full">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>