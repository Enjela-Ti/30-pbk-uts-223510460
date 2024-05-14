<template>
  <div class="background">
    <img src="https://wallpaperwaifu.com/wp-content/uploads/2023/11/texas-exusiai-arknights-police-chase-thumb.jpg" />
  </div>
  <nav>
    <div class="navbar-container">
      <div class="collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="ShowTabTudos" :class="{'active': todosActive}">Todos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="ShowTabPost" :class="{'active': postsActive}">Post</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div v-if="todosActive" id="app">
    <KegiatanTable />
  </div>
  <div v-if="postsActive" class="postingan">
    <h2>Postingan User</h2>
    <div class="dropdown-container">
      <select v-model="selectedUserId" @change="fetchUserDetails">
        <option value="" selected>Pilih Username</option>
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.username }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import KegiatanTable from './components/KegiatanTable.vue';

const todosActive = ref(true);
const postsActive = ref(false);

const users = ref([]);
const selectedUserId = ref('');

function ShowTabTudos() {
  todosActive.value = true;
  postsActive.value = false;
}

function ShowTabPost() {
  todosActive.value = false;
  postsActive.value = true;
}

async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

async function fetchUserDetails() {
  if (!selectedUserId.value) return;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUserId.value}`);
    const user = response.data;
    Swal.fire({
      title: `${user.name}`,
      html: `
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <p><strong>Perusahaan:</strong> ${user.company.name}</p>
      `,
      icon: 'info',
    });
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
}

onMounted(fetchUsers);
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

.postingan{
  position: fixed;
  left: 45%;
  top: 30%;
}
.postingan h2{
  color: yellow;
  text-shadow: 0 0 10px white, 0 0 60px orange;
  font-size: 30px;
  font-family: "Jaro", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
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

.dropdown-container {
  margin-top: 20px;
}

select {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
