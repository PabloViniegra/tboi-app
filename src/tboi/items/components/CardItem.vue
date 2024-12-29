<script setup lang="ts">
import { Item } from "../interfaces/items";

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const emit = defineEmits(["open-modal"]);
</script>
<template>
  <article
    class="flex flex-col gap-y-3 justify-center items-center p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-out transform hover:cursor-pointer hover:scale-105"
    @click="emit('open-modal', props.item)"
  >
    <img
      :src="props.item.icon"
      :alt="props.item.title"
      class="rounded-full shadow-lg size-20 object-cover"
      crossorigin="anonymous"
    />
    <h4 class="font-semibold text-lg text-white text-center">
      {{ props.item.title }}
    </h4>
  </article>
</template>
