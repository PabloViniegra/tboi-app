<script setup lang="ts"></script>
<template>
  <header class="flex flex-col md:flex-row justify-between items-center p-4">
    <img
      class="rounded-full size-24 shadow-sm shadow-emerald-50"
      src="../../shared/assets/icon.webp"
      alt="The Binding of Isaac Platinum Logo"
    />
    <h1 class="text-3xl md:text-4xl text-white">
      The Binding of Isaac Platinum Remake
    </h1>
    <nav class="flex flex-row items-center gap-x-8">
      <RouterLink
        to="/"
        class="text-zinc-200/80 font-semibold hover:text-white hover:underline hover:font-bold"
        >Home</RouterLink
      >
    </nav>
  </header>
</template>
<style scoped>
@import url("https://fonts.cdnfonts.com/css/upheaval");
h1 {
  font-family: "Upheaval TT (BRK)", sans-serif;
}
</style>
