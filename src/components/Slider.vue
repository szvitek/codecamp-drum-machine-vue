<template>
  <div class="w-full">
    <input
      type="range"
      min="1"
      max="100"
      :value="value"
      @input="(e) => emit('onChange', parseInt((e.target as HTMLInputElement).value))"
      class="slider appearance-none w-full h-[25px] bg-slate-300 outline-none opacity-70 transition-opacity duration-200 hover:opacity-100"
      id="myRange"
      :disabled="!power"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number; power: boolean }>();
const emit = defineEmits(['onChange']);
</script>

<style scoped>
/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  @apply bg-orange-500 w-[25px] h-[25px] cursor-pointer appearance-none;
}

.slider::-moz-range-thumb {
  @apply bg-orange-500 w-[25px] h-[25px] cursor-pointer;
}
</style>
