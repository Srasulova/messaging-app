import { useState } from "react";
import Image from "next/image";

const contactsData = [
    { id: 1, name: "Michael Foster", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" },
    { id: 2, name: "Johanna Doe", image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    // More contacts...
];

export default function Contacts() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter contacts based on search query
    const filteredContacts = contactsData.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white h-full overflow-auto p-4 border border-gray-200 rounded-md shadow-md">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-xl font-semibold tracking-tight text-gray-900">Contacts</h2>
                </div>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-4 w-full p-2 border border-cyan-300 rounded-full"
                />

                <ul role="list" className="mt-8 space-y-6">
                    {filteredContacts.map(contact => (
                        <li key={contact.id} className="flex space-x-2 items-center">
                            <Image className="size-12 rounded-full" src={contact.image} alt="" width={50} height={50} />
                            <h3 className="text-base font-medium text-gray-900">{contact.name}</h3>
                        </li>
                    ))}
                    {filteredContacts.length === 0 && (
                        <p className="text-gray-500">No contacts found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
