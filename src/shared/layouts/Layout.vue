<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
    <main class="mx-10 flex flex-col justify-center">
        <Header />
        <RouterView />
        <Footer />
    </main>
</template>
