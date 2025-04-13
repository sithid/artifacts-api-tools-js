<template>
  <div class="details">
    <h3>{{ formattedMapCode }}</h3>
    <img id="mapImage" :src="formattedMapSrc" />
    <h3>{{ formattedMapCords }}</h3>
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
        }
      }
    },
    map: {
      type: Object,
      default() {
        return {
          name: "empty",
          skin: "empty",
          x: 0,
          y: 0,
          content: {
            code: "empty",
            type: "empty",
          }
        }
      }
    }
  },
  computed: {
    formattedMapSrc() {
      if (!this.map?.skin) {
        return "";
      }

      return `https://www.artifactsmmo.com/images/maps/${this.map.skin}.png`;
    },
    formattedMapCode() {
      if (!this.map?.content?.code) return "";
      return (
        this.map.content.code.charAt(0).toUpperCase() +
        this.map.content.code.slice(1)
      );
    },
    formattedMapType() {
      if (!this.map?.content?.type) return "";
      return (
        this.map.content.type.charAt(0).toUpperCase() +
        this.map.content.type.slice(1)
      );
    },
    formattedMapCords() {
      if (this.map.x === undefined || this.map.y === undefined) {
        return "";
      }

      return `( ${this.map.x} , ${this.map.y} )`;
    }
  }
}
</script>

<style scoped>
.details {
  border: 2px solid var(--color-text-primary);
  border-radius: 15px;
  background-color: var(--color-bg-components);
  color: var(--color-text-primary);
  text-align: center;
  margin-left: 10px;
  width: 250px;
  height: 280px;
}

#mapImage {
  margin: 0;
}
</style>
