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
  <div
    v-if="props.isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
  >
    <div class="card relative p-6 max-w-lg w-2/4 h-auto text-white">
      <button
        @click="$emit('close-modal')"
        class="absolute top-4 right-4 text-white text-2xl font-bold"
      >
        &times;
      </button>
      <header class="flex flex-col items-center text-center mb-6">
        <img
          :src="props.item?.icon"
          alt="Icon"
          class="size-28 rounded-full shadow-md mb-4"
        />
        <h2 class="text-2xl font-extrabold">{{ props.item?.title }}</h2>
      </header>
      <main class="flex flex-col items-center gap-y-6">
        <div class="flex flex-row justify-between w-3/4">
          <h5
            class="text-md mb-2 font-medium text-gray-400 p-1 bg-transparent border border-gray-400 rounded-lg w-2/6 text-center hover:bg-white hover:text-black hover:border-transparent hover:font-normal hover:shadow-lg"
          >
            {{ props.item?.short_description }}
          </h5>
          <RatingStar :rating="props.item?.quality ?? 0" />
        </div>
        <p
          class="text-sm mb-4 text-gray-300 font-mono text-wrap mx-2 text-center"
        >
          {{ props.item?.description }}
        </p>
      </main>
      <div class="text-center mt-6">
        <button
          @click="$emit('close-modal')"
          class="px-6 py-2 bg-sky-700/80 text-white rounded-md hover:bg-sky-500"
        >
          Close
        </button>
      </div>
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
  padding: 1rem;
  max-width: 90%;
  margin: 0 auto;
}
</style>
