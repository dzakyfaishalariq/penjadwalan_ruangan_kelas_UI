import { createRouter, createWebHistory } from "vue-router";
import HalamanUtama from "@/component/halaman_utama/HalamanUtama.vue";
import FiturFiturUnggulan from "@/component/fitur_fitur_unggulan/FiturFiturUnggulan.vue";
import PanduanAplikasi from "@/component/panduan_aplikasi/PanduanAplikasi.vue";
import Kontak from "@/component/kontak/Kontak.vue";
import Login from "@/component/login/Login.vue";

//  create variabel routers
const routes = [
  {
    path: "/",
    name: "halaman_utama",
    component: HalamanUtama,
  },
  {
    path: "/fitur_fitur_unggulan",
    name: "fitur_fitur_unggulan",
    component: FiturFiturUnggulan,
  },
  {
    path: "/panduan_aplikasi",
    name: "panduan_aplikasi",
    component: PanduanAplikasi,
  },
  {
    path: "/kontak",
    name: "kontak",
    component: Kontak,
  },
  // login
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

// create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
