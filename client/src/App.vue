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
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border: 2px solid var(--color-text-primary);
  margin-bottom: 10px;
}

.container {
  display: flex;
  align-items: center;
}

h1 {
  display: inline-block;
  border: 2px solid var(--color-text-primary);
  background-color: var( --color-bg-tertiary);
  border-radius: 5px;
  min-width: 200px;
  max-width: 300px;
  margin-left: 10px;
}

.nav-menu {
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  align-items: center;
}

.nav-menu a {
  color: var(--color-text-primary);
  margin: 15px 5vw;
  text-decoration: none;
  border: 2px solid var(--color-text-primary);
  border-radius: 15px;
  background-color: var(--color-bg-tertiary);
  padding: 2px;
}
</style>