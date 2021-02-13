<template>
  <div class="home">
    <li v-for="user in users" :key="user.id">
    <Interest
      :name="user.name" 
      :description="user.description"
      :inside="user.indoor"
      :allone="user.allone"
    /><br>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import usersData from "@/assets/interests.json";
import Interest from '@/components/Interest.vue'

export default {
  data() {
    return {
      users: usersData,
      };
  },
  name: 'App',
  components: {
    Interest
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: medium;
  color: #EBF0F4;
  margin-top: 60px;
}
ul, li {
    list-style-type: none;
}
body {
  padding: 25px;
  font-size: 25px;
}
</style>