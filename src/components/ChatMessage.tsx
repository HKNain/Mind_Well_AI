import { useState, useEffect } from "react";

export type MessageType = "ai" | "user";

interface ChatMessageProps {
  message: string;
  type: MessageType;
  timestamp: Date;
}

const ChatMessage = ({ message, type, timestamp }: ChatMessageProps) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const formatTime = () => {
      return timestamp.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    };
    setFormattedTime(formatTime());
  }, [timestamp]);

  if (type === "user") {
    return (
      <div className="flex mb-4 justify-end" data-message-from="user">
        <div className="bg-primary-light p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
          <p className="text-white">{message}</p>
          <span className="text-xs text-white/70 mt-1 block">{formattedTime}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center ml-2 flex-shrink-0">
          <i className="fas fa-user text-white text-xs"></i>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mb-4" data-message-from="ai">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
        <i className="fas fa-robot text-white text-xs"></i>
      </div>
      <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
        <p className="text-neutral-500">{message}</p>
        <span className="text-xs text-neutral-400 mt-1 block">{formattedTime}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
