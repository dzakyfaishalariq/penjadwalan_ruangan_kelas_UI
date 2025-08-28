<script setup>
import Header from './component/header_footer/Header.vue';
import Footer from './component/header_footer/Footer.vue';
</script>

<template>
  <div v-if="$route.path === '/login'">
    <div>
      <!-- content -->
      <router-view />
    </div>
  </div>
  <div v-else-if="$route.path === '/register'">
    <div>
      <!-- content -->
      <router-view />
    </div>
  </div>
  <div v-else>
    <header id="header" class="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <!-- header -->
      <Header />
    </header>
    <div>
      <!-- content -->
      <router-view />
    </div>
    <footer id="footer" class="bg-white border-t border-neutral-200">
      <!-- footer -->
      <Footer />
    </footer>
  </div>
</template>

<style scoped></style>
