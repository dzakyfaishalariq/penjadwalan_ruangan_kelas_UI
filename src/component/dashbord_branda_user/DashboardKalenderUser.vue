<script setup>
import { ref, onMounted, computed } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const eventsData = ref([]);
const selectEvents = ref(null);
const popapp = ref(false);
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
            ruangan: info.event.extendedProps.ruangan,
            pemesan: info.event.extendedProps.pemesan,
            mataKuliah: info.event.extendedProps.mataKuliah,
            keterangan: info.event.extendedProps.keterangan
        }
    },
    events: [
        {
            title: 'Pemakaian Ruangan',
            date: '2025-09-01',
            extendedProps: {
                ruangan: 'Ruangan Perwat 1',
                pemesan: 'Dr. Ahmad',
                mataKuliah: 'Pemrograman Web',
                keterangan: 'Kuliah Reguler',
                waktu: '08:00 - 10:00'
            }
        },
        {
            title: 'event 2',
            date: '2025-09-01'
        }
    ]
})

// panggil API dari pemesanan ruangan


</script>
<template>
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

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-book text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Mata Kuliah</p>
                        <p id="modalSubject">{{ selectEvents.mataKuliah }}</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-clock text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Waktu</p>
                        <p id="modalTime">08:00 - 10:00 WIB</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-calendar text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Tanggal</p>
                        <p id="modalDate">22 Agustus 2025</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-user text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Pemesan</p>
                        <p id="modalBooker">Dr. Sarah Williams</p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-info-circle text-neutral-500"></i>
                    <div>
                        <p class="text-sm text-neutral-600">Status</p>
                        <span id="modalStatus"
                            class="inline-flex px-2 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">Terkonfirmasi</span>
                    </div>
                </div>
            </div>

            <div class="flex gap-3 mt-6">
                <button @click="buttonClicClose"
                    class="flex-1 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200">
                    Tutup
                </button>
                <button class="flex-1 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800">
                    Edit Pemesanan
                </button>
            </div>
        </div>
    </div>

</template>