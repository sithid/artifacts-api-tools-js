<template>
  <div class="character-skill-panel">
    <div class="skills-container">
      <skill-progress-indicator 
        skill="Mining"
        :level="character.mining_level"
        :current-xp="character.mining_xp"
        :max-xp="character.mining_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Woodcutting"
        :level="character.woodcutting_level"
        :current-xp="character.woodcutting_xp"
        :max-xp="character.woodcutting_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Fishing"
        :level="character.fishing_level"
        :current-xp="character.fishing_xp"
        :max-xp="character.fishing_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Weaponcrafting"
        :level="character.weaponcrafting_level"
        :current-xp="character.weaponcrafting_xp"
        :max-xp="character.weaponcrafting_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Gearcrafting"
        :level="character.gearcrafting_level"
        :current-xp="character.gearcrafting_xp"
        :max-xp="character.gearcrafting_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Jewelrycrafting"
        :level="character.jewelrycrafting_level"
        :current-xp="character.jewelrycrafting_xp"
        :max-xp="character.jewelrycrafting_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Cooking"
        :level="character.cooking_level"
        :current-xp="character.cooking_xp"
        :max-xp="character.cooking_max_xp"        
      ></skill-progress-indicator>
      <skill-progress-indicator 
        skill="Alchemy"
        :level="character.alchemy_level"
        :current-xp="character.alchemy_xp"
        :max-xp="character.alchemy_max_xp"        
      ></skill-progress-indicator>
    </div>
  </div>
</template>

<script>
import SkillProgressIndicator from '@/components/characters/SkillProgressIndicator.vue';

export default {
  components: {
    SkillProgressIndicator
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
* {
  box-sizing: border-box;
}

.character-skill-panel {
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-components);
  border: 2px solid var(--color-text-primary);
  border-radius: 15px;
  width: 600px;
  height: 280px;
  margin-left: 10px;
  padding: 6px;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

p {
  text-align: center;
  margin-left: 10px;
}
</style>
