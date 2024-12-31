import { defineStore } from "pinia";
import { ref } from "vue";
import OpenAI from "openai";

export const useChatBotStore = defineStore("chatbot", () => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_OPEN_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const conversationContext = ref<Array<{ inputText: string; responseText: string }>>([]);
  const currentMessages = ref<Array<{ role: "user" | "assistant" | "system"; content: string }>>([
    {
      role: "system",
      content:
        'Soy un asistente especializado en responder preguntas relacionadas exclusivamente con el videojuego "The Binding of Isaac: Repentance". Mis respuestas serán claras, concisas y enfocadas en proporcionar información útil a los jugadores sobre mecánicas, objetos, enemigos, secretos, personajes y cualquier otro aspecto del juego. Respondo siempre con cortesía, sin extenderme demasiado, para evitar abrumar al usuario.',
    },
  ]);
  const isLoading = ref(false);
  const isError = ref(false);
  const errorMessage = ref<string | null>(null);

  const generateResponse = async (message: string) => {
    try {
      isLoading.value = true;
      isError.value = false;
      errorMessage.value = null;

      currentMessages.value.push({ role: "user", content: message });

      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: currentMessages.value,
      });

      const responseText = result.choices[0]?.message?.content || "No response";

      conversationContext.value.push({ inputText: message, responseText });
      currentMessages.value.push({ role: "assistant", content: responseText });
    } catch (error) {
      console.error("Error generating response:", error);
      isError.value = true;
      errorMessage.value = (error as Error).message || "Unknown error occurred.";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    conversationContext,
    currentMessages,
    isLoading,
    isError,
    errorMessage,
    generateResponse
  };
});
