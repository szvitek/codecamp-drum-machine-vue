<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['onPlay']);
const { id, src } = defineProps<{
  id: string;
  src: string;
}>();

const isPlaying = ref(false);
const audioRef = ref<HTMLAudioElement>();
const drumpadRef = ref();
const handleCLick = () => {
  audioRef.value!.currentTime = 0;
  audioRef.value!.play();
  emit('onPlay');
};

defineExpose({ id, drumpadRef });
</script>

<template>
  <div
    :class="`bg-slate-700 select-none drum-pad w-24 h-24 flex items-center justify-center border rounded-md shadow-lg uppercase transition-colors duration-200 ${
      isPlaying ? 'active' : ''
    }`"
    :id="id.toUpperCase()"
    :key="id"
    @click="handleCLick"
    @keydown="handleCLick"
    ref="drumpadRef"
  >
    <audio
      class="clip"
      :id="id.toUpperCase()"
      :src="src"
      ref="audioRef"
    ></audio>
    {{ id.toUpperCase() }}
  </div>
</template>

<style scoped></style>
