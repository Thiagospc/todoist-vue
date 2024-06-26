<template>
  <div class="TodoIst">
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
        <TodoForm />
        <TodoItems />
        <TodoVazio />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItems from '@/components/TodoItems.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoVazio from '@/components/TodoVazio.vue';


export default {
  name: 'TodoIst-todo',
  components: {
    TodoItems,
    TodoForm,
    TodoVazio
  }
}
</script>