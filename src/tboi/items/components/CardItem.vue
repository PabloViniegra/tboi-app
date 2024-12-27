<script setup lang="ts">
import { Item } from "../interfaces/items";

interface Props {
  item: Item;
}

const props = defineProps<Props>();
const emit = defineEmits(["open-modal"]);
</script>
<template>
  <article class="flex flex-col gap-y-3 justify-center items-center hover:cursor-pointer" @click="emit('open-modal', props.item)">
    <img
      :src="props.item.icon"
      :alt="props.item.title"
      class="rounded-full shadow-lg size-[4.5rem] object-cover"
      crossorigin="anonymous"
    />
    <h4 class="font-semibold text-md text-sky-300/80 text-center">
      {{ props.item.title }}
    </h4>
  </article>
</template>
