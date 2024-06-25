<template>
  <div class="TodoIst">
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';


export default {
  name: 'TodoIst-todo',
  components: {
    TodoItem
  }
}
</script>