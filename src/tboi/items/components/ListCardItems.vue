<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import { useItemStore } from "../store/itemStore";
import CardItem from "./CardItem.vue";
import CustomLoader from "../../../shared/components/CustomLoader.vue";
import ItemModal from "./ItemModal.vue";
import { Item } from "../interfaces/items";
import { useToast } from "vue-toast-notification";

const selectedItem: Ref<Item | null> = ref(null);
const isModalOpen: Ref<boolean> = ref(false);
const itemStore = useItemStore();
const toaster = useToast();

const layoutOptions = ref([
  { name: "Default", columns: "grid-cols-2 sm:grid-cols-4", icon: "grid-view" },
  { name: "Wide", columns: "grid-cols-3 sm:grid-cols-6", icon: "wide-view" },
  { name: "Single", columns: "grid-cols-1", icon: "single-view" },
]);
const selectedLayout = ref(layoutOptions.value[0]);

const openModal = (item: Item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

watch(
  () => itemStore.isError,
  (newIsError) => {
    if (newIsError) {
      toaster.error(`An error has occurred: ${itemStore.error}`);
    }
  }
);
</script>

<template>
  <div class="flex justify-center mt-16 items-center flex-row gap-x-8">
    <div class="relative w-2/3">
      <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.9 14.32a8 8 0 111.41-1.41l4.28 4.27a1 1 0 11-1.42 1.42l-4.27-4.28zm-5.9-6.32a6 6 0 1012 0 6 6 0 00-12 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <input
        v-model="itemStore.rawQuery"
        type="text"
        placeholder="Search for an item..."
        class="block w-full p-3 pl-10 rounded-md border-2 border-zinc-200/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
      />
      <button
        v-if="itemStore.rawQuery"
        @click="itemStore.clearSearch"
        class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="flex justify-center mt-4 space-x-3">
      <button
        v-for="layout in layoutOptions"
        :key="layout.name"
        :class="[
          'p-2 rounded-lg transition hover:bg-gray-700 size-9 flex justify-center items-center',
          selectedLayout.name === layout.name
            ? 'bg-blue-800 text-white'
            : 'bg-gray-700 text-zinc-400',
        ]"
        @click="selectedLayout = layout"
      >
        <svg
          v-if="layout.icon === 'grid-view'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
        </svg>
        <svg
          v-else-if="layout.icon === 'wide-view'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 3h4v18H5zM11 3h4v18h-4zM17 3h4v18h-4z" />
        </svg>
        <svg
          v-else-if="layout.icon === 'single-view'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 5h16v14H4z" />
        </svg>
      </button>
    </div>
  </div>

  <section>
    <span
      v-if="
        itemStore.isPending ||
        (itemStore.isFetching && !itemStore.isFetchingNextPage)
      "
      class="flex justify-center mt-[5rem]"
    >
      <CustomLoader
        :loaderClass="'size-16 text-gray-200 animate-spin text-gray-600 fill-yellow-400'"
      />
    </span>
    <div
      v-else-if="itemStore.items"
      :class="`grid ${selectedLayout.columns} gap-7 mt-14 justify-center mx-4`"
    >
      <CardItem
        v-for="item in itemStore.items"
        :key="item.id"
        :item="item"
        @open-modal="openModal"
      />
    </div>
    <footer class="flex flex-row justify-center mt-16">
      <button
        @click="itemStore.loadMore"
        :disabled="!itemStore.hasNextPage || itemStore.isFetchingNextPage"
        class="rounded-full border-spacing-1 border-black bg-cyan-400/50 text-white font-semibold py-2 px-3 shadow-md hover:bg-sky-700"
      >
        <span v-if="itemStore.isFetchingNextPage">Loading more ...</span>
        <span v-else-if="itemStore.hasNextPage">Load More</span>
        <span v-else>Nothing more to load</span>
      </button>
    </footer>
  </section>
  <ItemModal
    :item="selectedItem"
    :isOpen="isModalOpen"
    @close-modal="closeModal"
  />
</template>
