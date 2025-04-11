<template>
  <div class="character-stats-container">
    <h3 class="character-name">{{ character.name }}</h3>
    <character-progress-bar
      label="XP"
      :current="character.xp"
      :max="character.max_xp"
      type="xp"
    ></character-progress-bar>
    <character-progress-bar
      label="HP"
      :current="character.hp"
      :max="character.max_hp"
      type="hp"
    ></character-progress-bar>
  </div>
</template>

<script>
import CharacterProgressBar from '@/components/characters/CharacterProgressBar.vue';

export default {
  components: {
    CharacterProgressBar
  },
  props: {
    character: {
      type: Object,
      default() {
        return {
          name: "Empty",
          skin: "men1",
          x: 0,
          y: 0,
          level: 1,
          max_level: 100,
          hp: 100,
          max_hp: 100
        };
      }
    }
  }
}
</script>

<style scoped>
.character-stats-container {
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-tertiary);
  border: 2px solid var(--color-text-primary);
  width: 300px;
  height: 280px;
  margin-left: 10px;
  padding: 6px;
}

.character-name {
  color: var(--color-text-primary);
  font-size: 1.2rem;
}
</style>