<script setup lang="ts">
import { ref, watch } from "vue";
import {  useChatbotStore } from "../stores/chatbotStore";
import { useToast } from "vue-toast-notification";

const userInput = ref("");

const chatbotStore = useChatbotStore();
const toaster = useToast();

const sendMessage = async () => {
  if (!userInput.value.trim()) return;
  await chatbotStore.sendUserMessage(userInput.value);
  userInput.value = "";
};

watch(() => chatbotStore.error, (newValue) => {
  if (newValue && chatbotStore.error) {
    toaster.error(chatbotStore.error);
  }
});
</script>

<template>
    <section class="flex flex-col items-center justify-center mt-4 px-2 sm:px-6">
      <div class="chatbot-container bg-gray-800 text-white rounded-lg shadow-lg p-4 w-1/3 md:w-3/6">
        <h2 class="text-neutral-200 text-lg md:text-xl font-bold mb-4 text-center font-sans flex items-center justify-center">
          <img class="rounded-full w-10 mr-3 shadow-sm" src="../../../shared/assets/assistant.webp" alt="Isaac assistant">
          Isaac's Assistant
        </h2>
        <div class="chat-messages max-h-96 overflow-y-auto border rounded p-4 bg-gray-900 space-y-4">
          <div
            v-for="(context, index) in chatbotStore.messages"
            :key="index"
            class="w-full"
          >
            <div class="mb-2" v-if="context.role === 'user'">
              <div class="bg-blue-500 text-white p-3 rounded-lg text-xs sm:text-sm w-full text-pretty">
                <p class="font-semibold">User:</p>
                <p>{{ context.content }}</p>
              </div>
            </div>
            <div class="mb-2" v-else-if="context.role === 'assistant'">
              <div class="bg-gray-700 text-white p-3 rounded-lg text-xs sm:text-sm w-full text-pretty">
                <p class="font-semibold">Assistant:</p>
                <p>{{ context.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <section class="flex flex-row w-4/5 justify-center mt-4">
          <div class="input-container flex w-full">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask me anything about The Binding of Isaac..."
              class="flex-grow p-3 rounded-l-lg border-0 text-gray-800 focus:ring-2 focus:ring-blue-500 mr-1"
              :disabled="chatbotStore.isLoading"
              @keyup.enter="sendMessage"
            />
            <button
              @click="sendMessage"
              :disabled="!userInput.trim() || chatbotStore.isLoading"
              class="p-2 rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
            >
              <div role="status" v-if="chatbotStore.isLoading" class="flex items-center justify-center">
                <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <div v-else>Send</div>
            </button>
          </div>
        </section>
      </div>
    </section>
  </template>
<style scoped>
.chatbot-container {
  font-family: 'Geist Mono', sans-serif;
  width: 100%;
}

.chat-messages {
  height: 60vh;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding: 16px;
}

.input-container {
  width: 100%;
}

input {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .chatbot-container {
    width: 100%;
    max-width: 100%;
  }

  input {
    font-size: 0.875rem;
  }

  button {
    font-size: 0.875rem;
  }
}

</style>
