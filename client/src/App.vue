<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>ArtifactsUI</h1>
    <div class="container">
      <nav class="nav-menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

header {
  display: flex;
  justify-content: left;
  border: 2px solid black;
  background-color: rgb(255, 153, 0);
  color: black;
}

h1 {
  border-right: 2px solid black;
  margin: 0;
  padding: 10px;
}

.nav-menu {
  display: flex;
  font-size: 24px;
}

.nav-menu a {
  color: black;
  margin: 15px 5vw;
  text-decoration: none;
}

</style>