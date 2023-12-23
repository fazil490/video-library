import { IoChevronBack } from "react-icons/io5";
import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSidebar } from "../context/sidebarContext";

const MobileNavbar = () => {
  const [searchOn, setSearchOn] = useState(false);
  const {toggleSidebar} = useSidebar();
  const handleSearchBar = () => {
    setSearchOn(true);
  };
  const handleCloseSearch = () => {
    setSearchOn(false);
  };


  return (
    <div className="sticky top-0">
      {searchOn ? (
        <div className="bg-darkbg border-b border-b-stone-800 flex p-4 md:px-8 items-center justify-center gap-4">
          <button
            onClick={handleCloseSearch}
            className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20"
          >
            <IoChevronBack />
          </button>
          <input
            onChange={() => {}}
            placeholder="Search"
            type="text"
            className="text-stone-400 rounded-full bg-darkbg border border-stone-700 focus:outline-none focus:border-red-900 px-4"
          />
          <button className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20">
            <FiSearch />
          </button>
        </div>
      ) : (
        <div className="bg-darkbg border-b border-b-stone-800 flex p-4 md:px-8 items-center justify-between">
          <div className="flex items-center justify-between">
            <button
            onClick={toggleSidebar}
              className="mr-4 text-white text-2xl"
            >
              <RxHamburgerMenu />
            </button>
            <h1 className="text-white text-xl sm:text-2xl font-semibold">
              YouTube
            </h1>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handleSearchBar}
              className="text-white p-2 ml-2 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              <FiSearch />
            </button>
            <button className="text-white text-2xl">
              <FaUserCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
