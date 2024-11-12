import { LanguageSelectionProps } from "../utils/types";
import { languageOptions } from "../data/languageOptions";

export default function LanguageSelection({ selectedLanguage, handleLanguageSelectionSubmit }: LanguageSelectionProps) {
    return (
        <div className="my-4">
            <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-2">Select Language</label>
            <select
                name="languages"
                id="languages"
                className="inline-flex w-1/2 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                value={selectedLanguage}
                onChange={(e) => handleLanguageSelectionSubmit(e.target.value)}
            >
                {languageOptions.map((language) => (
                    <option
                        key={language.code}
                        value={language.code}
                        className="block px-4 py-2 text-sm text-gray-700"
                    >
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

