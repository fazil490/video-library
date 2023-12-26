import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";

const Sidebar = () => {
  const { sidebar } = useData();
  return (
    <aside
      className={`${
        sidebar ? "left-0" : "-left-80"
      } transition-all duration-500 ease-in-out z-10 lg:left-0 bg-darkbg h-[100vh] fixed  border-r border-r-stone-800`}
    >
      <div className="text-white text-sm sm:text-md md:text-lg">
        <Link
          to="/"
          className={`flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4 hover:bg-stone-800`}
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/liked"
          className={`flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4 hover:bg-stone-800`}
        >
          <FaHeart /> Liked
        </Link>
        <Link
          to="/watchlater"
          className={`flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4 hover:bg-stone-800`}
        >
          <FaClock /> Watch Later
        </Link>
        <Link
          to="/history"
          className={`flex items-center justify-start gap-4 md:gap-6 px-8 md:px-10 py-4 hover:bg-stone-800`}
        >
          <FaHistory /> History
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
