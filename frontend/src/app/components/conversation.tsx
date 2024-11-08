import { ConversationProps } from "../page"

export default function Conversation({ messages }: ConversationProps) {
    return (
        <>
            <div className="w-full h-48 mb-10 p-4 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300" >
                {messages.map((msg, index) => (
                    <p key={index} className="mb-2 text-gray-800">{msg}</p>
                ))}
            </div>
        </>
    )
}