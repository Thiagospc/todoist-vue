<template>
  <Header class="header"/>
  <router-view/>
</template>

<script>
import Header from './components/header.vue';

export default{
  components:{
    Header
  }
}
</script>

<style>
body{
  background-color: #006A4E;
  /* todo color #4FFFB0 */
}
.header{
  margin-bottom: 10%;
}
</style>
