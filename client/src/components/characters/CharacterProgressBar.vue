<template>
  <div class="progress-container">
    <div class="progress-info">
      <span class="progress-label">{{ label }}</span>
      <span class="progress-value">{{ current }} / {{ max }}</span>
    </div>
    <div class="progress-bar" :class="type">
      <div 
        class="progress-fill" 
        :style="{ width: `${progressPercentage}%` }"
      ></div>
      <span class="progress-text">{{ current }} / {{ max }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      default: 'xp',
      validator: (value) => ['xp', 'hp'].includes(value)
    }
  },
  computed: {
    progressPercentage() {
      return (this.current / this.max) * 100;
    }
  }
}
</script>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

.progress-label {
  font-size: 0.8rem;
  color: var(--color-text-primary);
  text-transform: capitalize;
}

.progress-value {
  font-size: 0.8rem;
  color: var(--color-text-primary);
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 14px;
  background-color: var(--color-bg-primary);
  border-radius: 7px;
  overflow: hidden;
}

.progress-bar.xp {
  background-color: var(--color-bg-primary);
}

.progress-bar.hp {
  background-color: var(--color-bg-primary);
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease-in-out;
}

.progress-bar.xp .progress-fill {
  background-color: var(--color-bg-secondary);
}

.progress-bar.hp .progress-fill {
  background-color: var( --color-bg-secondary);
}

.progress-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  z-index: 1;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style> 