'use client'

import { useState } from "react";
import { translateText } from "./utils/translate";
import ChatWindow from "./components/chatWindow";
import { UserType, Message, Contact } from "./utils/types";
import Contacts from "./components/contacts";

export default function Home() {
  const [senderLanguage, setSenderLanguage] = useState<string>("en");
  const [senderMessage, setSenderMessage] = useState<string>("");
  const [senderConversations, setSenderConversations] = useState<Message[]>([]);

  const [recipientLanguage, setRecipientLanguage] = useState<string>("en");
  const [recipientMessage, setRecipientMessage] = useState<string>("");
  const [recipientConversations, setRecipientConversations] = useState<Message[]>([]);


  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);


  // Handle contact selection
  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact); // Update the selected contact

    // Clear conversations and reset messages for the new contact
    setSenderConversations([]);
    setRecipientConversations([]);
    setSenderMessage("");
    setRecipientMessage("");

    // Reset languages to default ("en")
    setSenderLanguage("en");
    setRecipientLanguage("en");
  };

  // Handle message submission, translation, and conversation updates
  const handleSubmitMessage = async (message: string, type: UserType) => {
    const senderLang = type === "sender" ? senderLanguage : recipientLanguage;
    const recipientLang = type === "sender" ? recipientLanguage : senderLanguage;

    // Construct the sender's message object
    const senderMessageObj: Message = { text: message, sender: type };
    if (type === "sender") {
      setSenderConversations((prev) => [...prev, senderMessageObj]);
    } else {
      setRecipientConversations((prev) => [...prev, senderMessageObj]);
    }

    // Translate message if needed and add to recipient's conversation
    const finalMessage = senderLang !== recipientLang ? await translateText(message, recipientLang) : message;
    const recipientMessageObj: Message = { text: finalMessage, sender: type };
    if (type === "sender") {
      setRecipientConversations((prev) => [...prev, recipientMessageObj]);
    } else {
      setSenderConversations((prev) => [...prev, recipientMessageObj]);
    }
  };


  return (<>
    <div className="flex h-svh">
      <div className="w-1/5 max-w-xs p-4 min-w-fit">
        <Contacts onSelectContact={handleSelectContact} selectedContact={selectedContact} />
      </div>

      <div className="w-full md:flex-row md:space-x-8 md:space-y-0 p-4 flex flex-col space-y-8">
        <ChatWindow
          type="sender"
          language={senderLanguage}
          setLanguage={setSenderLanguage}
          message={senderMessage}
          setMessage={setSenderMessage}
          conversations={senderConversations}
          onSubmitMessage={(message) => handleSubmitMessage(message, "sender")}
          selectedContact="Me" // Static for sender chat
        />
        <ChatWindow
          type="recipient"
          language={recipientLanguage}
          setLanguage={setRecipientLanguage}
          message={recipientMessage}
          setMessage={setRecipientMessage}
          conversations={recipientConversations}
          onSubmitMessage={(message) => handleSubmitMessage(message, "recipient")}
          selectedContact={selectedContact?.name || "Recipient"} // Dynamic for recipient chat
        />
      </div>
    </div>

  </>

  );
}
