<script setup>
import api from '@/apisetting/api';
import { onMounted, ref, watch } from 'vue';

const dataMahasiswa = ref(null);
const dataDosen = ref(null);
const dataProdi = ref(null);

const currentPageMahasiswa = ref(1);
const itemsPerPageMahasiswa = ref(10);
const totalItemsMahasiswa = ref(0);
const totalPagesMahasiswa = ref(0);
const serchtextMahasiswa = ref('');
const popappInfoMahasiswa = ref(false);
const poappEditMahasiswa = ref(false);
const poappTambahMahasiswa = ref(false);
const seeMahasiswa = ref({});
const formMahasiswa = ref({
    prodi_id: null,
    nama: '',
    nim: '',
    email: '',
    username: '',
    password: '',
    role: '',
});

const currentPageDosen = ref(1);
const itemsPerPageDosen = ref(10);
const totalItemsDosen = ref(0);
const totalPagesDosen = ref(0);
const serchtextDosen = ref('');
const popappInfoDosen = ref(false);
const poappEditDosen = ref(false);
const poappTambahDosen = ref(false);
const seeDosen = ref({});
const formDosen = ref({
    prodi_id: null,
    nama: '',
    nip: '',
    email: '',
    username: '',
    password: '',
    role: '',
})

const infoMahasiswa = (data) => {
    popappInfoMahasiswa.value = true;
    seeMahasiswa.value.nama_mahasiswa = data.nama_mahasiswa;
    seeMahasiswa.value.nim = data.nim_mahasiswa;
    seeMahasiswa.value.email = data.email_mahasiswa;
    seeMahasiswa.value.prodi = data.prodi;
    seeMahasiswa.value.role_mahasiswa = data.role_mahasiswa;
    seeMahasiswa.value.tipe_pemilih = data.tipe_pemilih;
    seeMahasiswa.value.username_mahasiswa = data.username_mahasiswa;
}

const infoDosen = (data) => {
    popappInfoDosen.value = true;
    seeDosen.value.nama_dosen = data.dosen;
    seeDosen.value.nip = data.nip;
    seeDosen.value.email = data.email;
    seeDosen.value.prodi = data.prodi;
    seeDosen.value.tipe_pemilih = data.tipe_pemilih;
}

const editMahasiswa = (data) => {
    poappEditMahasiswa.value = true;
    seeMahasiswa.value.id = data.mahasiswa_id;
    seeMahasiswa.value.prodi_id = data.prodi_id;
    seeMahasiswa.value.nama = data.nama_mahasiswa;
    seeMahasiswa.value.nim = data.nim_mahasiswa;
    seeMahasiswa.value.email = data.email_mahasiswa;
    seeMahasiswa.value.username = data.username_mahasiswa;
    seeMahasiswa.value.password = "";
    seeMahasiswa.value.role = data.role_mahasiswa;
}

