'use client'

import { ChangeEvent, useState } from "react";
import Conversation from "./components/conversation";
import InputText from "./components/form";

export type InputTextProps = {
  message: string,
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  handleSubmit: () => void
}

export type ConversationProps = {
  messages: string[]
}

export default function Home() {
  const [message, setMessage] = useState<string>("")
  const [conversations, setConversations] = useState<string[]>([])

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
        <InputText message={message} handleTextareaChange={handleTextareaChange} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
}
