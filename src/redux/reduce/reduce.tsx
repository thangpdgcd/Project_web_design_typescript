interface ColorState {
  color: string;
}

//là giá trị mặc định ban đầu của state trong reducer.
const initialState: ColorState = {
  color: "black", // màu mặc định ban đầu
};

type ColorAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const colorReducer = (
  state: ColorState = initialState,
  action: ColorAction
): ColorState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, color: "red" };
    case "DECREMENT":
      return { ...state, color: "green" };
    default:
      return state;
  }
};

export default colorReducer;