const prosesEditMahasiswa = async () => {
    try {
        const response = await api.put(`/admin_akses_pengguna_mahasiswa/update/${seeMahasiswa.value.id}`, {
            prodi_id: seeMahasiswa.value.prodi_id,
            nama: seeMahasiswa.value.nama,
            nim: seeMahasiswa.value.nim,
            email: seeMahasiswa.value.email,
            username: seeMahasiswa.value.username,
            password: seeMahasiswa.value.password,
            role: seeMahasiswa.value.role
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            });
        if (response.status == 200) {
            poappEditMahasiswa.value = false;
            fetchDataMahasiswa(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const prosesTambahMahasiswa = async () => {
    try {
        const response = await api.post('/admin_akses_pengguna_mahasiswa/add', formMahasiswa.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.status == 200) {
            poappTambahMahasiswa.value = false;
            formMahasiswa.value.prodi_id = null;
            formMahasiswa.value.nama = '';
            formMahasiswa.value.nim = null;
            formMahasiswa.value.email = '';
            formMahasiswa.value.username = '';
            formMahasiswa.value.password = '';
            formMahasiswa.value.role = '';
            alert(response.data.message);
            fetchDataMahasiswa(1);
        }
    } catch (error) {
        alert(error.response.data.message);
        console.log(error)
    }
}

const prosesHapusMahasiswa = async (id) => {
    try {
        const response = await api.delete(`/admin_akses_pengguna_mahasiswa/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            fetchDataMahasiswa(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const editDosen = (data) => {
    poappEditDosen.value = true;
    seeDosen.value.id = data.dosen_id;
    seeDosen.value.prodi_id = data.prodi_id;
    seeDosen.value.nama = data.dosen;
    seeDosen.value.nip = data.nip;
    seeDosen.value.email = data.email;
    seeDosen.value.username = data.username;
    seeDosen.value.password = "";
    seeDosen.value.role = "Dosen";
}

const prosesEditDosen = async () => {
    try {
        const response = await api.put(`/admin_akses_pengguna_dosen/update/${seeDosen.value.id}`, {
            prodi_id: seeDosen.value.prodi_id,
            nama: seeDosen.value.nama,
            nip: seeDosen.value.nip,
            email: seeDosen.value.email,
            username: seeDosen.value.username,
            password: seeDosen.value.password,
            role: seeDosen.value.role
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            });
        if (response.status == 200) {
            poappEditDosen.value = false;
            fetchDataDosen(1);
        }
    } catch (error) {
        console.log(error)
    }
}

const prosesTambahDosen = async () => {
    try {
        const response = await api.post('/admin_akses_pengguna_dosen/add', formDosen.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.status == 200) {
            poappTambahDosen.value = false;
            formDosen.value.prodi_id = null;
            formDosen.value.nama = '';
            formDosen.value.nip = null;
            formDosen.value.email = '';
            formDosen.value.username = '';
            formDosen.value.password = '';
            formDosen.value.role = '';
            alert(response.data.message);
            fetchDataDosen(1);
        }
    } catch (error) {
        alert(error.response.data.message);
        console.log(error)
    }
}

const prosesHapusDosen = async (id) => {
    try {
        const response = await api.delete(`/admin_akses_pengguna_dosen/delete/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        if (response.data.status) {
            fetchDataDosen(1);
        }
    } catch (error) {
        console.log(error)
    }
}
const fetchProdi = async () => {
    try {
        const response = await api.get(`/admin_akses_semua_prodi`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            }
        })
        dataProdi.value = response.data.data
        // console.log(dataProdi.value)
    } catch (error) {
        console.log(error)
    }
}

let setTimeOutMahasiswa = null;
watch(serchtextMahasiswa, (newValue) => {
    clearTimeout(setTimeOutMahasiswa);
    setTimeOutMahasiswa = setTimeout(() => {
        fetchDataMahasiswa(1, newValue);
    }, 500);
})

let setTimeOutDosen = null;
watch(serchtextDosen, (newValue) => {
    clearTimeout(setTimeOutDosen);
    setTimeOutDosen = setTimeout(() => {
        fetchDataDosen(1, newValue);
    }, 500);
})

//  panggil api mahasiswa
const fetchDataMahasiswa = async (page = 1, serchData = '') => {
    try {
        const response = await api.get("/admin_akses_pengguna_mahasiswa/10", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                search: serchData
            }
        })
        dataMahasiswa.value = response.data.data.data
        totalItemsMahasiswa.value = response.data.data.total;
        totalPagesMahasiswa.value = Math.ceil(totalItemsMahasiswa.value / itemsPerPageMahasiswa.value);
        // console.log(dataMahasiswa.value)
    } catch (error) {
        console.error(error);
    }
}

const nexPageMahasiswa = () => {
    if (currentPageMahasiswa.value < totalPagesMahasiswa.value) {
        currentPageMahasiswa.value++;
        fetchDataMahasiswa(currentPageMahasiswa.value);
    }
}

const prevPageMahasiswa = () => {
    if (currentPageMahasiswa.value > 1) {
        currentPageMahasiswa.value--;
        fetchDataMahasiswa(currentPageMahasiswa.value);
    }
}

const fetchDataDosen = async (page = 1, serchData = '') => {
    try {
        const response = await api.get("/admin_akses_pengguna_dosen/10", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
            },
            params: {
                page: page,
                serch: serchData
            }
        })
        dataDosen.value = response.data.data.data
        totalItemsDosen.value = response.data.data.total;
        totalPagesDosen.value = Math.ceil(totalItemsDosen.value / itemsPerPageDosen.value);
        // console.log(dataDosen.value)
    } catch (error) {
        console.error(error);
    }
}

