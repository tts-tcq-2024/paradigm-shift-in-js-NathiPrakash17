import { TranslationService } from './translationService';
import { batteryIsOk } from './CheckerFunctions';
import { log } from './logger';

const translationService = new TranslationService();

async function main() {
  await translationService.setLanguage('german');
  const batteryOk = batteryIsOk(25, 70, 0.7);

  log(batteryOk ? translationService.getTranslation('allOk') : translationService.getTranslation('batteryNotOk'));
}

main();
