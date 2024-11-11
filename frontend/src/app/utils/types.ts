// src/types.ts

import { ChangeEvent } from "react";

export type ChatWindowProps = {
  type: "sender" | "recipient";
  language: string;
  setLanguage: (language: string) => void;
  message: string;
  setMessage: (message: string) => void;
  conversations: string[];
  setConversations: React.Dispatch<React.SetStateAction<string[]>>;
  translateText: (text: string, targetLanguage: string) => Promise<string>;
  recipientLanguage: string;
  onSendMessage: (text: string) => void;
};

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
