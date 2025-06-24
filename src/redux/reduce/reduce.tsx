interface ColorState {
  color: string;
  colorred: string;
  colorblue: string;
  colorgreen: string;
}

interface LanguageState {
  language: string;
  vietnamese: string;
  english: string;
}

export const initialStatelanguage: LanguageState = {
  language: "vietnamese", // màu mặc định ban đầu
  vietnamese: "vietnamese",
  english: "english",
};

//là giá trị mặc định ban đầu của state trong reducer.
export const initialState: ColorState = {
  color: "black", // màu mặc định ban đầu
  colorred: "red",
  colorblue: "blue",
  colorgreen: "#36acaa",
};

type LanguageAction = { type: "vietnamese" } | { type: "english" };

//nên thêm biến vào type
type ColorAction =
  | { type: "Colorred" }
  | { type: "Colorblue" }
  | { type: "Colorgreen" };

export const Colorblue = "Colorblue";
export const Colorred = "Colorred";
export const Colorgreen = "Colorgreen";

export const colorReducer = (
  state: ColorState = initialState,
  action: ColorAction
): ColorState => {
  switch (action.type) {
    case Colorblue:
      return { ...state, colorred: "red" };
    case Colorred:
      return { ...state, colorblue: "blue" };
    default:
      return state;
  }
};

//language
export const VIETNAMESE = "vietnamese";
export const ENGLISH = "english";

export const languageReducer = (
  state: LanguageState = initialStatelanguage,
  action: LanguageAction
): LanguageState => {
  switch (action.type) {
    case VIETNAMESE:
      return { ...state, language: "vietnamese" };
    case ENGLISH:
      return { ...state, language: "english" };
    default:
      return state;
  }
};
