import { useState, useRef, useEffect } from "react";
import ChatMessage, { MessageType } from "@/components/ChatMessage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getAIResponse } from "@/lib/openai";

interface Message {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
}

const AISupport = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello, I'm MindWell AI, your mental health companion. How are you feeling today?",
      type: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedResponses, setSuggestedResponses] = useState<string[]>([
    "I've been feeling anxious lately",
    "I want to learn about depression",
    "How can I improve my mental health?",
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    // Removed auto-scrolling behavior
    // chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (content: string = inputMessage) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Convert messages to the format expected by the API
      const messageHistory = messages.map((msg) => ({
        role: msg.type === "ai" ? "assistant" as const : "user" as const,
        content: msg.content,
      }));

      const response = await getAIResponse(messageHistory, content);

      // Add AI response message
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.message,
        type: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

      // Update suggested responses if available
      if (response.suggestedResponses && response.suggestedResponses.length > 0) {
        setSuggestedResponses(response.suggestedResponses);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedResponseClick = (response: string) => {
    handleSendMessage(response);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-light/10 to-accent-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-500 mb-4">AI Mental Health Companion</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-3">
            Our voice-enabled AI bot offers personalized support with optional emotional analysis through facial recognition.
            Receive timely reminders for self-care, customized advice, and access to stress-relief activities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
              <i className="fas fa-microphone text-primary mr-2"></i>
              <span className="text-sm text-neutral-500">Voice Enabled</span>
            </div>
            <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
              <i className="fas fa-video text-primary mr-2"></i>
              <span className="text-sm text-neutral-500">Emotion Detection</span>
            </div>
            <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
              <i className="fas fa-bell text-primary mr-2"></i>
              <span className="text-sm text-neutral-500">Smart Reminders</span>
            </div>
            <div className="bg-neutral-100 rounded-full px-4 py-2 flex items-center">
              <i className="fas fa-clipboard-list text-primary mr-2"></i>
              <span className="text-sm text-neutral-500">Treatment Suggestions</span>
            </div>
          </div>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Note: This AI assistant is not a replacement for professional mental health services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col h-[600px]">
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-white"></i>
                </div>
                <div>
                  <h3 className="font-medium">MindWell AI Assistant</h3>
                  <p className="text-xs text-primary-light">Online • Here to support you</p>
                </div>
              </div>
              <div className="ml-auto">
                <button className="p-2 hover:bg-white/10 rounded-full transition" title="Chat settings">
                  <i className="fas fa-ellipsis-v text-white"></i>
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 bg-neutral-100" id="chat-messages">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.content}
                  type={message.type}
                  timestamp={message.timestamp}
                />
              ))}

              {/* Suggestion Chips (only show after AI message and when not loading) */}
              {messages.length > 0 && messages[messages.length - 1].type === "ai" && !isLoading && suggestedResponses.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4 ml-10">
                  {suggestedResponses.map((suggestion, index) => (
                    <button
                      key={index}
                      className="bg-white text-primary border border-primary rounded-full px-4 py-2 text-sm hover:bg-primary hover:text-white transition duration-300"
                      onClick={() => handleSuggestedResponseClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex mb-4 ml-10">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="border-t border-neutral-300 p-4 bg-white">
              <div className="flex items-center">
                <button className="p-2 text-neutral-400 hover:text-primary transition">
                  <i className="fas fa-paperclip"></i>
                </button>
                <Input
                  type="text"
                  placeholder="Type your message here..."
                  className="flex-1 border border-neutral-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 mx-2"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isLoading) {
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  disabled={isLoading || !inputMessage.trim()}
                  onClick={() => handleSendMessage()}
                  className="bg-primary hover:bg-primary-dark text-white rounded-full w-10 h-10 flex items-center justify-center transition"
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
              <div className="text-xs text-neutral-400 mt-2 text-center">
                <p>
                  This AI assistant is not a replacement for professional mental health services. If you're in crisis,
                  please call the National Crisis Hotline at 988.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISupport;
