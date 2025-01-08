<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CookieConsent from "../components/CookieConsent.vue";
</script>
<template>
  <main class="mx-10 flex flex-col justify-center">
    <Header />
    <RouterView />
    <Footer />
    <CookieConsent />
  </main>
</template>
