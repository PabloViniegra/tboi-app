<script setup lang="ts">
import FixReporter from '../components/FixReporter.vue';
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({
        duration: 1000,
        once: true,
    });
});
</script>
<template>
    <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <article class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2
                            class="text-white text-2xl md:text-4xl font-extrabold leading-normal lg:text-start text-center mb-14" data-aos="fade-down">
                            Reconstruction of the mythical Platinum God site
                        </h2>
                        <p class="text-white/70 text-md md:text-lg text-pretty font-medium lg:text-start text-center" data-aos="fade-up">
                            This website seeks to pay homage to the original site by trying to bring a fresh stylistic
                            perspective with a more modern approach. It is still under construction.
                        </p>
                    </div>
                </div>
                <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover shadow-sm shadow-white"
                    src="../assets/about.webp" alt="about Us image" />
            </article>
            <section
                class="w-full justify-around items-center gap-12 sm:gap-6 grid md:grid-cols-2 grid-cols-1 mt-24 px-4" data-aos="zoom-in">
                <article
                    class="flex flex-col gap-y-8 justify-center text-pretty w-full p-4 bg-glass rounded-lg hover:shadow-md hover:shadow-white hover:scale-105" data-aos="fade-right">
                    <h4 class="mt-4 text-center text-xl font-extrabold text-white">Reimagining <span
                            class="italic text-wrap text-yellow-500/80 font-semibold hover:text-yellow-500">The
                            Binding of Isaac</span> Experience</h4>
                    <p class="text-white/80 text-balance text-base font-sans">
                        Our website is born out of a deep love for <span class="font-bold">The Binding of
                            Isaac</span>, a game that has captured the imagination of millions of players worldwide.
                        Inspired by the classic <span class="italic">Platinum God</span> page, we’ve taken it a step
                        further: offering a revamped, cleaner, and more modern experience tailored to today’s needs.
                    </p>
                </article>
                <article
                    class="flex flex-col gap-y-8 justify-center text-pretty w-full p-4 bg-glass rounded-lg hover:shadow-md hover:shadow-white hover:scale-105" data-aos="fade-left">
                    <h4 class="mt-4 text-center text-xl font-extrabold text-white">Minimalism for Isaac Fans</h4>
                    <p class="text-white/80 text-balance text-base font-sans">
                        We understand the Isaac community is diverse: from seasoned speedrunners to newcomers
                        exploring the basement for the first time. That’s why we designed a minimalist interface to
                        help you find exactly what you need—items, synergies, secrets, and more—all presented in an
                        intuitive and elegant design.
                    </p>
                </article>
                <article
                    class="flex flex-col gap-y-8 justify-center text-pretty w-full p-4 bg-glass rounded-lg shadow-md hover:shadow-lg hover:shadow-white hover:scale-105" data-aos="fade-up">
                    <h4 class="mt-4 text-center text-xl font-extrabold text-white">Your Personal Isaac Assistant
                    </h4>
                    <p class="text-white/80 text-balance text-base font-sans">
                        Ever wondered what synergy would perfect your run or how to beat that tough boss? On our
                        site, you’ll find more than just information—you can interact with a <span
                            class="font-bold">specialized AI assistant</span> for <span class="italic">The Binding
                            of Isaac</span>. Chat with it, get real-time answers to your questions, and take your
                        gameplay to the next level.
                    </p>
                </article>
                <article
                    class="flex flex-col gap-y-8 justify-center text-pretty w-full p-4 bg-glass rounded-lg shadow-md hover:shadow-lg hover:shadow-white hover:scale-105" data-aos="fade-up">
                    <h4 class="mt-4 text-center text-xl font-extrabold text-white">A Community-Driven Project</h4>
                    <p class="text-white/80 text-balance text-base font-sans text-center">
                        This project is made by fans, for fans, with the goal of bringing everything that makes
                        <span class="italic">The Binding of Isaac</span> special into one place. We are committed to
                        continuous improvement, adding new features, and listening to your suggestions to grow
                        alongside the community.
                    </p>
                </article>
            </section>
            <FixReporter />
        </div>
    </section>
</template>
<style scoped>
.bg-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
