import { defineStore } from "pinia";
import { useChatbot } from "../composables/useChatbot";

export const useChatbotStore = defineStore('chatbot', () => {
    const { messages, userInput, isLoading, error, sendUserMessage } = useChatbot();

    return {
        messages,
        userInput,
        isLoading,
        error,
        sendUserMessage
    }
})
