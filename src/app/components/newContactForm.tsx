import { useState } from "react";
import Image from "next/image";
import { NewContactFormProps } from "../utils/types";

export default function NewContactForm({ onAddContact, onClose }: NewContactFormProps) {
    const [fullName, setFullName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isValidImage, setIsValidImage] = useState(false);

    const handleAddContact = () => {
        // Call the onAddContact function and pass the contact details
        onAddContact({ name: fullName, image: imageUrl || "" });
        setFullName("");
        setImageUrl("");
        setIsValidImage(false)
    };

    const handleImageChange = (url: string) => {
        setImageUrl(url)

        const img = new window.Image();
        img.onload = () => setIsValidImage(true)
        img.onerror = () => setIsValidImage(false)
        img.src = url
    }

    return (
        <div className="bg-white relative p-4 border border-gray-200 rounded-md shadow-md max-w-md mx-auto">

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </button>

            <h3 className="text-lg font-semibold text-green-500 mb-4">Add New Contact</h3>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-zinc-600 mb-2">Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-green-500 focus:border-none"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium text-zinc-600 mb-2">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => handleImageChange(e.target.value)}
                    placeholder="Enter image URL"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-green-500 focus:border-none"
                />
            </div>
            <div className="flex items-center justify-center space-x-2 mb-1">


                {isValidImage && imageUrl ? (
                    <Image src={imageUrl} alt="Contact preview" className="w-16 h-16 rounded-full" width={150} height={150} />
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
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
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 transition"
                disabled={!fullName} // Disable button if name is empty
            >
                Add Contact
            </button>
        </div>
    );
}
