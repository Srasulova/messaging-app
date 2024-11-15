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
            <div className="flex items-center space-x-2 mb-1">

                <Image src={imageUrl} alt="Contact preview" />

            </div>
            <button
                onClick={handleAddContact}
                className="w-full bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-700 transition"
                disabled={!fullName} // Disable button if name is empty
            >
                Add Contact
            </button>
        </div>
    );
}
