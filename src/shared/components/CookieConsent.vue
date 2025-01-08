<script setup lang="ts">
import { useCookiesStore } from "../stores/cookiesStore";

const cookiesStore = useCookiesStore();
</script>
<template>
  <transition name="fade">
    <div
      v-if="cookiesStore.show"
      class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div
        class="bg-white bg-opacity-20 backdrop-blur-sm border border-white/30 rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md text-white"
      >
        <div class="mb-4 sm:mb-6 text-center">
          <h2 class="text-xl sm:text-2xl font-bold" id="cookie-consent-title">
            Manage Your Cookies
          </h2>
          <p class="text-xs sm:text-sm mt-2" id="cookie-consent-description">
            We use cookies to enhance your experience. Customize your
            preferences or accept all cookies to proceed.
          </p>
        </div>

        <div class="space-y-3 sm:space-y-4">
          <button
            @click="cookiesStore.acceptAllCookies"
            class="w-full bg-emerald-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-emerald-600"
          >
            Accept All Cookies
          </button>
          <button
            @click="cookiesStore.declineAllCookies"
            class="w-full bg-indigo-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-indigo-800"
          >
            Decline All Cookies
          </button>
          <button
            @click="cookiesStore.customizePreferences"
            class="w-full bg-indigo-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-indigo-600"
          >
            Customize Preferences
          </button>
        </div>

        <div
          v-if="cookiesStore.customize"
          class="mt-4 sm:mt-6 border-t border-white/40 pt-4 sm:pt-6"
        >
          <h3 class="text-lg font-semibold">Customize Preferences</h3>
          <div
            v-for="(option, index) in cookiesStore.options"
            :key="index"
            class="flex justify-between items-center mt-2 sm:mt-3"
          >
            <span class="text-white text-xs sm:text-sm">{{
              option.label
            }}</span>
            <input
              type="radio"
              :name="'cookie-preference'"
              v-model="cookiesStore.selectedOption"
              :value="option.label"
              class="h-4 w-4 sm:h-5 sm:w-5 focus:ring-emerald-500 border-gray-300 rounded"
            />
          </div>
          <button
            @click="cookiesStore.savePreferences"
            class="w-full mt-4 sm:mt-6 bg-indigo-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-indigo-600"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
