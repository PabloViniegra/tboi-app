import { ref } from "vue";
import { useMutation } from "@tanstack/vue-query";
import { postChatOpenai } from "../helpers/chat-openai";
import type { ChatbotResponse, ChatRequest } from "../interfaces/Chatbot";


export const useChatbot = () => {
    const messages = ref<ChatRequest["messages"]>([]);
    const userInput = ref<string>("");
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const mutation = useMutation<ChatbotResponse, Error, string>({
        mutationFn: async (newMessage: string) => {
          const requestMessages = [...messages.value, { role: "user", content: newMessage }];
          return await postChatOpenai(requestMessages);
        },
        onMutate: () => {
          isLoading.value = true;
          error.value = null;
        },
        onSuccess: (response: any) => {
          messages.value.push({ role: "assistant", content: response.content });
          isLoading.value = false;
        },
        onError: (mutationError: any) => {
          error.value = mutationError.message || "Error al conectar con el chatbot.";
          isLoading.value = false;
        },
      });

      const sendUserMessage = (message: string) => {
        if (!message.trim()) return;
        messages.value.push({ role: "user", content: message });
        mutation.mutate(message);
        userInput.value = "";
      };

      return {
        messages,
        userInput,
        isLoading,
        error,
        sendUserMessage,
      };
}
