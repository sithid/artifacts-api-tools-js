<template>
  <div :class='getClassList'>
    <img id="charImage" :src='characterImageSrc' />
    <h1>{{ this.character.name }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    character : {
      type: Object,
      default() {
        return {
          name: 'Empty',
          skin: 'men1'
        };
      }
    },
    isActive: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    characterImageSrc() {
      return `https://www.artifactsmmo.com/images/characters/${this.character.skin}.png`;
    },
    getClassList() {
      return this.isActive ? 'character active' : 'character';
    }
  }
}
</script>

<style scoped>
.character {
  text-align: center;
  font-size: 1rem;
  background-color: var( --color-bg-tertiary);
  color: var(--color-text-primary);
  padding: 10px;
  min-width: 200px;
  max-width: 300px;
}

.active {
  border: 2px solid var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
}

#charImage {
  margin: 0;
}

</style>