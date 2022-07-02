<template>
  <li>
    <input type="checkbox" name="todo" :id="item.id" @change="checked = !checked" :checked="checked">
    <label :for="item.id" :class="{'strike': checked}">{{item.text}}</label>
  </li>
</template>

<script setup>
import {useTodos} from '../store/todos'

const store = useTodos()

const props = defineProps({
  item: Object
})

let checked = ref(store.todos[props.item.id].isFinished)

watch(checked, (val) => {
  store.todos[props.item.id].isFinished = val
})
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}
</style>
