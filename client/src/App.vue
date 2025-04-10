<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <body>
    <header>
      <div class="container">
        <h1>ArtifactsUI</h1>
        <nav class="nav-menu">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/characters">Characters</RouterLink>
          <RouterLink to="/">Inventory</RouterLink>
          <RouterLink to="/">Trade</RouterLink>
          <RouterLink to="/">Misc</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </body>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  margin: 0;
}

header {
  display: flex;
  justify-content: left;
  background-color: var( --color-bg-secondary);
  color: var(--color-text-primary);
  border: 2px solid var(--color-text-primary);
  margin-bottom: 10px;
}

h1 {
  display: inline-block;
  border-right: 2px solid var(--color-text-primary);
  min-width: 200px;
  max-width: 300px;
  margin: 0;
  padding: 10px;
}

.nav-menu {
  display: inline-block;
  font-size: 1.5rem;
}

.nav-menu a {
  color: var(--color-text-primary);
  margin: 15px 5vw;
  text-decoration: none;
}

</style>