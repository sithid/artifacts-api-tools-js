<template>
  <div class="slot-item">
    <div v-if="this.value !== 'Empty slot' && this.value !== ''">
      <img :src="itemImageSrc"/>
    </div>
    <div v-else class="empty">
      <span>{{ this.slot }}</span>
      <span>Empty slot</span>
    </div>
  </div>
</template>

<script>
export default {
 props: {
    slot: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default() {
        return 'Empty slot';
      }
    }
  },
  computed: {
    itemImageSrc() {
      if( this.slot !== "Character")
        return `https://www.artifactsmmo.com/images/items/${this.value}.png`;
      else
        return `https://www.artifactsmmo.com/images/characters/${this.value}.png`;
    }
  }
}
</script>

<style scoped> 
.slot-item {
  width: 64px;
  height: 64px;
  align-content: center;
  text-align: center;
  color: var( --color-text-secondary );
  background-color: var( --color-bg-secondary );
  margin: 1px;
}
.empty {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 8px;
  justify-content: center;
}

img {
  width: 48px;
  height: 48px;
}
</style>