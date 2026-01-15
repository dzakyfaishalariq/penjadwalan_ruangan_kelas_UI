<script setup>
import HerroSection from './sub_componen/HerroSection.vue';
import FiturUnggulan from './sub_componen/FiturUnggulan.vue';
import CaraSistemBerkerja from './sub_componen/CaraSistemBerkerja.vue';
import CTASection from './sub_componen/CTASection.vue';
</script>

<template>
    <div id="home">
        <!-- Hero Section -->
        <HerroSection />
    </div>
    <div id="features">
        <!-- Fitur Unggulan Section -->
        <FiturUnggulan />
    </div>
    <div id="how-it-works">
        <!-- Bagaimana Sistem Bekerja Section -->
        <CaraSistemBerkerja />
    </div>
    <div id="cta">
        <!-- CTA Section -->
        <CTASection />
    </div>
</template>