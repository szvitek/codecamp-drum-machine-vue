<script setup lang="ts">
defineProps<{ label: string }>();
const emit = defineEmits(['onToggle']);
</script>

<template>
  <div>
    <h2 className="text-center mb-2">{{ label }}</h2>
    <label class="switch">
      <input
        type="checkbox"
        @change="(e) => emit('onToggle', (e.target as HTMLInputElement).checked)"
      />
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(51 65 85);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  @apply bg-orange-500;
}

input:focus + .slider {
  @apply shadow-[0_0_1px] shadow-orange-500;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
