<template>
  <div class="skill-container">
    <div class="skill-info">
      <span class="skill-name">{{ skill }}</span>
      <span class="skill-level">Level {{ level }}</span>
    </div>
    <div class="skill-progress-bar">
      <div class="skill-progress-fill" :style="{ width: `${progressPercentage}%` }">
      </div>
      <span class="skill-xp">{{ currentXp }} / {{ maxXp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: String,
      default() {
        return 'empty';
      }
    },
    level: {
      type: Number,
      default() {
        return 1;
      }
    },
    currentXp: {
      type: Number,
      default() {
        return 0;
      }
    },
    maxXp: {
      type: Number,
      default() {
        return 100;
      }
    }
  },
  computed: {
    progressPercentage() {
      return (this.currentXp / this.maxXp) * 100;
    }
  }
}
</script>

<style>
.skill-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
}

.skill-name {
  font-size: 0.8rem;
  color: var(--color-text-primary);
}

.skill-level {
  font-size: 0.8rem;
  color: var(--color-text-primary);
}

.skill-progress-bar {
  position: relative;
  width: 100%;
  height: 12px;
  background-color: var(--color-bg-primary);
  border-radius: 6px;
  overflow: hidden;
}

.skill-progress-fill {
  height: 100%;
  background-color: var(--color-bg-secondary);
  transition: width 0.3s ease-in-out;
}

.skill-xp {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.65rem;
  color: var(--color-text-secondary);
  z-index: 1;
}
</style>