'use client'

import { ChangeEvent, useState } from "react";
import Conversation from "./components/conversation";
import InputText from "./components/form";

export type InputTextProps = {
  message: string,
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  handleSubmit: () => void
  handleTranslate: () => void
}

export type ConversationProps = {
  messages: string[]
}

export default function Home() {
  const [message, setMessage] = useState<string>("")
  const [conversations, setConversations] = useState<string[]>([])
  const [translatedText, setTranslatedText] = useState<string[]>([]);

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
      const result = await translateText(message, "az"); // Example target language: Russian ("ru")
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

  return (
    <div className="">
      <main className="">
        <Conversation messages={conversations} />
        <Conversation messages={translatedText} />
        <InputText message={message} handleTextareaChange={handleTextareaChange} handleSubmit={handleSubmit} handleTranslate={handleTranslate} />
      </main>
    </div>
  );
}
