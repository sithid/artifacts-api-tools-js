<template>
  <div>
    <div class="characters-view">
      <ul class="no-bullets">
        <li v-for="(character, index) in characters">
          <character-img-panel
            @click="charPanelClicked(index)"
            v-if="characters.length > 0"
            :character="character"
            :is-active="charActive(index)"
          ></character-img-panel>
        </li>
      </ul>
      <div>
        <character-map-panel 
          v-if="activeCharacterMap && characters[activeCharacter]"
          :character="characters[activeCharacter]"
          :map="activeCharacterMap"
        ></character-map-panel>
        <div v-else class="loading">
          Loading character data...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EndpointManager } from '../../../shared/EndpointManager.js';
import CharacterImgPanel from '@/components/CharacterImgPanel.vue';
import CharacterMapPanel from '@/components/CharacterMapPanel.vue';

export default {
  components: {
    CharacterImgPanel,
    CharacterMapPanel
  },
  created() {
    this.getCharacters();
  },
  data() {
    return {
      manager: new EndpointManager(),
      characters: [],
      activeCharacter: 0,
      activeCharacterMap: null
    }
  },
  watch: {
    activeCharacter: {
      async handler(newIndex) {
        if (this.characters && this.characters[newIndex]) {
          const character = this.characters[newIndex];
          if (character && typeof character.x === 'number' && typeof character.y === 'number') {
            await this.getCharacterMap(character);
          }
        }
      }
    }
  },
  methods: {
    async getCharacterMap(character) {
      if (!character) return null;
      try {
        const data = await this.manager.getMap(character);
        this.activeCharacterMap = data;
      } catch (error) {
        console.error('Error fetching map:', error);
      }
    },
    charPanelClicked(index) {
      this.activeCharacter = index;
    },
    charActive(index) {
      return index === this.activeCharacter;
    },
    async getCharacters() {
      try {
        const data = await this.manager.getCharacterData();
        if (data !== null) {
          this.characters = data;
          if (this.characters.length > 0) {
            const character = this.characters[this.activeCharacter];
            if (character && typeof character.x === 'number' && typeof character.y === 'number') {
              await this.getCharacterMap(character);
            }
          }
        }
      } catch (error) {
        console.error('Error loading characters:', error);
      }
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

.loading {
  padding: 20px;
  text-align: center;
  color: var(--color-text-primary);
}
</style>