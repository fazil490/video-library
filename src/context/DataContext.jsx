import { createContext, useContext, useReducer } from "react";
import { likeReducer } from "../reducer/likeReducer";
import { historyReducer } from "../reducer/historyReducer";
import { watchlaterReducer } from "../reducer/watchlaterReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    like: [],
  });
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlater: [],
  })
  return (
    <DataContext.Provider value={{ likeState, likeDispatch, historyState, historyDispatch, watchlaterState, watchlaterDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { DataProvider, useData };