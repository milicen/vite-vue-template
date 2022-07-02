import { defineStore } from "pinia"

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: [],
    filter: 'all',
    nextId: 0
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter(todo => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter(todo => !todo.isFinished)
    },
    filteredTodos(state) {
      if(state.filter === 'finished') {
        return this.finishedTodos
      }
      if(state.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return state.todos
    }
  },
  actions: {
    addTodo(text) {
      this.todos.push({
        text,
        id: this.nextId++,
        isFinished: false
      })
    }
  }
})