<script setup lang="ts">
import { computed, ref } from 'vue';
import a from "../../assets/1679x945.webp";
import b from "../../assets/1679x945sr.webp";
import c from "../../assets/1679.webp";
import d from "../../assets/1679x945sr2.webp";
const list = [
    {
        id: 1,
        src: a,
    },
    {
        id: 2,
        src: b,
    },
    {
        id: 3,
        src: c,
    },
    {
        id: 4,
        src: d,
    },
    {
        id: 5,
        src: a,
    },
];

const activeId = ref(1);

const currentDot = computed(() => {
    const x = list.find((item) => (item.id === activeId.value ? item.src : ""));
    return x ? x.src : "./assets/1679x945sr.webp";
});

function slider(id: number) {
    activeId.value = id;
    const activeDot = document.querySelector(".active-dot");
    const dots = document.querySelectorAll(".dot");

    activeDot?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
    });
    const lastDot = dots[dots.length - 1];
    lastDot.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
    });
}
</script>
<template>
    <div class="relative">
        <transition name="fade" mode="out-in">
            <img v-if="currentDot" :src="currentDot" :key="currentDot" alt="header-img"
                class="max-h-screen-minus-10 mx-auto" />
        </transition>

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div class="overflow-y-hidden overflow-x-auto flex no-scrollbar max-w-36">
                <div v-for="item in list" @click.prevent="slider(item.id)" :key="item.id" :class="{
                'bg-white active-dot p-1 opacity-100': item.id === activeId,
                'bg-gray-900 opacity-100': item.id !== activeId,
            }" class="w-2.5 h-2.5 m-3 dot cursor-pointer border-gray-400 border bg-gray-700 opacity-50 rounded-full">
                    <div class="w-2.5 h-2.5"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* In your global CSS file */
.max-h-screen-minus-10 {
    max-height: calc(100vh - 40px);
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