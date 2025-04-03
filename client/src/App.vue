<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/test">Test</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
.app {
  text-align: center;
}
</style>