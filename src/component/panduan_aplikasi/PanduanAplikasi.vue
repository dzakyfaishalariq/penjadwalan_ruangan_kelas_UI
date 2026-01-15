<script setup>
import Judul from './sub_componen/Judul.vue';
import SubNavigation from './sub_componen/SubNavigation.vue';
import PanduanMahaisswa from './sub_componen/PanduanMahaisswa.vue';
import PanduanDosen from './sub_componen/PanduanDosen.vue';
import AturanSistem from './sub_componen/AturanSistem.vue';
import Pertannyaan from './sub_componen/Pertannyaan.vue';
</script>
<template>
    <div>
        <!-- Judul Section -->
        <Judul />
    </div>
    <div>
        <!-- Sub Navigation Section -->
        <SubNavigation />
    </div>
    <div>
        <!-- Panduan Mahasiswa Section -->
        <PanduanMahaisswa />
    </div>
    <div>
        <!-- Panduan Dosen Section -->
        <PanduanDosen />
    </div>
    <div>
        <!-- Aturan Sistem Section -->
        <AturanSistem />
    </div>
    <div>
        <!-- Pertannyaan Section -->
        <Pertannyaan />
    </div>
</template>