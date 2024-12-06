import { ConversationProps } from "../utils/types";

export default function Conversation({ messages, type }: ConversationProps) {
    return (
        <div className="w-full h-full mb-10 p-4 overflow-auto space-y-2 flex flex-col flex-grow">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`flex mb-2 ${msg.sender === type ? "justify-end" : "justify-start"}`}
                >
                    <p
                        className={`py-2 px-3 max-w-[70%] rounded-lg text-zinc-700
              ${msg.sender === type ? "bg-green-100" : "bg-yellow-50"}
            `}
                    >
                        {msg.text}
                    </p>
                </div>
            ))}
        </div>
    );
}
