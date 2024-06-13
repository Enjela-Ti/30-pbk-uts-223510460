<template>
  <div class="background">
    <img src="https://wallpaperwaifu.com/wp-content/uploads/2023/11/texas-exusiai-arknights-police-chase-thumb.jpg" />
  </div>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="background-color: bisque;">
      <q-toolbar style="color: navy;">
        <q-toolbar-title>
          Navigation
        </q-toolbar-title>
        <q-btn flat label="Todos" @click="showTab('todos')" :class="{'active': activeTab === 'todos'}" />
        <q-btn flat label="Posts" @click="showTab('posts')" :class="{'active': activeTab === 'posts'}" />
        <q-btn flat label="Albums" @click="showTab('albums')" :class="{'active': activeTab === 'albums'}" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const activeTab = ref('todos');
const route = useRoute();
const router = useRouter();

function showTab(tab) {
  activeTab.value = tab;
  router.push(`/${tab}`);
}
</script>

<style>
.background img {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 90%;
  min-width: 1500px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
  object-fit: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: brightness(0.8);
}
</style>
