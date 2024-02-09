import en from './en.json';
import es from './es.json';
import tr from './tr.json';

interface Translations {
  [key: string]: Record<string, any>;
}

const translations: Translations = {
  en,
  es,
  tr
};

export default translations;