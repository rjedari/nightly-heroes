<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import navBar from '../components/header/nav.vue'
import mainHeader from '../components/header/header.vue'
import scrollerX from '../components/scroller.vue'

import { computed, ref, watch } from "vue";
import { useFetch } from "../Composable/useFetch";
import {
  isTemplateExpression,
  reduceEachLeadingCommentRange,
} from "typescript";
const { products, loading, error } = useFetch('https://api.jikan.moe/v4/producers');


</script>

<template>
  <header class="bg-gray-800 pb-10">
    <navBar />
  </header>
  <main>
    <mainHeader />
    <RouterView />
    <div></div>
    <scrollerX />
  </main>
</template>

<style scoped>
body {
  background-color: rgb(78, 78, 78);
}
</style>
