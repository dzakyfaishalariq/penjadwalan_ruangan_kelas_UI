<script setup>
import { ref, computed } from 'vue';
import api from '@/apisetting/api';
import { useRouter } from 'vue-router';
ref
const route = useRouter();
const prodiId = ref(null);
const dataProdi = ref(null);
const role = ref('');
const nama = ref('');
const nim = ref('');
const email = ref('');
const username = ref('');
const password = ref('');

// validasi prodi
const error_prodi = computed(() => {
    if (!prodiId.value) {
        return 'Prodi tidak boleh kosong';
    } else {
        return '';
    }
})

// validasi nama
const error_nama = computed(() => {
    if (!nama.value.trim()) {
        return 'Nama tidak boleh kosong';
    } else if (!/^[a-zA-Z\s]+$/.test(nama.value)) {
        return 'Nama hanya dapat mengandung huruf dan spasi';
    } else {
        return '';
    }
})

// validasi email
const error_email = computed(() => {
    if (!email.value.trim()) {
        return 'Email tidak boleh kosong';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return 'Email tidak valid';
    } else {
        return '';
    }
})

// validasi nim
const error_nim = computed(() => {
    if (!nim.value.trim()) {
        return 'NIM tidak boleh kosong';
    } else if (!/^\d+$/.test(nim.value)) {
        return 'NIM hanya dapat mengandung angka';
    } else {
        return '';
    }
})

// validasi username
const error_username = computed(() => {
    if (!username.value.trim()) {
        return 'Username tidak boleh kosong';
    } else {
        return '';
    }
})

// validasi password
const error_password = computed(() => {
    if (!password.value.trim()) {
        return 'Password tidak boleh kosong';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password.value)) {
        return 'Password harus memiliki setidaknya satu huruf besar, satu huruf kecil, dan satu angka';
    } else {
        return '';
    }
})

// validasi role
const error_role = computed(() => {
    if (!role.value) {
        return 'Role tidak boleh kosong';
    } else {
        return '';
    }
})

// ambil data prodi api
api.get('/prodi/0')
    .then(response => {
        dataProdi.value = response.data.data.data;
    }).catch(error => {
        console.error(error);
    })

// handel register
const register = async () => {
    try {
        // cek error
        if (error_prodi.value || error_nama.value || error_email.value || error_nim.value || error_username.value || error_password.value || error_role.value) {
            alert('Mohon isi form dengan benar sesuai dengan keterangan tulisan merah');
            return;
        }
        const response = await api.post('/mahasiswa/add', {
            prodi_id: prodiId.value,
            nama: nama.value,
            nim: nim.value,
            email: email.value,
            username: username.value,
            password: password.value,
            role: role.value
        });
        if (response.data.status) {
            alert(response.data.message);
            route.push('/login');
        } else {
            return;
        }
    } catch (error) {
        console.error(error);
    }
}

const goToLogin = () => {
    route.push('/login');
}
</script>
<template>
    <div
        class="bg-gradient-to-br from-neutral-50 to-neutral-100 min-h-[800px] flex items-center justify-center py-12 px-4">
        <div class="max-w-md w-full">
            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-6">
                    <div class="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shadow-lg">
                        <i class="fa-solid fa-door-open text-white text-xl"></i>
                    </div>
                </div>
                <h1 class="text-3xl text-neutral-900 mb-2">Buat Akun Baru</h1>
                <p class="text-neutral-600">Daftar untuk mengakses sistem penjadwalan ruangan</p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
                <form @submit.prevent="register" class="space-y-6">
                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="role_prodi">Prodi</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-users text-neutral-400"></i>
                            </div>
                            <select v-model="prodiId" id="role_prodi"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white appearance-none">
                                <option>Pilih Prodi Anda</option>
                                <option v-for="prodi in dataProdi" :key="prodi.id" :value="prodi.id">{{
                                    prodi.nama_prodi }}</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-chevron-down text-neutral-400"></i>
                            </div>
                            <p v-if="error_prodi" class="text-xs text-red-500">{{ error_prodi }}</p>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="name">Nama Lengkap</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-regular fa-user text-neutral-400"></i>
                            </div>
                            <input v-model="nama" type="text" id="name"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Masukkan nama lengkap Anda">
                            <p v-if="error_nama" class="text-xs text-red-500">{{ error_nama }}</p>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="email">Email</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-regular fa-envelope text-neutral-400"></i>
                            </div>
                            <input v-model="email" type="email" id="email"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Masukkan alamat email Anda">
                            <p v-if="error_email" class="text-xs text-red-500">{{ error_email }}</p>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="nim">NIM</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-id-card text-neutral-400"></i>
                            </div>
                            <input v-model="nim" type="text" id="nim"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Masukkan Nomor Induk Mahasiswa">
                        </div>
                        <p v-if="error_nim" class="text-xs text-red-500">{{ error_nim }}</p>
                        <p class="text-xs text-neutral-500">*Khusus untuk mahasiswa</p>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="role_peran">Peran</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-users text-neutral-400"></i>
                            </div>
                            <select v-model="role" id="role_peran"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white appearance-none">
                                <option value="">Pilih peran Anda</option>
                                <option value="Mahasiswa Biasa">Mahasiswa Biasa</option>
                                <option value="Komti">Komti</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-chevron-down text-neutral-400"></i>
                            </div>
                            <p v-if="error_role" class="text-xs text-red-500">{{ error_role }}</p>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="username">User Name</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-regular fa-user text-neutral-400"></i>
                            </div>
                            <input v-model="username" type="text" id="username"
                                class="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="User name anda">
                            <p v-if="error_username" class="text-xs text-red-500">{{ error_username }}</p>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm text-neutral-700" for="password">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i class="fa-solid fa-key text-neutral-400"></i>
                            </div>
                            <input v-model="password" type="password" id="password"
                                class="block w-full pl-12 pr-12 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200 bg-neutral-50 focus:bg-white"
                                placeholder="Buat password">
                            <div class="absolute inset-y-0 right-0 pr-4 flex items-center">
                                <i
                                    class="fa-regular fa-eye text-neutral-400 cursor-pointer hover:text-neutral-600 transition-colors"></i>
                            </div>
                            <p v-if="error_password" class="text-xs text-red-500">{{ error_password }}</p>
                        </div>
                    </div>

                    <button type="submit"
                        class="w-full bg-neutral-900 text-white py-3 rounded-xl hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-900 focus:ring-opacity-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                        Daftar
                    </button>
                </form>
            </div>

            <div class="text-center mt-6">
                <p class="text-neutral-600">
                    Sudah punya akun?
                    <span @click="goToLogin"
                        class="text-neutral-900 hover:underline cursor-pointer transition-all">Masuk</span>
                </p>
            </div>
        </div>
    </div>
</template>