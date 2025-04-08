<template>
  <div>
    <div class="characters-view">
      <ul class="no-bullets">
        <li v-for="(character, index) in characters">
          <character
            @click="charPanelClicked(index)"
            v-if="characters.length > 0"
            :character="characters[index]"
            :is-active="charActive(index)"
          ></character>
        </li>
      </ul>
      <div>
        <div class="details">
          <h3>{{ this.characters[this.activeCharacter].name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EndpointManager } from '../../../shared/EndpointManager.js';
import Character from '@/components/Character.vue';

export default {
  components: {
    Character
  },
  created() {
    this.getCharacters();
  },
  data() {
    return {
      manager: new EndpointManager(),
      characters: [],
      activeCharacter: 0,
    }
  },
  methods: {
    charPanelClicked(index) {
      console.log(index, this.activeCharacter);
      this.activeCharacter = index;
    },
    charActive(index) {
      return index === this.activeCharacter;
    },
    async getCharacters() {
      this.manager.getCharacterData().then( (data) => {
        console.log(data);

        if( data !== null ) {
          this.characters = data;
        }
      });
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}

.characters-view {
  display: flex;
  flex-direction: row;
  background-color: var( --color-bg-primary);
  color: var(--color-text-primary);
  width: 100%;
}

.details {
  background-color: var( --color-bg-tertiary);
  border: 2px solid var(--color-text-primary);
  color: var(--color-text-primary);
  width: 100%;
  margin-left: 10px;
}

ul {
  border: 2px solid var(--color-text-primary);
  margin: 0;
}

.no-bullets {
  list-style-type: none;
  padding-left: 0;
}

p {
  margin-left: 10px;
}
</style>