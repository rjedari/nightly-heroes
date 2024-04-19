<template>
    <div class="flex flex-col">
        <div class="flex flex-col sm:py-10 sm:px-10 p-5 relative justify-center">
            <div class="relative sm:w-44 sm:h-60 w-32 h-52 overflow-hidden">
                <div class="absolute -z-1 inset-0 transition-transform duration-500 transform hover:scale-110">
                    <router-link :to="{ name: 'pdp', params: { id } }">
                        <img class="object-contain image" :src="`${src}`" alt="" />
                    </router-link>
                    <!-- <img class="" :src="`${src}`" alt="" /> -->
                </div>
                <div class="absolute z-1 -top-1 left-0">
                    <i class="fa-solid fa-bookmark relative text-yellow-500 text-4xl">
                        <i
                            class="fa-solid fa-star text-black flex justify-center top-0 left-0 right-0 text-lg absolute"></i>
                    </i>
                </div>
            </div>
            <div class="absolute z-1 left-8 bottom-5 shadow-lg">
                <i :class="computedClass"></i>
            </div>
        </div>
        <div class="text-base flex justify-center text-gray-300 hover:text-white px-10">
            <p>
                {{ title }}{{ id }}
            </p>
        </div>
    </div>

</template>

<script setup>
import { computed } from "vue";


const props = defineProps({
    src: String,
    rating: Number,
    releaseDate: String,
    title: String,
    id: Number,
    index: Number,
});
const year = computed(() => new Date(props.releaseDate).getFullYear());
const computedClass = computed(() => {
    return `fa-solid fa-${props.index + 1} text-white text-5xl shadow-lg`;
})
</script>

<style scoped>
.image {
    background-size: cover;
    background-position: center;
    z-index: 1;
}
</style>