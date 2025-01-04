<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <header
    class="flex flex-col md:flex-row justify-between items-center gap-y-3 md:p-4"
  >
    <RouterLink to="/">
      <img
        class="rounded-full size-24 shadow-sm shadow-emerald-50 hover:shadow-white hover:shadow-lg hover:cursor-pointer transition-shadow duration-1000 ease-in-out"
        src="../../shared/assets/icon.webp"
        alt="The Binding of Isaac Platinum Logo"
      />
    </RouterLink>
    <h1 class="text-2xl text-center md:text-4xl text-white">
      The Binding of Isaac Platinum Remake
    </h1>
    <nav class="flex flex-row items-center gap-x-8">
      <RouterLink
        to="/"
        class="text-zinc-200/80 font-semibold hover:text-white hover:underline hover:font-bold"
      >
        Home</RouterLink
      >
      <RouterLink
        to="/chatbot"
        class="text-zinc-200/80 font-semibold hover:text-white hover:underline hover:font-bold"
        >Chatbot
      </RouterLink>
      <RouterLink
        to="/about"
        class="text-zinc-200/80 font-semibold hover:text-white hover:underline hover:font-bold"
        >About
      </RouterLink>
    </nav>
  </header>
</template>
<style scoped>
@import url("https://fonts.cdnfonts.com/css/upheaval");

h1 {
  font-family: "Upheaval TT (BRK)", sans-serif;
}
</style>
