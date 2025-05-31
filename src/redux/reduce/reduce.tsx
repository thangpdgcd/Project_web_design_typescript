interface ColorState {
  color: string;
  colorred: string;
  colorblue: string;
  colorgreen: string;
}

//là giá trị mặc định ban đầu của state trong reducer.
export const initialState: ColorState = {
  color: "black", // màu mặc định ban đầu
  colorred: "red",
  colorblue: "blue",
  colorgreen: "#36acaa",
};

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
