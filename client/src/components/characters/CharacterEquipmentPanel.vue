<template>
  <div class="equipment-panel">
    <div class="gear-panel">
      <div class="item-slot">
        <equipment-slot-panel
          slot="Weapon"
          :value="character.weapon_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Helmet"
          :value="character.helmet_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Shield"
          :value="character.shield_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Body Armor"
          :value="character.body_armor_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Character"
          :value="character.skin"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Amulet"
          :value="character.amulet_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Leg Armor"
          :value="character.leg_armor_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Boots"
          :value="character.boots_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Ring(1)"
          :value="character.ring1_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Utility(1)"
          :value="character.utility1_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Utility(2)"
          :value="character.utility2_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Ring(2)"
          :value="character.shield_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Artifact(1)"
          :value="character.artifact_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Artifact(2)"
          :value="character.artifact1_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Artifact(3)"
          :value="character.artifact3_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Rune"
          :value="character.rune_slot"
        ></equipment-slot-panel>
      </div>
      <div class="item-slot">
        <equipment-slot-panel
          slot="Bag"
          :value="character.bag_slot"
        ></equipment-slot-panel>
      </div>
    </div>
  </div>
</template>

<script>
import EquipmentSlotPanel from '@/components/items/EquipmentSlotPanel.vue';

export default {
  components: {
    EquipmentSlotPanel
  },
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.equipment-panel {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: var( --color-bg-components );
  border: 2px solid var(--color-text-primary);
  border-radius: 15px;
  margin: 0 10px;
  width: 250px;
  height: 420px;
}

.gear-panel {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>