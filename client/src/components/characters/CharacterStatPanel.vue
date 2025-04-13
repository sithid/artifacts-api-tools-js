<template>
  <div class="character-stats-container">
    <h3 class="character-name">{{ character.name }}, Level {{ character.level }}</h3>
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
    <div class="dmg-res-container">
      <damage-stat-panel 
        :character="character"
      ></damage-stat-panel>
    </div>
  </div>
</template>

<script>
import CharacterProgressBar from '@/components/characters/CharacterProgressBar.vue';
import DamageStatPanel from '../effects/DamageStatPanel.vue';

export default {
  components: {
    CharacterProgressBar,
    DamageStatPanel
  },
  props: {
    character: {
      type: Object,
      default() {
        return {
          required: true,
          name: "Empty",
          skin: "men1",
          x: 0,
          y: 0,
          level: 1,
          max_level: 100,
          hp: 100,
          max_hp: 100,
          dmg: 0,
          critical_strike: 0,
          attack_fire: 0,
          attack_water: 0,
          attack_earth: 0,
          attack_air: 0,
          dmg_fire: 0,
          dmg_water: 0,
          dmg_earth: 0,
          dmg_air: 0,
          res_fire: 0,
          res_water: 0,
          res_earth: 0,
          res_air: 0
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
  background-color: var(--color-bg-components);
  border: 2px solid var(--color-text-primary);
  border-radius: 15px;
  width: 300px;
  height: 280px;
  margin-left: 10px;
  padding: 5px;
}

.character-name {
  color: var(--color-text-primary);
  font-size: 1.2rem;
}

.dmg-res-container {
  
}
</style>