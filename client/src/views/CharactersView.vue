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
      <div class="right-panels">
        <div class="top-panels">
          <div class="map-panel">
            <character-map-panel 
              v-if="activeCharacterMap && characters[activeCharacter]"
              :character="characters[activeCharacter]"
              :map="activeCharacterMap"
            ></character-map-panel>
            <div v-else class="loading">
              Loading character data...
            </div>
          </div>
          <div class="stats-panel">
            <character-stat-panel
              v-if="characters[activeCharacter]"
              :character="characters[activeCharacter]"
            ></character-stat-panel>
          </div>
          <div class="skills-panel">
            <character-skill-panel
              v-if="characters[activeCharacter]"
              :character="characters[activeCharacter]"
          ></character-skill-panel>
          </div>
        </div>
          <div class="bottom-panels">
          <div class="gear-panel">
            <character-equipment-panel
            v-if="characters[activeCharacter]"
            :character="characters[activeCharacter]"
            ></character-equipment-panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EndpointManager } from '../../../shared/endpoints/EndpointManager.js';
import CharacterImgPanel from '@/components/characters/CharacterImgPanel.vue';
import CharacterMapPanel from '@/components/characters/CharacterMapPanel.vue';
import CharacterStatPanel from '@/components/characters/CharacterStatPanel.vue';
import CharacterSkillPanel from '@/components/characters/CharacterSkillPanel.vue';
import CharacterEquipmentPanel from '@/components/characters/CharacterEquipmentPanel.vue';

export default {
  components: {
    CharacterImgPanel,
    CharacterMapPanel,
    CharacterSkillPanel,
    CharacterStatPanel,
    CharacterEquipmentPanel
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
        await this.getCharacters();
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
}

.right-panels {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.top-panels {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.bottom-panels {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

ul {
  border: 2px solid var(--color-text-primary);
  background-color: var(--color-bg-components);
  align-content: center;
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