const nexPageDosen = () => {
    if (currentPageDosen.value < totalPagesDosen.value) {
        currentPageDosen.value++;
        fetchDataDosen(currentPageDosen.value);
    }
}

const prevPageDosen = () => {
    if (currentPageDosen.value > 1) {
        currentPageDosen.value--;
        fetchDataDosen(currentPageDosen.value);
    }
}
onMounted(() => {
    fetchDataMahasiswa(1);
    fetchDataDosen(1);
    fetchProdi();
})

</script>

<template>
    <div id="user-management-content" class="p-8">
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Total Pengguna</p>
                        <p class="text-2xl text-neutral-900">186</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-users text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-users" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Mahasiswa</p>
                        <p class="text-2xl text-neutral-900">150</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-graduation-cap text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Dosen</p>
                        <p class="text-2xl text-neutral-900">34</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-chalkboard-teacher text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-chalkboard-teacher" class="text-neutral-600" />
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-neutral-600">Administrator</p>
                        <p class="text-2xl text-neutral-900">2</p>
                    </div>
                    <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <!-- <i class="fa-solid fa-user-shield text-neutral-600"></i> -->
                        <font-awesome-icon icon="fa-solid fa-user-shield" class="text-neutral-600" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Mahasiswa -->
        <div id="user-table" class="bg-white rounded-lg border border-neutral-200">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Mahasiswa</h2>
                        <p class="text-sm text-neutral-600">
                            Kelola semua pengguna sistem
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input v-model.trim="serchtextMahasiswa" type="text" placeholder="Cari pengguna..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64" />
                        </div>
                        <!-- <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Role</option>
                            <option>Mahasiswa</option>
                            <option>Dosen</option>
                            <option>Administrator</option>
                        </select>
                        <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Status</option>
                            <option>Aktif</option>
                            <option>Tidak Aktif</option>
                        </select> -->
                        <button @click="poappTambahMahasiswa = true"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Pengguna
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Nama
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">Email</th>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Role
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">
                                Program Studi
                            </th>
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataMahasiswa" :key="data.mahasiswa_id"
                            class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">{{ data.nama_mahasiswa }}</p>
                                        <p class="text-sm text-neutral-500">{{ data.nim_mahasiswa }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">{{ data.email_mahasiswa }}</td>
                            <td class="p-4">
                                <span class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">{{
                                    data.role_mahasiswa }}</span>
                            </td>
                            <td class="p-4 text-neutral-600">{{ data.prodi }}</td>
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button @click="infoMahasiswa(data)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button @click="editMahasiswa(data)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button @click="prosesHapusMahasiswa(data.mahasiswa_id)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-neutral-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-600">
                        Menampilkan 1 - 5 dari 186 pengguna
                    </p>
                    <div class="flex items-center space-x-2">
                        <button @click="prevPageMahasiswa"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>

                        <button @click="nexPageMahasiswa"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dosen -->
        <div id="user-table" class="bg-white rounded-lg border border-neutral-200 mt-8">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                        <h2 class="text-lg text-neutral-900">Daftar Dosen</h2>
                        <p class="text-sm text-neutral-600">
                            Kelola semua pengguna sistem
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <div class="relative">
                            <!-- <i class="fa-solid fa-search absolute left-3 top-3 text-neutral-400"></i> -->
                            <font-awesome-icon icon="fa-solid fa-search"
                                class="absolute left-3 top-3 text-neutral-400" />
                            <input v-model.trim="serchtextDosen" type="text" placeholder="Cari pengguna..."
                                class="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500 w-full sm:w-64" />
                        </div>
                        <!-- <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Role</option>
                            <option>Mahasiswa</option>
                            <option>Dosen</option>
                            <option>Administrator</option>
                        </select>
                        <select
                            class="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-500">
                            <option>Semua Status</option>
                            <option>Aktif</option>
                            <option>Tidak Aktif</option>
                        </select> -->
                        <button @click="poappTambahDosen = true"
                            class="flex items-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            <!-- <i class="fa-solid fa-plus mr-2"></i> -->
                            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />
                            Tambah Pengguna
                        </button>
                    </div>
                </div>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Nama
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">Email</th>
                            <th class="text-left p-4 text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">
                                <div class="flex items-center">
                                    Role
                                    <!-- <i class="fa-solid fa-sort ml-1"></i> -->
                                    <font-awesome-icon icon="fa-solid fa-sort" class="ml-1" />
                                </div>
                            </th>
                            <th class="text-left p-4 text-sm text-neutral-600">
                                Program Studi
                            </th>
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">Status</th> -->
                            <!-- <th class="text-left p-4 text-sm text-neutral-600">
                                Terakhir Login
                            </th> -->
                            <th class="text-center p-4 text-sm text-neutral-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in dataDosen" :key="data.dosen_id"
                            class="border-b border-neutral-100 hover:bg-neutral-50">
                            <td class="p-4">
                                <div class="flex items-center">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234"
                                        alt="User Avatar" class="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p class="text-neutral-900">{{ data.dosen }}</p>
                                        <p class="text-sm text-neutral-500">{{ data.nip }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="p-4 text-neutral-600">{{ data.email }}</td>
                            <td class="p-4">
                                <span class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">{{
                                    data.tipe_pemilih }}</span>
                            </td>
                            <td class="p-4 text-neutral-600">{{ data.prodi }}</td>
                            <!-- <td class="p-4">
                                <span
                                    class="px-3 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Aktif</span>
                            </td>
                            <td class="p-4 text-neutral-600">25 Agu 2025, 08:15</td> -->
                            <td class="p-4">
                                <div class="flex justify-center space-x-2">
                                    <button @click="infoDosen(data)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-eye"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-eye" />
                                    </button>
                                    <button @click="editDosen(data)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-edit"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-edit" />
                                    </button>
                                    <button @click="prosesHapusDosen(data.dosen_id)"
                                        class="p-2 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-50 rounded">
                                        <!-- <i class="fa-solid fa-trash"></i> -->
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="px-6 py-4 border-t border-neutral-200">
                <div class="flex items-center justify-between">
                    <p class="text-sm text-neutral-600">
                        Menampilkan 1 - 5 dari 186 pengguna
                    </p>
                    <div class="flex items-center space-x-2">
                        <button @click="prevPageDosen"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Sebelumnya
                        </button>
                        <button @click="nexPageDosen"
                            class="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-600 hover:bg-neutral-50">
                            Selanjutnya
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- modal info mahasiswa -->
    <div v-if="popappInfoMahasiswa" id="modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[500px]">
            <h3 class="text-xl mb-4">Info Mahasiswa</h3>
            <div class="space-y-3 mb-6">
                <div class="flex justify-between">
                    <span class="text-neutral-600">Nama Mahasiswa</span>
                    <span>{{ seeMahasiswa.nama_mahasiswa }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Username</span>
                    <span>{{ seeMahasiswa.username_mahasiswa }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Nim</span>
                    <span>{{ seeMahasiswa.nim }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Email</span>
                    <span>{{ seeMahasiswa.email }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Prodi</span>
                    <span>{{ seeMahasiswa.prodi }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Role</span>
                    <span>{{ seeMahasiswa.role_mahasiswa }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Tipe Pemilih</span>
                    <span>{{ seeMahasiswa.tipe_pemilih }}</span>
                </div>
            </div>

            <div class="flex gap-3">
                <button @click="popappInfoMahasiswa = false"
                    class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Oke</button>
            </div>
        </div>
    </div>
    <!-- modal edit mahasiswa -->
    <div v-if="poappEditMahasiswa" id="add-course-modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Edit Mahasiswa</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <!-- 
                seeMahasiswa.value.id = data.mahasiswa_id;
                seeMahasiswa.value.prodi_id = data.prodi_id;
                seeMahasiswa.value.nama = data.nama_mahasiswa;
                seeMahasiswa.value.nim = data.nim_mahasiswa;
                seeMahasiswa.value.email = data.email_mahasiswa;
                seeMahasiswa.value.username = data.username_mahasiswa;
                seeMahasiswa.value.password = data.password_mahasiswa;
                seeMahasiswa.value.role = data.role_mahasiswa;
                -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Mahasiswa</label>
                        <input v-model="seeMahasiswa.nama" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukkan nama mahasiswa">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">NIM</label>
                        <input v-model="seeMahasiswa.nim" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Contoh: 00000000000000">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Email</label>
                        <input v-model="seeMahasiswa.email" type="email"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Email mahasiswa">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="seeMahasiswa.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <hr>
                            <option v-for="item in dataProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Role</label>
                        <select v-model="seeMahasiswa.role"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Role</option>
                            <option value="Mahasiswa Biasa">Mahasiswa Biasa</option>
                            <option value="Komti">Komti</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Username</label>
                        <input v-model="seeMahasiswa.username" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Username mahasiswa">
                    </div>
                </div>

                <div>
                    <label class="block text-sm mb-1">password</label>
                    <input v-model="seeMahasiswa.password" type="password"
                        class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                        placeholder="Masukan password mahasiswa">
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="poappEditMahasiswa = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesEditMahasiswa"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>
    <!-- modal tambah mahasiswa -->
    <div v-if="poappTambahMahasiswa" id="add-course-modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Tambah Mahasiswa</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <!-- 
                seeMahasiswa.value.id = data.mahasiswa_id;
                seeMahasiswa.value.prodi_id = data.prodi_id;
                seeMahasiswa.value.nama = data.nama_mahasiswa;
                seeMahasiswa.value.nim = data.nim_mahasiswa;
                seeMahasiswa.value.email = data.email_mahasiswa;
                seeMahasiswa.value.username = data.username_mahasiswa;
                seeMahasiswa.value.password = data.password_mahasiswa;
                seeMahasiswa.value.role = data.role_mahasiswa;
                -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Mahasiswa</label>
                        <input v-model="formMahasiswa.nama" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukkan nama mahasiswa">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">NIM</label>
                        <input v-model="formMahasiswa.nim" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Contoh: 00000000000000">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Email</label>
                        <input v-model="formMahasiswa.email" type="email"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Email mahasiswa">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="formMahasiswa.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <hr>
                            <option v-for="item in dataProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Role</label>
                        <select v-model="formMahasiswa.role"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Role</option>
                            <option value="Mahasiswa Biasa">Mahasiswa Biasa</option>
                            <option value="Komti">Komti</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Username</label>
                        <input v-model="formMahasiswa.username" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Username mahasiswa">
                    </div>
                </div>

                <div>
                    <label class="block text-sm mb-1">password</label>
                    <input v-model="formMahasiswa.password" type="password"
                        class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                        placeholder="Masukan password mahasiswa">
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="poappTambahMahasiswa = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesTambahMahasiswa"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>

    <!-- modal info dosen -->
    <div v-if="popappInfoDosen" id="modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-xl w-[500px]">
            <h3 class="text-xl mb-4">Info Mahasiswa</h3>
            <div class="space-y-3 mb-6">
                <!-- 
                seeDosen.value.nama_dosen = data.dosen;
                seeDosen.value.nip = data.nip;
                seeDosen.value.email = data.email;
                seeDosen.value.prodi = data.prodi;
                seeDosen.value.tipe_pemilih = data.tipe_pemilih;
                -->
                <div class="flex justify-between">
                    <span class="text-neutral-600">Nama Dosen</span>
                    <span>{{ seeDosen.nama_dosen }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">NIP</span>
                    <span>{{ seeDosen.nip }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Email</span>
                    <span>{{ seeDosen.email }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Prodi</span>
                    <span>{{ seeDosen.prodi }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-neutral-600">Role</span>
                    <span>{{ seeDosen.tipe_pemilih }}</span>
                </div>
            </div>

            <div class="flex gap-3">
                <button @click="popappInfoDosen = false"
                    class="flex-1 border border-neutral-200 p-3 rounded-xl hover:bg-neutral-50">Oke</button>
            </div>
        </div>
    </div>
    <!-- modal edit dosen -->
    <div v-if="poappEditDosen" id="add-course-modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Edit Dosen</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <!-- 
                seeDosen.value.id = data.dosen_id;
                seeDosen.value.prodi_id = data.prodi_id;
                seeDosen.value.nama = data.dosen;
                seeDosen.value.nip = data.nip;
                seeDosen.value.email = data.email;
                seeDosen.value.username = data.username;
                seeDosen.value.password = "";
                seeDosen.value.role = "Dosen";
                -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Dosen</label>
                        <input v-model="seeDosen.nama" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukkan nama Dosen">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">NIP</label>
                        <input v-model="seeDosen.nip" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Contoh: 197512031998031002">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Email</label>
                        <input v-model="seeDosen.email" type="email"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Email mahasiswa">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="seeDosen.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <hr>
                            <option v-for="item in dataProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Role</label>
                        <select v-model="seeDosen.role" class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Role</option>
                            <option value="Dosen">Dosen</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Username</label>
                        <input v-model="seeDosen.username" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Username mahasiswa">
                    </div>
                </div>

                <div>
                    <label class="block text-sm mb-1">password</label>
                    <input v-model="seeDosen.password" type="password"
                        class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                        placeholder="Masukan password mahasiswa">
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="poappEditDosen = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesEditDosen"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>
    <!-- modal tambah dosen -->
    <div v-if="poappTambahDosen" id="add-course-modal"
        class="fixed inset-0 bg-zinc-950/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-xl w-[600px] max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl">Edit Dosen</h2>
                    <button class="text-neutral-500 hover:text-neutral-700">
                        <i class="fa-solid fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="p-6 space-y-4">
                <!-- 
                seeDosen.value.id = data.dosen_id;
                seeDosen.value.prodi_id = data.prodi_id;
                seeDosen.value.nama = data.dosen;
                seeDosen.value.nip = data.nip;
                seeDosen.value.email = data.email;
                seeDosen.value.username = data.username;
                seeDosen.value.password = "";
                seeDosen.value.role = "Dosen";
                -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Nama Dosen</label>
                        <input v-model="formDosen.nama" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukkan nama Dosen">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">NIP</label>
                        <input v-model="formDosen.nip" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Contoh: 197512031998031002">
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Email</label>
                        <input v-model="formDosen.email" type="email"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Email mahasiswa">
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Prodi</label>
                        <select v-model="formDosen.prodi_id"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Prodi</option>
                            <hr>
                            <option v-for="item in dataProdi" :key="item.id" :value="item.id">{{ item.nama_prodi }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm mb-1">Role</label>
                        <select v-model="formDosen.role" class="w-full px-3 py-2 border border-neutral-200 rounded-lg">
                            <option>Pilih Role</option>
                            <option value="Dosen">Dosen</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm mb-1">Username</label>
                        <input v-model="formDosen.username" type="text"
                            class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                            placeholder="Masukan Username mahasiswa">
                    </div>
                </div>

                <div>
                    <label class="block text-sm mb-1">password</label>
                    <input v-model="formDosen.password" type="password"
                        class="w-full px-3 py-2 border border-neutral-200 rounded-lg"
                        placeholder="Masukan password mahasiswa">
                </div>
            </div>

            <div class="p-6 border-t border-neutral-200 flex justify-end gap-3">
                <button @click="poappTambahDosen = false"
                    class="px-4 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                    Batal
                </button>
                <button @click="prosesTambahDosen"
                    class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>