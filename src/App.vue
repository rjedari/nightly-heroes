<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import a from './assets/1679x945.webp';
import b from './assets/1679x945sr.webp';
import c from './assets/1679.webp';
import d from './assets/1679x945sr2.webp';
import { computed, ref, watch } from 'vue';
import { useProducers } from './Composable/getProduct';
const { producers,    loading, error } = useProducers();

const list = [
  {
    id: 1,
    src: a
  },
  {
    id: 2,
    src: b
  },
  {
    id: 3,
    src: c
  },
  {
    id: 4,
    src: d
  },
  {
    id: 5,
    src: a
  },
]

const activeId = ref(1)
const currentDot = computed(() => {
  const x = list.find(item => item.id === activeId.value ? item.src : '');
  return x ? x.src : './assets/1679x945sr.webp'
})

function slider(id: number) {
  activeId.value = id


  const activeDot = document.querySelector('.active-dot');
  if (activeId.value >= 4) {
    activeDot?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

}
</script>

<template>

  <header class="bg-gray-800 pb-10 ">
    <nav class=" mx-auto w-full z-10 fixed bg-gray-900">
      <div class="max-w-screen-xl  mx-auto px-4 h-16 flex justify-between  items-center">
        <div>
        </div>
        <div>
        </div>
        <div class="text-white  font-bold">
          <span>
            Apple TV +</span>
          <span class=" ml-5">
            TV
          </span>
        </div>
        <!-- Navigation links -->
        <div class="flex  items-center">
          <RouterLink class="text-white px-4 py-2" to="/">Home</RouterLink>
          <div class="mx-2">
            <img class="absolute m-2 z-10" src="./assets/loupe.png"></img>
            <input type="search" class=" py-1 rounded-md max-w-44 relative opacity-25	 border border-white" />
          </div>
          <button class="bg-blue-700 py-1 text-white px-2 rounded-md">sign in</button>
        </div>
      </div>
    </nav>
  </header>


  <main>
    <div class="relative ">
      <transition name="fade" mode="out-in">
        <img v-if="currentDot" :src="currentDot" :key="currentDot" alt="" class="mx-auto">
      </transition>

      <div class="absolute    bottom-0 left-1/2 transform -translate-x-1/2">
        <div class="overflow-y-hidden overflow-x-auto flex no-scrollbar max-w-36">
          <div v-for="item in list" @click.prevent="slider(item.id)" :key="item.id" :class="{
          'bg-white opacity-100': item.id === activeId,
          'bg-gray-900 opacity-100': item.id !== activeId,
          'active-dot': item.id === activeId
        }" class="w-2.5 h-2.5 m-3 cursor-pointer border-gray-400 border bg-gray-700 opacity-50 rounded-full">
            <div class="w-2.5 h-2.5"></div>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
    <div>
    </div>
  </main>
</template >

  <style scoped>
    body {
      background - color: rgb(78, 78, 78);
}

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
}

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
}
  </style>
