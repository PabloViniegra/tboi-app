export interface ChatbotResponse {
    role: string
    content: string
  }


  export interface ChatRequest {
    messages: { role: string; content: string }[];
  }
