<script setup lang="ts">
import { ref, watch } from "vue";
import { OPTION_VALUES } from "../interfaces/options";

const isDropdownOpen = ref<boolean>(false);
const actualSortValue = ref<string>("");
const emit = defineEmits(["sort"]);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

watch(actualSortValue, (newSortValue) => {
  emit("sort", newSortValue);
});
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      id="dropdownDefaultButton"
      @click="toggleDropdown"
      class="text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-semibold rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button"
    >
      Sort by
      <svg
        class="w-2.5 h-2.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        id="dropdown"
        class="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-64 dark:bg-gray-800"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            v-for="option in OPTION_VALUES"
            :key="option.value"
            class="px-4 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-600 rounded transition flex items-center space-x-3 cursor-pointer"
          >
            <label class="flex items-center w-full cursor-pointer">
              <input
                type="radio"
                class="hidden"
                :value="option.value"
                :checked="actualSortValue === option.value"
                @change="actualSortValue = option.value"
              />
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full border-2 transition"
                :class="{
                  'border-indigo-500 bg-indigo-500':
                    actualSortValue === option.value,
                  'border-gray-400': actualSortValue !== option.value,
                }"
              >
                <span
                  v-if="actualSortValue === option.value"
                  class="block w-2.5 h-2.5 bg-white rounded-full"
                ></span>
              </div>
              <i
                :class="
                  option.icon +
                  ' text-indigo-500 dark:text-indigo-400 text-xl ml-3'
                "
              ></i>
              <span class="ml-2 font-medium text-gray-700 dark:text-gray-200">
                {{ option.label }}
              </span>
            </label>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
