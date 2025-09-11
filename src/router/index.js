import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated, getUserRole } from "@/utils/auth";
import HalamanUtama from "@/component/halaman_utama/HalamanUtama.vue";
import FiturFiturUnggulan from "@/component/fitur_fitur_unggulan/FiturFiturUnggulan.vue";
import PanduanAplikasi from "@/component/panduan_aplikasi/PanduanAplikasi.vue";
import Kontak from "@/component/kontak/Kontak.vue";
import Login from "@/component/login/Login.vue";
import Register from "@/component/register/Register.vue";
import DashboardBerandaUser from "@/component/dashbord_branda_user/DashboardBerandaUser.vue";

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
    meta: {
      requiresGuest: true,
    },
  },
  // register
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresGuest: true,
    },
  },
  // Dashbord area
  {
    path: "/dashboard/branda",
    name: "dashboard",
    component: DashboardBerandaUser,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
];

// create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard global
router.beforeEach((to, from, next) => {
  const userRole = localStorage.getItem("userRole");

  if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (!!localStorage.getItem("barierToken")) {
      return next("/dashboard/branda");
    } else {
      return next();
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userRole) {
      return next("/login");
    } else if (
      to.meta.requiredRoles &&
      !to.meta.requiredRoles.includes(userRole)
    ) {
      alert("Maaf, Anda tidak memiliki akses ke halaman ini.");
      return next(false);
    } else {
      return next();
    }
  } else {
    return next();
  }
});

export default router;
