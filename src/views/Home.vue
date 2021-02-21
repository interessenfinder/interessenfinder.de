<template>
  <div class="home">
    <strong>Du kannst über 'Interesse hinzufügen' weitere Hobbys hinzufügen, diese Seite lebt von den Nutzern und ist 100 % kostenlos.</strong><br><br><br>
    <template v-if="loading">
                <div class="loader"></div>
            </template>  
            <template v-else>
    <li v-for="user in users" :key="user.name">
    <Interest
      :name="user.name" 
      :description="user.description"
      :inside="user.indoor"
      :allone="user.allone"
    /><br>
    </li>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
//import usersData from "@/../api/test.json";
import Interest from '@/components/Interest.vue'
import axios from 'axios'
    export default {
        data() {
            return {
                loading: false,
                users: []
            }
        },
        created() {
            this.getDataFromApi()
        },
        methods: {
            getDataFromApi() {
                this.loading = true
                axios.get('https://api.interessenfinder.de/data')
                .then(response => {
                    this.loading = false
                    this.users = response.data
                })
                .catch(error => {
                    this.loading = false
                    console.log(error)
                })
            }
        },
        name: 'App',
        components: {
        Interest
      }
    }
//export default {  
//  async data() {
//    const test = (await fetch("https://api.interessenfinder.de/data")).json()
//    //console.log(test)
//    console.log(Promise.resolve(test).then())
//    Promise.resolve(test).then(function(value) {
//      console.log(value); // "Success"
//      return {
//      users: value,
//      };
//    }, function() {
//      //console.log(1 + value); // "Success"
//});
//    //return {
//    //  users: etst,
//    //  };
//  },
//  name: 'App',
//  components: {
//    Interest
//  }
//};

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
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>