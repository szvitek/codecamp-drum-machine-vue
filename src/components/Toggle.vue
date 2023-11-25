<script setup lang="ts">
defineProps<{ isChecked?: boolean; label: string }>();
const emit = defineEmits(['onToggle']);
</script>

<template>
  <div>
    <h2 class="text-center font-bold">{{ label }}</h2>
    <label class="switch">
      <input
        class="opacity-0 w-0 h-0"
        type="checkbox"
        :checked="isChecked"
        @change="(e) => emit('onToggle', (e.target as HTMLInputElement).checked)"
      />
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  @apply relative inline-block w-[60px] h-[34px];
}

/* The slider */
.slider {
  @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-300 duration-[0.4ms] rounded-sm before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-slate-600 before:rounded-sm before:duration-[400ms];
}

input:checked + .slider {
  @apply bg-orange-500;
}

input:focus + .slider {
  @apply shadow-[0_0_1px] shadow-orange-500;
}

input:checked + .slider:before {
  @apply transform translate-x-[26px];
}
</style>
