import { useState } from "react";
import Image from "next/image";
import { NewContactFormProps } from "../utils/types";

export default function NewContactForm({ onAddContact }: NewContactFormProps) {
    const [fullName, setFullName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleAddContact = () => {
        // Call the onAddContact function and pass the contact details
        onAddContact({ name: fullName, image: imageUrl || "" });
        setFullName("");
        setImageUrl("");
    };

    return (
        <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Contact</h3>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Enter image URL"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex items-center space-x-2 mb-4">
                {imageUrl ? (
                    <Image src={imageUrl} alt="Contact preview" className="w-12 h-12 rounded-full" />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                )}
            </div>
            <button
                onClick={handleAddContact}
                className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
                disabled={!fullName} // Disable button if name is empty
            >
                Add Contact
            </button>
        </div>
    );
}
