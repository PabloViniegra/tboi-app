<script setup lang="ts">
import RatingStar from "../../../shared/components/RatingStar.vue";
import { Item } from "../interfaces/items";

interface Props {
    item: Item | null;
    isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["close-modal"]);
</script>
<template>
    <div v-if="props.isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div class="card relative p-4 max-w-lg w-full h-auto text-white mx-4 sm:mx-auto">
            <button @click="$emit('close-modal')" class="absolute top-4 right-4 text-white text-2xl font-bold">
                &times;
            </button>
            <header class="flex flex-col items-center text-center mb-4">
                <img :src="props.item?.icon" alt="Icon" class="size-20 sm:size-28 rounded-full shadow-md mb-4" />
                <h2 class="text-xl sm:text-2xl font-extrabold">{{ props.item?.title }}</h2>
            </header>
            <main class="flex flex-col items-center gap-y-4">
                <div class="flex flex-col sm:flex-row justify-between w-full sm:w-3/4 gap-y-4 sm:gap-y-0">
                    <h5 v-if="props.item?.short_description"
                        class="text-sm sm:text-md font-medium text-gray-400 p-2 bg-transparent border border-gray-400 rounded-lg text-center hover:bg-white hover:text-black hover:border-transparent hover:font-normal hover:shadow-lg">
                        {{ props.item?.short_description }}
                    </h5>
                    <RatingStar v-if="props.item?.quality" :rating="props.item?.quality ?? 0" />
                </div>
                <p class="text-xs sm:text-sm text-gray-300 font-mono text-wrap mx-2 text-center">
                    {{ props.item?.description }}
                </p>
            </main>
            <footer class="text-center mt-4">
                <button @click="$emit('close-modal')"
                    class="px-4 py-2 bg-sky-700/80 text-white rounded-md hover:bg-sky-500">
                    Close
                </button>
            </footer>
        </div>
    </div>
</template>
<style scoped>
.card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 2;
    box-shadow: 1px 1px 2px 1px #ddd;
}

@media (max-width: 640px) {
    .card {
        padding: 1rem;
        width: 100%;
    }

    .size-28 {
        width: 64px;
        height: 64px;
    }
}
</style>
