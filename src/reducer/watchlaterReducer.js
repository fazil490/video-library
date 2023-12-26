export const watchlaterReducer = (state, action) => {
  const { watchlater } = state;
  const { type, payload } = action;

  switch (type) {
    case "Add-to-watchlater":
      if (watchlater.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          watchlater: [
            ...watchlater.filter((item) => item._id !== payload._id),
          ],
        };

      return {
        ...state,
        watchlater: [...watchlater, payload],
      };

    case "Remove-from-watchlater":
      return {
        ...state,
        watchlater: [...watchlater.filter((item) => item._id !== payload._id)],
      };

    case "Clear":
      return payload;

    case "default":
      return state;
  }
};
