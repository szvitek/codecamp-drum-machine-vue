<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  id: string;
}>();

const src = '';

const isPlaying = ref(false);
const audioRef = ref();
const handleCLick = () => {
  console.log('handle click');
};
</script>

<template>
  <div
    :class="`bg-slate-700 select-none drum-pad w-24 h-24 flex items-center justify-center border rounded-md shadow-lg uppercase transition-colors duration-200 ${
      isPlaying ? 'active' : ''
    }`"
    :id="id.toUpperCase()"
    :key="id"
    @click="handleCLick"
  >
    <audio
      class="clip"
      :id="id.toUpperCase()"
      :src="src"
      :ref="audioRef"
    ></audio>
    {{ id.toUpperCase() }}
  </div>
</template>

<style scoped></style>
