import { createRouter, createWebHistory } from "vue-router";
// import { isAuthenticated, getUserRole } from "@/utils/auth";
import HalamanUtama from "@/component/halaman_utama/HalamanUtama.vue";
import FiturFiturUnggulan from "@/component/fitur_fitur_unggulan/FiturFiturUnggulan.vue";
import PanduanAplikasi from "@/component/panduan_aplikasi/PanduanAplikasi.vue";
import Kontak from "@/component/kontak/Kontak.vue";
import Login from "@/component/login/Login.vue";
import LoginAdmin from "@/component/area_admin/login/LoginAdmin.vue";
import Register from "@/component/register/Register.vue";
import DashboardBerandaUser from "@/component/dashbord_branda_user/DashboardBerandaUser.vue";
import DashboardPemesananUser from "@/component/dashbord_branda_user/DashboardPemesananUser.vue";
import DashboardKalenderUser from "@/component/dashbord_branda_user/DashboardKalenderUser.vue";
import DashboardStatusRuangan from "@/component/dashbord_branda_user/DashboardStatusRuangan.vue";
import DashboardPengaturanUser from "@/component/dashbord_branda_user/DashboardPengaturanUser.vue";
import DashboadHasilPemesanan from "@/component/dashbord_branda_user/DashboadHasilPemesanan.vue";
import DashboadBuatMatakuliah from "@/component/dashbord_branda_user/DashboadBuatMatakuliah.vue";
import DashboardBrandaAdmin from "@/component/area_admin/dashbord_branda_admin/DashboardBrandaAdmin.vue";
import DashboardManajemenRuanganAdmin from "@/component/area_admin/dashbord_branda_admin/DashboardManajemenRuanganAdmin.vue";
import DashboardManajemenPengguna from "@/component/area_admin/dashbord_branda_admin/DashboardManajemenPengguna.vue";
import DashboardLaporan from "@/component/area_admin/dashbord_branda_admin/DashboardLaporan.vue";
import DashboardPengaturanAdmin from "@/component/area_admin/dashbord_branda_admin/DashboardPengaturanAdmin.vue";

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
  // login admin
  {
    path: "/login/admin",
    name: "login_admin",
    component: LoginAdmin,
    meta: {
      requiresGuest: true,
    },
  },
  // Dashbord branda area
  {
    path: "/dashboard/branda",
    name: "dashboard",
    component: DashboardBerandaUser,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
  {
    path: "/dashboard/pemesanan",
    name: "pemesanan",
    component: DashboardPemesananUser,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
  {
    path: "/dashboard/hasil-pemesanan",
    name: "hasil-pemesanan",
    component: DashboadHasilPemesanan,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
  {
    path: "/dashboard/kalender",
    name: "kalender",
    component: DashboardKalenderUser,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
  {
    path: "/dashboard/status-ruangan",
    name: "status-ruangan",
    component: DashboardStatusRuangan,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
  {
    path: "/dashboard/pengaturan-user",
    name: "pengaturan-user",
    component: DashboardPengaturanUser,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Mahasiswa Biasa", "Komti", "Dosen"],
    },
  },
  {
    path: "/dashboard/buat-matakuliah",
    name: "buat-matakuliah",
    component: DashboadBuatMatakuliah,
    meta: {
      requiresAuth: true,
      requiredRoles: ["Dosen"],
    },
  },
  // area admin
  {
    path: "/admin/branda",
    name: "dashboard_admin",
    component: DashboardBrandaAdmin,
    meta: {
      requiresAuth: true,
      requiredRoles: ["admin"],
      nama_router: "Dashboard Admin",
      deskripsi: "Kelola sistem penjadwalan ruangan kelas",
    },
  },
  {
    path: "/admin/manajemen-ruangan",
    name: "manajemen-ruangan",
    component: DashboardManajemenRuanganAdmin,
    meta: {
      requiresAuth: true,
      requiredRoles: ["admin"],
      nama_router: "Manajemen Ruangan",
      deskripsi: "Kelola data ruangan kelas dan fasilitas",
    },
  },
  {
    path: "/admin/manajemen-pengguna",
    name: "manajemen-pengguna",
    component: DashboardManajemenPengguna,
    meta: {
      requiresAuth: true,
      requiredRoles: ["admin"],
      nama_router: "Manajemen Pengguna",
      deskripsi: "Kelola data mahasiswa, komti, dan dosen dan administrator",
    },
  },
  {
    path: "/admin/Laporan",
    name: "laporan",
    component: DashboardLaporan,
    meta: {
      requiresAuth: true,
      requiredRoles: ["admin"],
      nama_router: "Laporan",
      deskripsi: "Analisis dan statistik penggunaan ruangan",
    },
  },
  {
    path: "/admin/pengaturan",
    name: "pengaturan",
    component: DashboardPengaturanAdmin,
    meta: {
      requiresAuth: true,
      requiredRoles: ["admin"],
      nama_router: "Pengaturan",
      deskripsi: "Konfigurasi sistem dan pengaturan aplikasi",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: HalamanUtama,
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
  const barierToken = localStorage.getItem("barierToken");
  if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (!!barierToken && !!userRole) {
      return next("/dashboard/branda");
    } else {
      return next();
    }
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userRole && !barierToken) {
      alert("Maaf, Anda harus login terlebih dahulu.");
      return next("/");
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
