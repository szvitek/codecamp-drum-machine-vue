<script setup lang="ts">
import DrumPad from './components/DrumPad.vue';
import Slider from './components/Slider.vue';
import Toggle from './components/Toggle.vue';

const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'] as const;
</script>

<template>
  <div
    id="drum-machine"
    class="flex flex-col text-center rounded-md outline outline-orange-500 relative md:w-[660px] md:flex-row min-w-max p-6"
  >
    <div class="pad-banks grid grid-cols-3 md:w-1/2">
      <template v-for="key of keys">
        <DrumPad :id="key" />
      </template>
    </div>
    <div class="logo absolute top-0.5 right-0.5">
      <p class="font-bold">
        FCC <font-awesome-icon icon="fa-brands fa-free-code-camp" />
      </p>
    </div>
    <div
      class="controls flex flex-1 flex-col justify-around items-center min-h-[300px]"
    >
      <div>
        <Toggle label="Power" />
      </div>
      <div id="display" class="border-2 px-4 py-2 rounded-md">display</div>
      <div>
        <Slider />
      </div>
      <div>
        <Toggle label="Banks" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
