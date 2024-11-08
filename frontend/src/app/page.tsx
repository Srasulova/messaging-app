'use client'

import { ChangeEvent, useState } from "react";
import Conversation from "./components/conversation";
import InputText from "./components/form";
import LanguageSelection from "./components/languageSelection";

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
  const [senderMessage, setSenderMessage] = useState<string>("");  // For sender's message
  const [recipientMessage, setRecipientMessage] = useState<string>(""); // For recipient's message
  const [senderConversations, setSenderConversations] = useState<string[]>([]);  // For sender conversation
  const [recipientConversations, setRecipientConversations] = useState<string[]>([]);  // For recipient conversation

  // Separate language states for sender and recipient
  const [senderLanguage, setSenderLanguage] = useState<string>("en");  // For sender's language selection
  const [recipientLanguage, setRecipientLanguage] = useState<string>("en");  // For recipient's language selection


  function decodeHtmlEntities(text: string): string {
    const parser = new DOMParser();
    const decodedText = parser.parseFromString(`<!doctype html><body>${text}`, "text/html").body.textContent;
    return decodedText || "";
  }


  const translateText = async (text: string, targetLanguage: string) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
    const url = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_URL;

    const response = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    });

    if (!response.ok) {
      throw new Error("Translation API request failed");
    }

    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    return decodeHtmlEntities(translatedText);
  };

  function handleSenderMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setSenderMessage(e.target.value);  // Update sender's message
  }

  function handleRecipientMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setRecipientMessage(e.target.value);  // Update recipient's message
  }

  const handleSenderSubmit = async () => {
    // Add the sender's message to the sender's conversation
    setSenderConversations([...senderConversations, senderMessage]);

    // Check if the sender's and recipient's languages are different before translating
    if (senderLanguage !== recipientLanguage) {
      try {
        const translatedMessage = await translateText(senderMessage, recipientLanguage);
        setRecipientConversations([...recipientConversations, translatedMessage]);
      } catch (error) {
        console.error("Translation failed:", error);
      }
    } else {
      // If the languages are the same, add the original message to the recipient's conversation
      setRecipientConversations([...recipientConversations, senderMessage]);
    }

    setSenderMessage("");  // Clear sender's input after submission
  };

  const handleRecipientSubmit = async () => {
    // Add the recipient's message to the recipient's conversation
    setRecipientConversations([...recipientConversations, recipientMessage]);

    // Check if the recipient's and sender's languages are different before translating
    if (recipientLanguage !== senderLanguage) {
      try {
        const translatedMessage = await translateText(recipientMessage, senderLanguage);
        setSenderConversations([...senderConversations, translatedMessage]);
      } catch (error) {
        console.error("Translation failed:", error);
      }
    } else {
      // If the languages are the same, add the original message to the sender's conversation
      setSenderConversations([...senderConversations, recipientMessage]);
    }

    setRecipientMessage("");  // Clear recipient's input after submission
  };


  function handleSenderLanguageSelectionSubmit(languageCode: string) {
    setSenderLanguage(languageCode);  // Update sender's language
  }

  function handleRecipientLanguageSelectionSubmit(languageCode: string) {
    setRecipientLanguage(languageCode);  // Update recipient's language
  }

  return (
    <div className="flex space-x-8 p-4">
      {/* Sender Conversation Window */}
      <div className="flex flex-col w-1/2 space-y-4 p-4 border border-gray-200 rounded-md shadow-md">
        <LanguageSelection
          selectedLanguage={senderLanguage}
          handleLanguageSelectionSubmit={handleSenderLanguageSelectionSubmit}
        />
        <Conversation messages={senderConversations} />
        <InputText
          message={senderMessage}
          handleTextareaChange={handleSenderMessageChange}
          handleSubmit={handleSenderSubmit}

        />
      </div>

      {/* Recipient Conversation Window */}
      <div className="flex flex-col w-1/2 space-y-4 p-4 border border-gray-200 rounded-md shadow-md">
        <LanguageSelection
          selectedLanguage={recipientLanguage}
          handleLanguageSelectionSubmit={handleRecipientLanguageSelectionSubmit}
        />
        <Conversation messages={recipientConversations} />
        <InputText
          message={recipientMessage}
          handleTextareaChange={handleRecipientMessageChange}
          handleSubmit={handleRecipientSubmit}

        />
      </div>
    </div>
  );
}
