<template>
  <div class="container">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
     <Header></Header>
     
  
 <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style>
* {
box-sizing: border-box;
padding: 0px;
margin: 0px;
}
.container {
  min-height: 100vh;
 background: #FFFFFF;
  

}




/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
.routerLink{
     text-decoration: none;
     width: 80%;
 }
</style>
