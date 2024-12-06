'use client'

import { InputTextProps } from "../utils/types";

export default function InputText({ message, handleSubmit, handleTextareaChange }: InputTextProps) {
    return (<>
        <div className="w-full bg-yellow-50 place-self-end">
            <div className="min-w-0">
                <form action="#" className="relative"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit()
                    }}>
                    <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-inset ring-cyan-100 focus-within:ring-2 focus-within:ring-green-500">
                        <textarea rows={3} name="comment" id="comment" className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6" placeholder="Add text..."
                            value={message}
                            onChange={handleTextareaChange}
                        ></textarea>
                        {/* 
                        <!-- Spacer element to match the height of the toolbar --> */}
                        <div className="py-2" aria-hidden="true">
                            {/* <!-- Matches height of button in toolbar (1px border + 36px content height) --> */}
                            <div className="py-px">
                                <div className="h-9"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 pr-2">
                        <button type="submit" className="z-10 inline-flex items-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >Send</button>
                    </div>
                </form>
            </div>
        </div>

    </>)
}