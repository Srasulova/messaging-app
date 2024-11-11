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
    setConversations,
    translateText,
    recipientLanguage,
    onSendMessage,
}: ChatWindowProps) {

    const handleLanguageChange = (newLanguage: string) => setLanguage(newLanguage);

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const handleSubmit = async () => {
        // Add the original message to the current conversation
        setConversations((prevMessages) => [...prevMessages, message]);

        // Check if translation is needed based on sender/recipient languages
        if (language !== recipientLanguage) {
            try {
                const translatedMessage = await translateText(message, recipientLanguage);
                onSendMessage(translatedMessage);  // Send translated message to recipient
            } catch (error) {
                console.error("Translation failed:", error);
            }
        } else {
            onSendMessage(message);  // Send original message if languages are the same
        }

        setMessage("");  // Clear input message
    };

    return (
        <div className="chat-window flex flex-col w-1/2 space-y-4 p-4 border border-gray-200 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">{type === "sender" ? "Sender" : "Recipient"} Chat</h2>

            <LanguageSelection
                selectedLanguage={language}
                handleLanguageSelectionSubmit={handleLanguageChange}
            />

            <Conversation messages={conversations} />

            <InputText
                message={message}
                handleTextareaChange={handleMessageChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}
