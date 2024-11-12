import { ChangeEvent } from "react";

export type UserType = "sender" | "recipient";

export type ChatWindowProps = {
  type: UserType;
  language: string;
  setLanguage: (language: string) => void;
  message: string;
  setMessage: (message: string) => void;
  conversations: string[];
  onSubmitMessage: (message: string) => void; // Updated from onSendMessage
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
