'use client'

import { ChangeEvent, useState } from "react";
import { translateText } from "./utils/translate";
import ChatWindow from "./components/chatWindow";


export type InputTextProps = {
  message: string;
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export type ConversationProps = {
  messages: string[];
};

export type LanguageSelectionProps = {
  selectedLanguage: string;
  handleLanguageSelectionSubmit: (languageCode: string) => void;
};

export default function Home() {
  const [senderLanguage, setSenderLanguage] = useState<string>("en");
  const [senderMessage, setSenderMessage] = useState<string>("");
  const [senderConversations, setSenderConversations] = useState<string[]>([]);

  const [recipientLanguage, setRecipientLanguage] = useState<string>("en");
  const [recipientMessage, setRecipientMessage] = useState<string>("");
  const [recipientConversations, setRecipientConversations] = useState<string[]>([]);

  // Handle sending message from sender to recipient
  const handleSendMessage = (message: string, type: "sender" | "recipient") => {
    if (type === "sender") {
      // Add translated message to recipient's chat window
      setRecipientConversations((prevMessages) => [...prevMessages, message]);
    } else {
      // Add response or message in recipient's chat window back to sender if needed
      setSenderConversations((prevMessages) => [...prevMessages, message]);
    }
  };

  return (
    <div className="flex space-x-8 p-4">
      <ChatWindow
        type="sender"
        language={senderLanguage}
        setLanguage={setSenderLanguage}
        message={senderMessage}
        setMessage={setSenderMessage}
        conversations={senderConversations}
        setConversations={setSenderConversations}
        translateText={translateText}
        recipientLanguage={recipientLanguage}
        onSendMessage={(message) => handleSendMessage(message, "sender")}
      />
      <ChatWindow
        type="recipient"
        language={recipientLanguage}
        setLanguage={setRecipientLanguage}
        message={recipientMessage}
        setMessage={setRecipientMessage}
        conversations={recipientConversations}
        setConversations={setRecipientConversations}
        translateText={translateText}
        recipientLanguage={senderLanguage}
        onSendMessage={(message) => handleSendMessage(message, "recipient")}
      />
    </div>
  );
}
