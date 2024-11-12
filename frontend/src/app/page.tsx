'use client'

import { useState } from "react";
import { translateText } from "./utils/translate";
import ChatWindow from "./components/chatWindow";
import { UserType } from "./utils/types";


export default function Home() {
  const [senderLanguage, setSenderLanguage] = useState<string>("en");
  const [senderMessage, setSenderMessage] = useState<string>("");
  const [senderConversations, setSenderConversations] = useState<string[]>([]);

  const [recipientLanguage, setRecipientLanguage] = useState<string>("en");
  const [recipientMessage, setRecipientMessage] = useState<string>("");
  const [recipientConversations, setRecipientConversations] = useState<string[]>([]);

  // Handle message submission, translation, and conversation updates
  const handleSubmitMessage = async (message: string, type: UserType) => {
    const senderLang = type === "sender" ? senderLanguage : recipientLanguage;
    const recipientLang = type === "sender" ? recipientLanguage : senderLanguage;
    const setRecipientConvo = type === "sender" ? setRecipientConversations : setSenderConversations;
    const setSenderConvo = type === "sender" ? setSenderConversations : setRecipientConversations;

    setSenderConvo((prev) => [...prev, message]); // Add original message to sender's conversation

    // Translate message if needed and add to recipient's conversation
    const finalMessage = senderLang !== recipientLang ? await translateText(message, recipientLang) : message;
    setRecipientConvo((prev) => [...prev, finalMessage]);
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
        onSubmitMessage={(message) => handleSubmitMessage(message, "sender")}
      />
      <ChatWindow
        type="recipient"
        language={recipientLanguage}
        setLanguage={setRecipientLanguage}
        message={recipientMessage}
        setMessage={setRecipientMessage}
        conversations={recipientConversations}
        onSubmitMessage={(message) => handleSubmitMessage(message, "recipient")}
      />
    </div>
  );
}
