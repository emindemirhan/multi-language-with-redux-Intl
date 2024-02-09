import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useLanguageChange() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeLanguage = (
        lang: string,
        pathname: string,
        browserLang: string,
        localeLang: string
    ) => {
        const isSameLang = lang === browserLang;
        const langPath = isSameLang ? '' : `/${lang}`;
        const pathToArr = pathname.split('/');

        let createPath;

        if (pathToArr.length > 2 && localeLang !== browserLang) {
            createPath = pathToArr.slice(2).join('/');
        } else if (localeLang === browserLang) {
            createPath = pathToArr.slice(1).join('/');
        }

        const fullPath = `${langPath}/${createPath || ''}`;
        

        navigate(fullPath);

        dispatch({ type: 'setLocaleLang', payload: lang });
    };

    return handleChangeLanguage;
}
