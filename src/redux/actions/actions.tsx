// Nếu bạn chưa có import/export nào, thêm dòng này:
// Dòng này giúp biến file thành module

// Ví dụ action types và action creators
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const VIETNAMESE = "VIETNAMESE";
export const ENGLISH = "ENGLISH";

export const vietnamese = () => ({ type: VIETNAMESE });
export const english = () => ({ type: ENGLISH });

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
