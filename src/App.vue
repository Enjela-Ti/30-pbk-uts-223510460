<template>
  <div class="background">
    <img src="https://wallpaperwaifu.com/wp-content/uploads/2023/11/texas-exusiai-arknights-police-chase-thumb.jpg" />
  </div>
  <nav>
    <div class="navbar-container">
      <div class="collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="showTab('todos')" :class="{'active': activeTab === 'todos'}">Todos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="showTab('posts')" :class="{'active': activeTab === 'posts'}">Post</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Todos v-if="activeTab === 'todos'" :activeTab="activeTab" :showTab="showTab" />
  <Posts v-if="activeTab === 'posts'" :activeTab="activeTab" :showTab="showTab" />
</template>

<script setup>
import { ref } from 'vue';
import Todos from './components/KegiatanTable.vue';
import Posts from './components/Post.vue';

const activeTab = ref('todos');

function showTab(tab) {
  activeTab.value = tab;
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar-container {
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 2px solid orange;
  background-color: #333;
  border-radius: 5px;
  margin-top: 20px;
  top: 5%;
  left: 43%;
}

.navbar-nav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-nav .nav-item {
  margin: 0 15px;
}

.navbar-nav .nav-link {
  font-weight: bold;
  font-size: 23px;
  color: white;
  text-decoration: none;
  padding: 5px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  background-color: orange;
  color: white;
}

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
