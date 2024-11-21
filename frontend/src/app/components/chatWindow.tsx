import { ChangeEvent } from "react";
import LanguageSelection from "./languageSelection";
import Conversation from "./conversation";
import InputText from "./form";
import { ChatWindowProps } from "../utils/types";

export default function ChatWindow({
    type,
    language,
    setLanguage,
    message,
    setMessage,
    conversations,
    onSubmitMessage,
}: ChatWindowProps) {

    const handleLanguageChange = (newLanguage: string) => setLanguage(newLanguage);

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const handleSubmit = () => {
        onSubmitMessage(message); // Pass message up to parent for processing
        setMessage("");  // Clear input message
    };

    return (
        <div className="relative flex flex-col w-full h-full space-y-4 p-4 border border-gray-200 rounded-md shadow-md">
            {/* Patterned Background */}
            <div className="absolute inset-0 pattern-boxes pattern-blue-100 pattern-bg-white 
  pattern-size-2 pattern-opacity-40 z-0 rounded-md"></div>

            {/* Chat Window Content */}
            <div className="relative z-10 flex flex-col flex-grow space-y-4">
                <h2 className="text-lg font-semibold">{type === "sender" ? "Sender" : "Recipient"} Chat</h2>

                <LanguageSelection
                    selectedLanguage={language}
                    handleLanguageSelectionSubmit={handleLanguageChange}
                />

                <Conversation messages={conversations} type={type} />

                <InputText
                    message={message}
                    handleTextareaChange={handleMessageChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
