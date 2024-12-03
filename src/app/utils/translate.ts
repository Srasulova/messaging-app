export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
  const url = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_URL;

  console.log("API Key:", apiKey); // Log API Key for debugging (ensure it's correct)
  console.log("API URL:", url); // Log API URL for debugging (ensure it's correct)

  const response = await fetch(`${url}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q: text, target: targetLanguage }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error:", errorText); // Log any API error message
    throw new Error("Translation API request failed");
  }

  const responseBody = await response.json();
  console.log("API Response:", responseBody);

  if (!responseBody || !responseBody.data || !responseBody.data.translations) {
    console.error("Empty or malformed response body from the translation API");
    throw new Error(
      "Empty or malformed response body from the translation API"
    );
  }

  try {
    return decodeHtmlEntities(responseBody.data.translations[0].translatedText);
  } catch (error) {
    console.error("Error parsing response data:", error, responseBody); // Log response body and error
    throw new Error("Failed to parse response data");
  }
}

export function decodeHtmlEntities(text: string): string {
  const parser = new DOMParser();
  const decodedText = parser.parseFromString(
    `<!doctype html><body>${text}`,
    "text/html"
  ).body.textContent;
  return decodedText || "";
}
