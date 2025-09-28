<script setup>
import api from '@/apisetting/api';
import { onMounted, ref } from 'vue';

const dataLocal = JSON.parse(localStorage.getItem('userData'))
const myData = ref(null)
const myDataUpdate = ref({})
const dataProdi = ref(null)
const loadingData = ref(false)
const popapp = ref(false)
const progres = ref(0)
// console.log(JSON.parse(dataLocal))
// console.log(dataLocal.id)

const requestData = async () => {
    try {
        if (localStorage.getItem('userRole') == 'Dosen') {
            // console.log('area dosen')
            loadingData.value = false
            progres.value = 25
            const request = await api.get(`/dosen_akses_by_id/${dataLocal.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("barierToken")
                }
            })
            progres.value = 50
            const requestDataProdi = await api.get('/akses_prodi_untuk_dosen', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("barierToken")
                }
            })
            progres.value = 75
            myData.value = request.data.data
            console.log(myData.value)
            dataProdi.value = requestDataProdi.data.data
            // console.log(myData.value)
            myDataUpdate.value = {
                prodi_id: myData.value.prodi_id,
                nama: myData.value.dosen,
                nip: myData.value.nip,
                email: myData.value.email,
                username: myData.value.username,
                password: "",
                role: myData.value.role,
            }
            progres.value = 100
        } else if (localStorage.getItem('userRole') == 'Mahasiswa Biasa' || localStorage.getItem('userRole') == 'Komti') {
            loadingData.value = false
            progres.value = 25
            const request = await api.get(`/mahasiswa_akses_by_id/${dataLocal.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("barierToken")
                }
            })
            progres.value = 50
            const requestDataProdi = await api.get('/mahasiswa_akses_prodi', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("barierToken")
                }
            })
            progres.value = 75
            myData.value = request.data.data
            dataProdi.value = requestDataProdi.data.data
            // console.log(myData.value)
            myDataUpdate.value = {
                prodi_id: myData.value.prodi_id,
                nama: myData.value.nama_mahasiswa,
                nim: myData.value.nim_mahasiswa,
                email: myData.value.email_mahasiswa,
                username: myData.value.username_mahasiswa,
                password: "",
                role: myData.value.role_mahasiswa
            }
            progres.value = 100
        }
    } catch (error) {
        console.log(error)
    } finally {
        loadingData.value = true
    }
}

const updateData = async () => {
    try {
        if (localStorage.getItem('userRole') == 'Dosen') {
            popapp.value = true
            progres.value = 25
            const request = await api.put(`/dosen_akses/update/${dataLocal.id}`, myDataUpdate.value, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("barierToken")
                }
            })

            // ganti variabel local data storage
            progres.value = 100
            console.log(request.data.data)
        } else if (localStorage.getItem('userRole') == 'Mahasiswa Biasa' || localStorage.getItem('userRole') == 'Komti') {
            popapp.value = true
            progres.value = 25
            const request = await api.put(`/mahasiswa_akses/update/${dataLocal.id}`, myDataUpdate.value, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("barierToken")
                }
            })

            // ganti variabel local data storage
            progres.value = 100
            console.log(request.data.data)
        }
    } catch (error) {
        console.log(error)
    } finally {
        popapp.value = false
    }
}

onMounted(() => {
    requestData();
})

</script>
<template>
    <!-- Loading Page -->
    <div v-if="!loadingData" id="loading-screen" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div class="text-center">
            <div
                class="w-16 h-16 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin mx-auto mb-4">
            </div>
            <h2 class="text-xl mb-2">Memuat Dashboard</h2>
            <p class="text-neutral-600">Menyiapkan data ruangan dan jadwal...</p>
            <div class="mt-6 w-64 bg-neutral-200 rounded-full h-2 mx-auto">
                <div class="bg-neutral-900 h-2 rounded-full animate-pulse" :style="{ width: progres + '%' }"></div>
            </div>
        </div>
    </div>
    <!-- popapp -->
    <div v-if="popapp" id="success-modal"
        class="fixed inset-0 bg-neutral-900/50 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div class="text-center">
                <p class="text-neutral-600 mb-6">Data Sedang Diupdate...</p>
                <div class="flex justify-center">
                    <div class="animate-spin w-8 h-8 border-4 border-neutral-200 border-t-neutral-900 rounded-full">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main id="main-content" class="flex-1 bg-neutral-50">
        <header class="flex justify-between items-center mb-8">
            <h1 class="text-2xl">Pengaturan Akun</h1>

            <div class="flex items-center gap-4">
                <div class="relative">
                    <!-- <i class="fa-regular fa-bell text-xl text-neutral-600 cursor-pointer"></i> -->
                    <font-awesome-icon icon="fa-solid fa-bell" class="text-xl text-neutral-600 cursor-pointer" />
                    <span
                        class="absolute -top-1 -right-1 w-4 h-4 bg-neutral-900 text-white text-xs flex items-center justify-center rounded-full">2</span>
                </div>
            </div>
        </header>

        <div class="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div class="border-b border-neutral-200">
                <div class="flex">
                    <button class="px-6 py-4  bg-neutral-900 text-white">Profil</button>
                </div>
            </div>

            <div class=" p-6">
                <div class="max-w-4xl">
                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Program Studi</label>
                            <select v-model="myDataUpdate.prodi_id"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                                <option v-for="(data, index) in dataProdi" :key="data.id" :value="data.id">
                                    {{ index + 1 }}. {{ data.nama_prodi }}
                                </option>
                            </select>
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Nama Lengkap</label>
                            <input type="text" v-model="myDataUpdate.nama"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">NIP</label>
                            <input type="text" v-model="myDataUpdate.nip"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Email</label>
                            <input type="email" v-model="myDataUpdate.email"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Username</label>
                            <input type="text" v-model="myDataUpdate.username"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-neutral-600">Password</label>
                            <input type="password" v-model="myDataUpdate.password"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                        </div>

                        <div class="col-span-2">
                            <label class="block mb-2 text-sm text-neutral-600">Role</label>
                            <select v-model="myDataUpdate.role"
                                class="w-full px-4 py-2 border border-neutral-200 rounded-lg">
                                <option value="Dosen" disabled>Dosen</option>
                                <option value="Mahasiswa Biasa" disabled>Mahasiswa Biasa</option>
                                <option value="Komti" disabled>Komti</option>
                            </select>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button @click="updateData"
                            class="px-6 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                            Simpan Perubahan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>