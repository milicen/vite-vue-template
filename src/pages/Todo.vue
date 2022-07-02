<template>
  <h1>Todos</h1>

  <form @submit.prevent="submitTodo">
    <input type="text" placeholder="Type in todo" v-model="text">
  </form>

  <div style="display: flex; gap: 1em; justify-content: center">
    <div>
      <h3>Unfinished</h3>
      <ul style="list-style: none; padding: 0">
        <TodoItem
          v-for="todo in store.unfinishedTodos"
          :key="todo.id"
          :item="todo" />
      </ul>
    </div>
    <div>
      <h3>Finished</h3>
      <ul style="list-style: none; padding: 0">
        <TodoItem
          v-for="todo in store.finishedTodos"
          :key="todo.id"
          :item="todo" />
      </ul>
    </div>
  </div>
  
</template>

<script setup>
import {useTodos} from '../store/todos'

const store = useTodos()

let text = ref('')

function submitTodo() {
  store.addTodo(text.value)
  text.value = ''
}
</script>