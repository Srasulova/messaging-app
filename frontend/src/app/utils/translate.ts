// utils/translationUtils.ts

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
  const url = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_URL;

  const response = await fetch(`${url}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q: text, target: targetLanguage }),
  });

  if (!response.ok) throw new Error("Translation API request failed");

  const data = await response.json();
  return decodeHtmlEntities(data.data.translations[0].translatedText);
}

export function decodeHtmlEntities(text: string): string {
  const parser = new DOMParser();
  const decodedText = parser.parseFromString(
    `<!doctype html><body>${text}`,
    "text/html"
  ).body.textContent;
  return decodedText || "";
}
