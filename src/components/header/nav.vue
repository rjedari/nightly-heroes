<template>
  <nav class="mx-auto w-full z-10 fixed bg-gray-900">
    <div class="max-w-screen-xl mx-auto px-4 h-16 flex justify-between items-center">
      <div></div>
      <div></div>
      <div class="text-white font-bold">
        <span> Apple TV +</span>
        <span class="ml-5"> TV </span>
      </div>
      <!-- Navigation links -->
      <div class="flex items-center">
        <RouterLink class="text-white px-4 py-2" to="/">Home</RouterLink>
        <div class="mx-2">
          <img class="absolute m-2 z-10" src="../../assets/loupe.png" />
          <input type="search" class="py-1 rounded-md max-w-44 relative opacity-25 border border-white" />
        </div>
        <button class="bg-blue-700 py-1 text-white px-2 rounded-md">
          sign in
        </button>
      </div>
    </div>
  </nav>

</template>
<style lang="">

</style>