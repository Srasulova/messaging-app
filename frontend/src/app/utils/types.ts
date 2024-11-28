import { ChangeEvent } from "react";

export type UserType = "sender" | "recipient";

export type Message = {
  text: string;
  sender: UserType;
};

export type Contact = {
  id: number;
  name: string;
  image: string | null;
};

export type ChatWindowProps = {
  type: UserType;
  language: string;
  setLanguage: (language: string) => void;
  message: string;
  setMessage: (message: string) => void;
  conversations: Message[];
  onSubmitMessage: (message: string) => void;
  selectedContact: string | null;
};

export type InputTextProps = {
  message: string;
  handleTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export type ConversationProps = {
  messages: Message[];
  type: UserType;
};

export type LanguageSelectionProps = {
  selectedLanguage: string;
  handleLanguageSelectionSubmit: (languageCode: string) => void;
};

export type NewContactFormProps = {
  onAddContact: (contact: { name: string; image: string }) => void;
  onClose: () => void;
};

export type ContactsProps = {
  onSelectContact: (contact: Contact) => void;
};
