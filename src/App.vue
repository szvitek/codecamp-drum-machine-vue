<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import DrumPad from './components/DrumPad.vue';
import Slider from './components/Slider.vue';
import Toggle from './components/Toggle.vue';

type Keys = 'q' | 'w' | 'e' | 'a' | 's' | 'd' | 'z' | 'x' | 'c';
const keys: Keys[] = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
type SoundInfo = {
  src: string;
  name: string;
};

type Bank = Record<Keys, SoundInfo>;
type Banks = Record<'chill' | 'hard', Bank>;

const banks: Banks = {
  chill: {
    q: { src: 'Heater-1.mp3', name: 'Heater 1' },
    w: { src: 'Heater-2.mp3', name: 'Heater 2' },
    e: { src: 'Heater-3.mp3', name: 'Heater 3' },
    a: { src: 'Heater-4_1.mp3', name: 'Heater 4' },
    s: { src: 'Heater-6.mp3', name: 'Clap' },
    d: { src: 'Dsc_Oh.mp3', name: 'Open HH' },
    z: { src: 'Kick_n_Hat.mp3', name: "Kick n' Hat" },
    x: { src: 'RP4_KICK_1.mp3', name: 'Kick' },
    c: { src: 'Cev_H2.mp3', name: 'Closed HH' },
  },
  hard: {
    q: { src: 'KickK1.mp3', name: 'Kick' },
    w: { src: 'KickRaw2.mp3', name: 'Raw Kick' },
    e: { src: 'KickUptempo3V2.mp3', name: 'Uptempo Kick' },
    a: { src: 'Clapshot1.mp3', name: 'Clap 1' },
    s: { src: 'Clapshot2.mp3', name: 'Clap 2' },
    d: { src: 'HiHatShot1.mp3', name: 'Hi Hat 1' },
    z: { src: 'HiHatShot2.mp3', name: 'Hi Hat 2' },
    x: { src: 'Leadshot2_G.mp3', name: 'Lead' },
    c: { src: 'Screechshot2_E.mp3', name: 'Screech' },
  },
};

const power = ref(true);
const volume = ref(80);
const selectedBank = ref<keyof typeof banks>('chill');
const displayText = ref('Heater Kit');
const drumpadRefs = ref<InstanceType<typeof DrumPad>[]>([]);

const handleKeydown = ({ key }: KeyboardEvent) => {
  const k = key.toLowerCase() as Keys;
  if (keys.includes(k)) {
    const drumpad = drumpadRefs.value.find((drumpad) => drumpad.id === k);
    drumpad!.drumpadRef.click();
  }
};

watch(selectedBank, (value) => {
  if (value === 'hard') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

const togglePower = (checked: boolean) => {
  console.log('checke', checked);
  power.value = checked;
  displayText.value = `Power ${checked ? 'On' : 'Off'}`;
};

const volumeChange = (vol: number) => {
  volume.value = vol;
  displayText.value = `Volume: ${vol}`;
};

const toggleBanks = (checked: boolean) => {
  selectedBank.value = checked ? 'hard' : 'chill';
  displayText.value = selectedBank.value;
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <div
    id="drum-machine"
    class="flex flex-col text-center rounded-md outline outline-orange-500 relative md:w-[660px] md:flex-row min-w-max p-6"
  >
    <div class="pad-banks grid grid-cols-3 md:w-1/2">
      <DrumPad
        v-for="key of keys"
        :key="key"
        :id="key"
        :src="`${selectedBank}/${banks[selectedBank][key].src}`"
        @onPlay="displayText = banks[selectedBank][key].name"
        ref="drumpadRefs"
        :power="power"
        :volume="volume"
      />
    </div>
    <div class="logo absolute top-0.5 right-2">
      <a class="font-bold" href="https://www.freecodecamp.org" target="_blank">
        FCC <font-awesome-icon icon="fa-brands fa-free-code-camp" />
      </a>
    </div>
    <div
      class="controls flex flex-1 flex-col justify-around items-center min-h-[300px] md:ml-6"
    >
      <div>
        <Toggle label="Power" :isChecked="power" @onToggle="togglePower" />
      </div>
      <div id="display" class="border-2 px-4 py-2 rounded-md self-stretch">
        {{ displayText }}
      </div>
      <div class="self-stretch">
        <Slider :value="volume" @on-change="volumeChange" :power="power" />
      </div>
      <div :class="{ 'pointer-events-none': !power }">
        <Toggle label="Banks" @onToggle="toggleBanks" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
