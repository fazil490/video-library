export const historyReducer = (state, action) => {
  const { history } = state;
  const { type, payload } = action;

  switch (type) {
    case "Add-to-history":
      const existingIndex = history.findIndex(
        (item) => item._id === payload._id
      );

      if (existingIndex !== -1) {
        const updatedHistory = [
          ...history.slice(0, existingIndex),
          ...history.slice(existingIndex + 1),
        ];
        return {
          ...state,
          history: [ ...updatedHistory, payload],
        };
      }

      return {
        ...state,
        history: [...history, payload],
      };

    case "Clear":
      return {
        history: [],
      };

    default:
      return state;
  }
};
