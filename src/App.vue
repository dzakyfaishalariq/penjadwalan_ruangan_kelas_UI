<script setup>
import Header from './component/header_footer/Header.vue';
import Footer from './component/header_footer/Footer.vue';
import HeaderDshboard from './component/navbar_dashbord/HeaderDshboard.vue';
import NavbarDashboard from './component/navbar_dashbord/NavbarDashboard.vue';
import HeaderAdmin from './component/area_admin/dashbord_branda_admin/navigasi/HeaderAdmin.vue';
import NavbarAdmin from './component/area_admin/dashbord_branda_admin/navigasi/NavbarAdmin.vue';
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
  <div v-else-if="$route.path.includes('/dashboard')">
    <div class="flex h-[800px]">
      <NavbarDashboard />
      <div class="flex-1 bg-neutral-50 p-8">
        <HeaderDshboard />
        <div>
          <!-- content -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="$route.path === '/login/admin'">
    <div>
      <!-- content -->
      <router-view />
    </div>
  </div>
  <div v-else-if="$route.path.includes('/admin')">
    <div class="min-h-screen bg-neutral-50 flex">
      <NavbarAdmin />
      <div class="flex-1 ml-64">
        <HeaderAdmin />
        <div class="p-8">
          <router-view />
        </div>
      </div>
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
