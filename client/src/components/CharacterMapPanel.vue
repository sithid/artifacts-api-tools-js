<template>
  <div class="details">
    <h3>{{ formattedMapCode }} {{ formattedMapType }}</h3>
    <img id="mapImage" :src="mapImageSrc" />
    <h3> ( {{ this.map.x }} , {{ this.map.y }} ) </h3>
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
          skin: 'men1',
          x: 0,
          y: 0
        };
      }
    },
    map : {
      type: Object,
      default() {
        return {
          name: 'empty',
          skin: 'empty'
        };
      }
    }
  },
  computed: {
    mapImageSrc() {
      return `https://www.artifactsmmo.com/images/maps/${this.map.skin}.png`;
    },
    formattedMapCode() {
      if (!this.map?.content?.code) return '';
      return this.map.content.code.charAt(0).toUpperCase() + this.map.content.code.slice(1);
    },
    formattedMapType() {
      if (!this.map?.content?.type) return '';
      return this.map.content.type.charAt(0).toUpperCase() + this.map.content.type.slice(1);
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.details {
  border: 2px solid var(--color-text-primary);
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  margin-left: 10px;
  width: 100%;
  text-align: center;
}

#mapImage {
  margin: 0px;
}
</style> 