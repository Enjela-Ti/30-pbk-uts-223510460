<template>
    <div class="postingan">
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
  import { ref, watch, defineProps, onMounted } from 'vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  const props = defineProps({
    activeTab: String,
    showTab: Function
  });
  
  const users = ref([]);
  const selectedUserId = ref('');
  
  function fetchUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        users.value = response.data;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }
  
  function fetchUserDetails() {
    if (!selectedUserId.value) return;
    axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUserId.value}`)
      .then(response => {
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
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }
  
  watch(() => props.activeTab, () => {
    if (props.activeTab === 'posts') fetchUsers();
  });
  
  onMounted(() => {
    if (props.activeTab === 'posts') fetchUsers();
  });
  </script>
  
  <style scoped>
  .postingan {
    position: fixed;
    left: 45%;
    top: 30%;
  }
  .postingan h2 {
    color: yellow;
    text-shadow: 0 0 10px white, 0 0 60px orange;
    font-size: 30px;
    font-family: "Jaro", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
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
  