export const reducer = (state, action) => {
  switch (action.type) {
    case "BREAK":
      return { ...state, break: action.payload };

    case "SESSION":
      return { ...state, session: action.payload };

    default:
      return state;
  }
};
