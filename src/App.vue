<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/todo">Todo</router-link>
  </nav>
  <router-view />
  <br><br>
  <Lorem />
</template>

<style>
@import "open-props/style";
@import "open-props/normalize";
@import "open-props/buttons";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: var(--font-size-fluid-1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
