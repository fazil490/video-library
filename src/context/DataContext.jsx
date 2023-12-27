import { createContext, useContext, useReducer, useState } from "react";
import { likeReducer } from "../reducer/likeReducer";
import { historyReducer } from "../reducer/historyReducer";
import { watchlaterReducer } from "../reducer/watchlaterReducer";
import { videos } from "../backend/db/videos";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  //Sidebar
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  //Feed videos
  const [feedVideos, setFeedVideos] = useState(videos);
  const filteredByCategory = (category) => {
    if (category === "All") {
      setFeedVideos(videos);
    } else {
      const filteredVideosByCategory = videos.filter(
        (video) => video.category === category
      );
      setFeedVideos(filteredVideosByCategory);
    }
  };
  //Search input
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (input) => {
    setSearchInput(input);
  };
  const performSearch = () => {
    const fileteredVideosBySearch = videos.filter(
      (video) =>
        video.title
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase()) ||
        video.creator
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase()) ||
        video.description
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
    );
    setFeedVideos(fileteredVideosBySearch);
  };

  //Reducers
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    like: [],
  });
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });
  const [watchlaterState, watchlaterDispatch] = useReducer(watchlaterReducer, {
    watchlater: [],
  });
  return (
    <DataContext.Provider
      value={{
        sidebar,
        toggleSidebar,
        feedVideos,
        filteredByCategory,
        searchInput,
        handleSearchInputChange,
        performSearch,
        likeState,
        likeDispatch,
        historyState,
        historyDispatch,
        watchlaterState,
        watchlaterDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { DataProvider, useData };
