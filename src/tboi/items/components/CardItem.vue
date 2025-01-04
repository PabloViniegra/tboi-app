<script setup lang="ts">
import { useToast } from "vue-toast-notification";
import { Item } from "../interfaces/items";

interface Props {
    item: Item;
}

const toaster = useToast();

const props = defineProps<Props>();
const emit = defineEmits(["open-modal"]);

const copyToClipboard = (event: Event) => {
    event.stopPropagation();
    const textToCopy = `${props.item.title}\n\n${props.item.description}`;
    navigator.clipboard.writeText(textToCopy);
    toaster.success("Copied to clipboard");
};
</script>
<template>
    <article
        class="flex flex-col gap-y-3 justify-center items-center p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-md transition-shadow duration-300 ease-out transform hover:cursor-pointer hover:bg-white/28 hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:backdrop-blur-[1.8px] hover:outline hover:outline-none hover:outline-white/80 hover:duration-500"
        @click="emit('open-modal', props.item)">
        <img :src="props.item.icon" :alt="props.item.title" class="rounded-full shadow-lg size-20 object-cover"
            crossorigin="anonymous" />
        <h4 class="font-semibold text-lg text-white text-center">
            {{ props.item.title }}
        </h4>
        <footer class="flex gap-2 w-full items-center justify-end">
            <span class="size-9 bg-white/20 p-2 rounded-full flex items-center justify-center hover:font-bold hover:bg-slate-400/50" @click="copyToClipboard">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-linecap="round" class="text-white/90" stroke-linejoin="round" width="24" height="24"
                    stroke-width="2">
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                </svg>
            </span>
        </footer>
    </article>
</template>
