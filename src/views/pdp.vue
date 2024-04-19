<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div v-if="loading" class="flex justify-center items-center h-screen">
      Loading...
    </div>
    <div v-else class="p-4">
      <div class="max-w-4xl mx-auto">
        <!-- Movie Title -->
        <h1 class="text-3xl font-bold mt-4 mb-2">
          <!-- {{ products.value.title }} -->ll
        </h1>
        <!-- Movie Image -->
        <div class="flex ">
        <img 
          v-if="image.src" 
          :src="image.src" 
          alt="Movie Image" 
          class="w-fit max-h-96 rounded-lg shadow-lg mb-4"
        />  
        <div class="mx-6 px-6">
          dddddddddddddddddd
        </div>
        </div>
        
        <!-- Movie Description -->
        <p class="text-gray-300 text-lg">
          <!-- {{ products.value.description || 'No description available.' }} -->lll
        </p>
        <!-- Additional Details -->
        <div class="mt-4">
          <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2">
            <!-- {{ products.value.genre }} -->ll
          </span>
          <span class="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-400">
            <!-- Rating: {{ products.value.rating }} -->lll
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "@/Composable/useFetch";
import { ref, computed, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { products, loading, fetchProducers } = useFetch(`https://api.jikan.moe/v4/anime/${route.params.id}`);

watch(() => route.params.id, () => {
  // Assuming fetchProducers refetches data
  // Insert your data fetching or updating logic here
});

watchEffect(() => {
  // Debugging or additional side effects
  console.log(products.value);
});

const image = computed(() => {
  return {
    src: products.value?.images?.jpg?.large_image_url || null
  };
});
</script>
