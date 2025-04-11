<template>
  <div class="stat-container">
    <div class="damage-panel">
      <img alt="dmg icon" src="https://www.artifactsmmo.com/images/effects/dmg.png"/>
      <span class="value">{{ character.dmg }}%</span><span class="label">Damage</span>
      <img alt="crit icon" src="https://www.artifactsmmo.com/images/effects/critical_strike.png"/>
      <span class="value">{{ character.critical_strike }}%</span><span class="label">Critical Strike</span>
    </div>
    <div class="damage-panel">
      <img alt="fire icon" src="https://www.artifactsmmo.com/images/effects/dmg_fire.png"/>
      <span class="value">{{ character.attack_fire }}</span><span class="label">Atk</span>
      <span class="value">{{ character.dmg_fire }}</span><span class="label">Dmg</span>
      <span class="value">{{ character.res_fire }}</span><span class="label">Res</span>
    </div>
    <div class="damage-panel">
      <img alt="water icon" src="https://www.artifactsmmo.com/images/effects/dmg_water.png"/>
      <span class="value">{{ character.attack_water }}</span><span class="label">Atk</span>
      <span class="value">{{ character.dmg_water }}</span><span class="label">Dmg</span>
      <span class="value">{{ character.res_water }}</span><span class="label">Res</span>
    </div>
    <div class="damage-panel">
      <img alt="earth icon" src="https://www.artifactsmmo.com/images/effects/dmg_earth.png"/>
      <span class="value">{{ character.attack_earth }}</span><span class="label">Atk</span>
      <span class="value">{{ character.dmg_earth }}</span><span class="label">Dmg</span>
      <span class="value">{{ character.res_earth }}</span><span class="label">Res</span>
    </div>
    <div class="damage-panel">
      <img alt="air icon" src="https://www.artifactsmmo.com/images/effects/dmg_air.png"/>
      <span class="value">{{ character.attack_air }}</span><span class="label">Atk</span>
      <span class="value">{{ character.dmg_air }}</span><span class="label">Dmg</span>
      <span class="value">{{ character.res_air }}</span><span class="label">Res</span>
    </div>
  </div>
</template>

<script>
export default {
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
  },
  computed: {
  }
}
</script>

<style>
.stat-container {
  display: flex;
  flex-direction: column;
}

.damage-panel {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 10px;
  font-size: .75rem;
  justify-content: space-between;
}

.label {
  align-content: center;
  color: var( --color-text-primary );
  font-size: 0.75rem;
}
.value {
  align-content: center;
  color: var( --color-bg-primary );
  font-size: 1rem;
}

.stat-container img {
  max-width: 32px;
  max-height: 32px;
}
</style>