import { loadLanguage } from './translationLoader';

export class TranslationService {
  constructor() {
    this.translations = {};
    this.currentLanguage = 'english';
  }

  async setLanguage(lang) {
    this.translations = await loadLanguage(lang);
    this.currentLanguage = lang;
  }

  getTranslation(key) {
    return this.translations[this.currentLanguage][key];
  }
}
