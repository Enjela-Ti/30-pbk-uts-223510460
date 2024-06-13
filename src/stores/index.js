import { defineStore } from 'pinia';

export const useKegiatanStore = defineStore('kegiatan', {
  state: () => ({
    kegiatanList: [
      { nama: 'Pergi ke supermarket', status: 'Belum Selesai' },
      { nama: 'Beli bahan masakan', status: 'Selesai' },
    ],
  }),
  actions: {
    tambahKegiatan(kegiatan) {
      this.kegiatanList.push(kegiatan);
    },
    hapusKegiatan(index) {
      this.kegiatanList.splice(index, 1);
    },
    selesaiKegiatan(index) {
      this.kegiatanList[index].status = 'Selesai';
    },
    batalKegiatan(index) {
      this.kegiatanList[index].status = 'Belum Selesai';
    },
  },
});
