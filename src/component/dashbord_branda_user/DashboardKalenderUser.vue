<script setup>
import api from '@/apisetting/api';
import { ref, onMounted, computed } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const selectEvents = ref(null);
const popapp = ref(false);
const loadingData = ref(false);
const progres = ref(0);
const buttonClicClose = () => {
    selectEvents.value = null;
    popapp.value = false;
}

// inisialisasi 
const calenderOption = ref({
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: function (info) {
        alert('Tanggal sekarang :  ' + info.dateStr)
    },
    eventClick: function (info) {
        popapp.value = true
        // prevent default behavior
        info.jsEvent.preventDefault();
        // masukan ke select Events
        selectEvents.value = {
            title: info.event.title,
            date: info.event.start,
            waktu: info.event.extendedProps.jam_mulai.slice(0, 5) + ' - ' + info.event.extendedProps.jam_selesai.slice(0, 5),
            ruangan: info.event.extendedProps.ruangan,
            pemesan: info.event.extendedProps.pemesan,
            // mataKuliah: info.event.extendedProps.mataKuliah,
            keterangan: info.event.extendedProps.keterangan,
            konfirmasi: info.event.extendedProps.konfirmasi
        }
    },
    events: []
})

// panggil API dari pemesanan ruangan
const fetchData = async () => {
    try {
        if (localStorage.getItem('userRole') == 'Dosen') {
            loadingData.value = false;
            progres.value = 25;
            const response = await api.get('/pemilihan_ruangan_dosen_akses_semua', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
            const data = response.data.data;
            progres.value = 50;
            // console.log(data);
            // memasukan ke dalam eventsData
            calenderOption.value.events = data.map(item => ({
                id: item.pemilihan_ruangan_id,
                title: item.nama_ruangan,
                date: item.tanggal_pemilihan,
                extendedProps: {
                    ruangan: item.nama_ruangan,
                    kapasitas: item.kapasitas,
                    pemesan: item.nama_pemilihan,
                    tipe_pemilih: item.tipe_pemilihan,
                    jam_mulai: item.jam_mulai,
                    jam_selesai: item.jam_selesai,
                    konfirmasi: item.konfirmasi_kehadiran
                }
            }))
            progres.value = 100;
            loadingData.value = true;
        } else if (localStorage.getItem('userRole') == 'Mahasiswa Biasa' || localStorage.getItem('userRole') == 'Komti') {
            loadingData.value = false;
            progres.value = 25;
            const response = await api.get('/pemilihan_ruangan_mahasiswa_akses_semua', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('barierToken')
                }
            })
            const data = response.data.data;
            progres.value = 50;
            // console.log(data);
            // memasukan ke dalam eventsData
            calenderOption.value.events = data.map(item => ({
                id: item.pemilihan_ruangan_id,
                title: item.nama_ruangan,
                date: item.tanggal_pemilihan,
                extendedProps: {
                    ruangan: item.nama_ruangan,
                    kapasitas: item.kapasitas,
                    pemesan: item.nama_pemilihan,
                    tipe_pemilih: item.tipe_pemilihan,
                    jam_mulai: item.jam_mulai,
                    jam_selesai: item.jam_selesai,
                    konfirmasi: item.konfirmasi_kehadiran
                }
            }))
            progres.value = 100;
            loadingData.value = true;
        }
    } catch (error) {
        console.error(error);
        localStorage.removeItem('barierToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userData');
    }
}

onMounted(() => {
    fetchData();
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
    <div>
        <FullCalendar :options="calenderOption" />
    </div>
    <!-- Event Detail Modal -->
    <div v-if="popapp" class="fixed inset-0 bg-slate-900/50 bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl p-6 w-96 shadow-xl">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl">Detail Pemesanan</h3>
                <button onclick="closeEventModal()" class="p-1 hover:bg-neutral-100 rounded">
                    <i class="fa-solid fa-xmark text-neutral-500"></i>
                </button>
            </div>

            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-door-closed text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Ruangan</p>
                        <p id="modalRoom">{{ selectEvents.ruangan }}</p>
                    </div>
                </div>

                <!-- <div class="flex items-center gap-3">
                    <i class="fa-solid fa-book text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Mata Kuliah</p>
                        <p id="modalSubject">{{ selectEvents.mataKuliah }}</p>
                    </div>
                </div> -->

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-clock text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Waktu</p>
                        <p id="modalTime">{{ selectEvents.waktu }} WIB</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-calendar text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Tanggal</p>
                        <p id="modalDate">{{ selectEvents.date.getDate() }} / {{ selectEvents.date.getMonth() + 1 }} /
                            {{
                                selectEvents.date.getFullYear() }}</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-user text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Pemesan</p>
                        <p id="modalBooker">{{ selectEvents.pemesan }}</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-info-circle text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Status</p>
                        <!-- Konfirmasi Hadir -->
                        <span v-if="selectEvents.konfirmasi == 'Hadir'"
                            class="inline-flex px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{
                                selectEvents.konfirmasi }}</span>
                        <span v-if="selectEvents.konfirmasi == 'Pending'" id="modalStatus"
                            class="inline-flex px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">{{
                                selectEvents.konfirmasi }}</span>
                        <span v-if="selectEvents.konfirmasi == 'Tidak Hadir'" id="modalStatus"
                            class="inline-flex px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">{{
                                selectEvents.konfirmasi }}</span>
                    </div>
                </div>
            </div>

            <div class="flex gap-3 mt-6">
                <button @click="buttonClicClose"
                    class="flex-1 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
                    Tutup
                </button>
            </div>
        </div>
    </div>

</template>