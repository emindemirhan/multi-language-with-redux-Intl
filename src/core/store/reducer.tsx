export type AppState = {
  localeLang: string;
  browserLang: string;
};

const initialState : AppState = {
  localeLang: '',
  browserLang: '',
};

export const reducer = (state : AppState = initialState, action:any) => {
  switch (action.type) {
    case "setLocaleLang": {
      return { ...state, localeLang: action.payload };
    }
    case "setBrowserLang": {
      return { ...state, browserLang: action.payload };
    }
    default:
      return state;
  }
};
