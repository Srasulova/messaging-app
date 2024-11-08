'use client'

import { ChangeEvent, useState } from "react";
import Conversation from "./components/conversation";
import InputText from "./components/form";
import LanguageSelection from "./components/languageSelection";

export type InputTextProps = {
  message: string,
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  handleSubmit: () => void
  handleTranslate: () => void
}

export type ConversationProps = {
  messages: string[]
}

export type LanguageSelectionProps = {
  selectedLanguage: string
  handleLanguageSelectionSubmit: (languageCode: string) => void
}

export default function Home() {
  const [message, setMessage] = useState<string>("")
  const [conversations, setConversations] = useState<string[]>([])
  const [translatedText, setTranslatedText] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("")

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
    return data.data.translations[0].translatedText;
  };


  const handleTranslate = async () => {
    try {
      const result = await translateText(message, selectedLanguage);
      setTranslatedText([...translatedText, result]);
    } catch (error) {
      console.error("Translation failed:", error);
    }
  };


  function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  function handleSubmit() {
    setConversations([...conversations, message])
    setMessage("")
  }

  function handleLanguageSelectionSubmit(languageCode: string) {
    setSelectedLanguage(languageCode)
  }

  return (
    <div className="">
      <main className="">
        <LanguageSelection selectedLanguage={selectedLanguage} handleLanguageSelectionSubmit={handleLanguageSelectionSubmit} />
        <Conversation messages={conversations} />
        <Conversation messages={translatedText} />
        <InputText message={message} handleTextareaChange={handleTextareaChange} handleSubmit={handleSubmit} handleTranslate={handleTranslate} />
      </main>
    </div>
  );
}
