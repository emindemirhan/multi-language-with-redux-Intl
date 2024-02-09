import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import translations from "./core/translations";
import { AppState } from "./core/store/reducer";

import { Routes, Route, useParams, Navigate } from "react-router-dom";
import HomePage from "./core/components/Pages/HomePage";
import AboutPage from "./core/components/Pages/About";
import flattenMessages from "./core/utils/flattenMessages";
import MainLayout from "./core/layouts/MainLayout";
import { useEffect, useLayoutEffect } from "react";
import Page404 from "./core/components/Pages/Page404";

const validLanguages: string[] = ["en", "tr", "es"];

function ValidatedRoute({ element }: { element: JSX.Element }) {
  const dispatch = useDispatch();
  const { browserLang } = useSelector((state: AppState) => state);
  const { lang } = useParams<{ lang?: string }>();

  useEffect(() => {
    if (lang && validLanguages.includes(lang) && lang !== browserLang) {
      dispatch({ type: "setLocaleLang", payload: lang });
    }
  }, []);

  if (lang && !validLanguages.includes(lang)) {
    return <Page404 />;
  }

  return element;
}

function App() {
  const { localeLang, browserLang } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const userLanguages = navigator.languages || [navigator.language];
  const detectBrowserLang = userLanguages[0];

  useLayoutEffect(() => {
    dispatch({ type: "setLocaleLang", payload: detectBrowserLang });
    dispatch({ type: "setBrowserLang", payload: detectBrowserLang });
  }, []);

  return (
    <>
      {browserLang ? (
        <IntlProvider
          locale={localeLang}
          defaultLocale={browserLang}
          messages={flattenMessages(translations[localeLang])}
        >
          <Routes>
            <Route
              path="/"
              element={<ValidatedRoute element={<MainLayout />} />}
            >
              <Route path={`/${browserLang}`} element={<Navigate to={"/"} />} />
              <Route
                path={`/${browserLang}/about`}
                element={<Navigate to={"/about"} />}
              />

              <Route index={true} element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/:lang/about" element={<AboutPage />} />
              <Route path="/:lang" element={<HomePage />} />

              <Route path="*" element={<Page404 />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </IntlProvider>
      ) : (
        <>loading...</>
      )}
    </>
  );
}

export default App;
