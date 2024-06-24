<template>
  <Header />
  <TodoIst />
</template>

<script>
import Header from './components/header.vue'
import TodoIst from './components/TodoIst.vue'

export default {
  name: 'App',
  components: {
    Header,
    TodoIst
  }
}
</script>
