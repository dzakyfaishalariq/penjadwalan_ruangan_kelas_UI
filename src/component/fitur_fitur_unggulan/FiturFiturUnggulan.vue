<script setup>
import SecsiontFitur from './sub_componen/SecsiontFitur.vue';
import FiturPerioritasOtomatis from './sub_componen/FiturPerioritasOtomatis.vue';
import AturanAksesOperasionalSection from './sub_componen/AturanAksesOperasionalSection.vue';
import PeranPenggunaSection from './sub_componen/PeranPenggunaSection.vue';
</script>
<template>
    <div>
        <!-- Fitur-Fitur Unggulan Section -->
        <SecsiontFitur />
    </div>
    <div class="mt-12 md:mr-[180px] md:ml-[180px]">
        <!-- Fitur Perioritas Otomatis Section -->
        <FiturPerioritasOtomatis />
    </div>
    <div class="mt-12 mr-[150px] ml-[150px]">
        <!-- Aturan Akses Operasional Section -->
        <AturanAksesOperasionalSection />
    </div>
    <div class="mt-12 mr-[150px] ml-[150px] mb-12">
        <!-- Peran Pengguna Section -->
        <PeranPenggunaSection />
    </div>
</template>