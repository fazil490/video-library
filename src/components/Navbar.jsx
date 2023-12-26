import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-darkbg border-b border-b-stone-800 flex p-4 md:px-8 items-center justify-between">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl sm:text-2xl font-semibold">
          <Link to="/">YouTube</Link>
        </h1>
      </div>
      <div className="flex items-center gap-2 w-[30%]">
        <input
          placeholder="Search"
          type="text"
          className="text-stone-400 rounded-full bg-darkbg border border-stone-700 focus:outline-none focus:border-red-900 px-4 py-1 w-[90%]"
        />
        <button className="text-white p-2 rounded-full bg-stone-700 hover:bg-stone-600">
          <FiSearch />
        </button>
      </div>
      <div>
        <button className="text-white rounded-full text-2xl">
          <FaUserCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
