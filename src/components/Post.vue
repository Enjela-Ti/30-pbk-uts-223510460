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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const users = ref([]);
const selectedUserId = ref('');

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
    console.log('Users fetched:', users.value);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const fetchUserDetails = async () => {
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
};

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
.postingan {
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
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
