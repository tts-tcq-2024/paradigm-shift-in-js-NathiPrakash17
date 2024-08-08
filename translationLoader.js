export async function loadLanguage(lang) {
  try {
    const response = await fetch(`translations/${lang}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error);
    throw error;
  }
}
