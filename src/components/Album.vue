<template>
    <div>
      <h2>Album</h2>
      <div class="album">
        <div v-for="photo in photos" :key="photo.id" class="photo">
          <router-link :to="`/albums/${photo.id}`">
            <img :src="photo.thumbnailUrl" :alt="photo.title" />
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const photos = ref([]);
  
  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=28');
      photos.value = response.data;
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
  
  onMounted(fetchPhotos);
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
    color: aliceblue;
    text-shadow: 0 0 10px black;
  }
  .album {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .photo img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
  </style>
  