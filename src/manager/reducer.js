import { BREAK, RUN, SESSION } from "../constants/keywords";

export const reducer = (state, action) => {
  switch (action.type) {
    case BREAK:
      return { ...state, break: action.payload };

    case SESSION:
      return {
        ...state,
        session:
          state.session === 0 ? state.session + state.break : action.payload,
      };

    case RUN:
      return { ...state, isRunning: action.payload };

    default:
      return state;
  }
};
