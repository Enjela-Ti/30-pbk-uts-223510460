<template>
  <div>
    <div class="filter-icon" @click="toggleFilter">
      <button class="filter-button">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve">
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path d="M 85 25.887 H 33.91 c -2.761 0 -5 -2.239 -5 -5 s 2.239 -5 5 -5 H 85 c 2.762 0 5 2.239 5 5 S 87.762 25.887 85 25.887 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 72.634 41.962 H 33.91 c -2.761 0 -5 -2.239 -5 -5 s 2.239 -5 5 -5 h 38.724 c 2.762 0 5 2.239 5 5 S 75.396 41.962 72.634 41.962 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 60.269 58.038 H 33.91 c -2.761 0 -5 -2.238 -5 -5 s 2.239 -5 5 -5 h 26.358 c 2.762 0 5 2.238 5 5 S 63.03 58.038 60.269 58.038 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 47.902 74.113 H 33.91 c -2.761 0 -5 -2.238 -5 -5 s 2.239 -5 5 -5 h 13.992 c 2.762 0 5 2.238 5 5 S 50.664 74.113 47.902 74.113 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 13.219 74.113 c -2.761 0 -5 -2.238 -5 -5 V 20.887 c 0 -2.761 2.239 -5 5 -5 s 5 2.239 5 5 v 48.227 C 18.219 71.875 15.98 74.113 13.219 74.113 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 21.438 34.105 c -1.28 0 -2.559 -0.488 -3.536 -1.464 l -4.683 -4.683 l -4.683 4.683 c -1.953 1.952 -5.118 1.952 -7.071 0 c -1.953 -1.953 -1.953 -5.119 0 -7.071 l 8.219 -8.219 c 1.953 -1.952 5.118 -1.952 7.071 0 l 8.219 8.219 c 1.953 1.953 1.953 5.119 0 7.071 C 23.997 33.617 22.717 34.105 21.438 34.105 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
        </svg>
        <svg v-if="filterActive" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve" fill="black">
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path d="M 89.09 65.887 c -1.381 0 -2.655 -0.759 -3.302 -1.971 L 63.29 15.326 c -0.802 -1.61 0.307 -3.512 2.043 -3.512 H 153.68 c 1.735 0 2.845 1.902 2.043 3.512 L 92.393 63.916 c -0.648 1.212 -1.922 1.971 -3.303 1.971 Z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 89.09 67.887 c -1.922 0 -3.5 -1.578 -3.5 -3.5 V 12.326 c 0 -1.922 1.578 -3.5 3.5 -3.5 s 3.5 1.578 3.5 3.5 v 52.061 C 92.59 66.308 90.012 67.887 89.09 67.887 Z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(251,249,249); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
        </svg>
      </button>
    </div>
  <div class="tabel1">
    <div class="add-activity">
      <input type="text" v-model="newActivity" placeholder="Tambah kegiatan" @keyup.enter="tambahKegiatan">
      <button @click="tambahKegiatan">Tambah</button>
    </div>
    <div class="tabel">
      <table>
        <thead>
          <tr>
            <th>Kegiatan</th>
            <th>Status</th>
            <th>Opsional</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(kegiatan, index) in kegiatanList" :key="index">
            <td :class="{ 'completed': kegiatan.status === 'Selesai' }">{{ kegiatan.nama }}</td>
            <td :class="{ 'completed': kegiatan.status === 'Selesai' }">{{ kegiatan.status }}</td>
            <td v-if="kegiatan.status === 'Belum Selesai'">
              <button @click="selesai(index)">Selesai</button>
              <button @click="hapus(index)">Hapus</button>
            </td>
            <td v-else>
              <button @click="batal(index)">Batal</button>
              <button @click="hapus(index)">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useKegiatanStore } from '../stores/index';

const store = useKegiatanStore();
const newActivity = ref('');

const kegiatanList = computed(() => store.kegiatanList);

const selesai = (index) => {
  store.selesaiKegiatan(index);
};

const batal = (index) => {
  store.batalKegiatan(index);
};

const hapus = (index) => {
  store.hapusKegiatan(index);
};

const tambahKegiatan = () => {
  if (newActivity.value.trim() !== '') {
    store.tambahKegiatan({ nama: newActivity.value.trim(), status: 'Belum Selesai' });
    newActivity.value = '';
  }
};

const filterActive = ref(false);
const originalKegiatanList = ref([]);

const toggleFilter = () => {
  if (!filterActive.value) {
    originalKegiatanList.value = store.kegiatanList.slice();
    store.kegiatanList = store.kegiatanList.filter(kegiatan => kegiatan.status === 'Belum Selesai');
  } else {
    if (originalKegiatanList.value.length > 0) {
      store.kegiatanList = originalKegiatanList.value.slice();
      originalKegiatanList.value = [];
    }
  }
  filterActive.value = !filterActive.value;
};
</script>
<style scoped>
.completed {
  text-decoration: line-through;
}
.add-activity {
  margin-bottom: 20px;
}
.tabel {
  margin-top: 20px;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
  color: black;
}

tr:hover {
  background-color: #ddd;
}
.filter-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.filter-icon {
  position: fixed;
  left: 35%;
  top: 30%;
}
.tabel1 {
  position: fixed;
  display: table;
  justify-content: center;
  align-items: center;
  left: 40%;
  top: 30%;
}
</style>
