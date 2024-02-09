import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import styles from "./language.module.scss";

import { AppState } from '../../store/reducer';

import { useLanguageChange } from '../../hooks/useLanguageChange';
import { renderClasses } from '../../utils/renderClasses';

function LanguageSelector() {
  const { localeLang, browserLang } = useSelector((state: AppState) => state)
  const location = useLocation();
  const pathname = location.pathname;
  const handleChangeLanguage = useLanguageChange();

  return (
    <div className={styles.langSelector}>
      <button className={renderClasses([localeLang === 'en' ? styles.active : ''])} onClick={() => handleChangeLanguage('en', pathname, browserLang, localeLang)}>EN</button>
      <button className={renderClasses([localeLang === 'es' ? styles.active : ''])} onClick={() => handleChangeLanguage('es', pathname, browserLang, localeLang)}>ES</button>
      <button className={renderClasses([localeLang === 'tr' ? styles.active : ''])} onClick={() => handleChangeLanguage('tr', pathname, browserLang, localeLang)}>TR</button>
    </div>
  );
}

export default LanguageSelector;
