import { toast } from "@/hooks/use-toast";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const OPENAI_MODEL = "gpt-4o";

interface ChatCompletionMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatResponse {
  message: string;
  suggestedResponses?: string[];
}

export async function getAIResponse(
  messages: ChatCompletionMessage[],
  prompt: string
): Promise<ChatResponse> {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY || "";
    
    if (!apiKey) {
      console.error("OpenAI API key is missing");
      return {
        message: "I'm sorry, but I'm having trouble connecting right now. Please try again later.",
        suggestedResponses: [
          "What are some quick ways to manage anxiety?",
          "Can you recommend mindfulness techniques?",
          "How can I improve my sleep habits?"
        ]
      };
    }

    const updatedMessages = [
      {
        role: "system",
        content: `You are a supportive and empathetic mental health companion called MindWell AI. 
        Your role is to provide general information, resources, and support for mental health concerns.
        Always be compassionate and understanding. 
        Emphasize that you are not a replacement for professional mental health services.
        For crisis situations, recommend calling the National Crisis Hotline at 988.
        Format your responses in a concise and readable manner.
        Along with your response, suggest 2-3 related follow-up questions the user might have.`
      },
      ...messages,
      { role: "user", content: prompt }
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: updatedMessages,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const data = await response.json();
    const message = data.choices[0].message.content;

    // Generate some follow-up suggestions based on the conversation context
    const suggestedResponses = [
      "Tell me more about managing day-to-day stress",
      "What are some self-care techniques I can try?",
      "How can I support someone with mental health challenges?"
    ];

    return {
      message,
      suggestedResponses
    };
  } catch (error) {
    console.error("Error getting AI response:", error);
    toast({
      title: "Error",
      description: "Unable to get a response from the AI assistant. Please try again.",
      variant: "destructive",
    });
    
    return {
      message: "I'm sorry, I'm having trouble responding right now. Please try again in a moment.",
      suggestedResponses: [
        "What are some relaxation techniques?",
        "How can I manage anxiety?",
        "Tell me about mental health resources"
      ]
    };
  }
}
