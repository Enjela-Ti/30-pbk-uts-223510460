<template>
  <div class="album-detail" v-if="photo">
    <h2>{{ photo.title }}</h2>
    <img :src="photo.url" :alt="photo.title" width="600" height="600" @click="toggleImage" />
    <button @click="goBack">Back to Album</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const photo = ref(null);
const route = useRoute();
const router = useRouter();
let isThumbnail = ref(true); // Menggunakan ref untuk menyimpan status thumbnail atau gambar penuh

const fetchPhoto = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${route.params.id}`);
    photo.value = response.data;
  } catch (error) {
    console.error('Error fetching photo:', error);
  }
};

const toggleImage = () => {
  isThumbnail.value = !isThumbnail.value; // Toggle status isThumbnail
};

const goBack = () => {
  router.back(); // Navigasi ke halaman sebelumnya
};

onMounted(fetchPhoto);
</script>

<style scoped>
.album-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.album-detail img {
  max-width: 100%;
  height: auto;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
