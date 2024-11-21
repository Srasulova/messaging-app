import { useState } from "react";
import Image from "next/image";
import NewContactForm from "./newContactForm";
import { Contact } from "../utils/types";

const contactsData: Contact[] = [
    { id: 1, name: "Michael Foster", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" },
    { id: 2, name: "Johanna Doe", image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    // More contacts...
];

export default function Contacts() {
    const [searchQuery, setSearchQuery] = useState("");
    const [contacts, setContacts] = useState([...contactsData]);
    const [showForm, setShowForm] = useState(false);

    const addContact = (newContact: Omit<Contact, 'id'>) => {
        setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
        setShowForm(false); // Hide form after adding contact
    };

    return (
        <div className="bg-white h-full overflow-auto p-4 border border-gray-200 rounded-md shadow-md">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Contacts</h2>
                    <button
                        className="bg-cyan-300 rounded-full active:translate-y-1"
                        onClick={() => setShowForm(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-6 h-6 p-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                            />
                        </svg>
                    </button>
                </div>

                {showForm && (
                    <div className="fixed inset-0 z-20">
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
                            onClick={() => setShowForm(false)}
                        ></div>

                        {/* Slide-in Form */}
                        <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl transform transition-transform">
                            <NewContactForm
                                onAddContact={addContact}
                                onClose={() => setShowForm(false)}
                            />
                        </div>
                    </div>
                )}

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-4 w-full p-2 border border-cyan-300 rounded-full"
                />

                <ul role="list" className="mt-8 space-y-6">
                    {contacts
                        .filter(contact =>
                            contact.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map(contact => (
                            <li key={contact.id} className="flex items-center space-x-2">
                                <Image
                                    className="rounded-full"
                                    src={contact.image}
                                    alt={contact.name}
                                    width={50}
                                    height={50}
                                />
                                <h3 className="text-base font-medium text-gray-900">{contact.name}</h3>
                            </li>
                        ))}
                    {contacts.length === 0 && (
                        <p className="text-gray-500">No contacts found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
