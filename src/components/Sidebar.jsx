import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useData } from "../context/DataContext";

const Sidebar = () => {
  const { sidebar } = useData();
  const location = useLocation();

  return (
    <aside
      className={`${
        sidebar ? "left-0" : "-left-80"
      } transition-all duration-500 ease-in-out z-10 lg:left-0 bg-darkbg h-[100vh] fixed  border-r border-r-gray-800`}
    >
      <div className="text-white text-md md:text-lg">
        <NavLink
          to="/"
          className={`${location.pathname === "/" && 'bg-gray-800'} flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4`}
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/liked"
          className={`${location.pathname === "/liked" && 'bg-gray-800'} flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4`}
        >
          <FaHeart /> Liked
        </NavLink>
        <NavLink
          to="/watchlater"
          className={`${location.pathname === "/watchlater" && 'bg-gray-800'} flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4`}
        >
          <FaClock /> Watch Later
        </NavLink>
        <NavLink
          to="/history"
          className={`${location.pathname === "/history" && 'bg-gray-800'} flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4`}
        >
          <FaHistory /> History
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
