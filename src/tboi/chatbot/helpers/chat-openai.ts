import tboiApi from "../../items/api/tboiApi";
import type { ChatbotResponse } from "../interfaces/Chatbot";
import type { ChatRequest } from "../interfaces/Chatbot";

export const postChatOpenai = async (
  messages: ChatRequest["messages"]
): Promise<ChatbotResponse> => {
  const { data } = (await tboiApi.post<ChatbotResponse>("/chat", {
    messages
  }));
  return data;
};
