import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { categories } from "../backend/db/categoryChips";
import { useData } from "../context/DataContext";

const Home = () => {
  const {searchInput, filteredByCategory, feedVideos} = useData()
  
  return (
    <>
      <nav className="sticky top-0">
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </nav>
      <main className="bg-darkbg text-white">
        <Sidebar />
        <div className="lg:ml-64">
          <div className="categories p-2 lg:px-0 flex overflow-auto items-center justify-start">
            {categories.map((category) => (
              <button key={category}
                value={category}
                onClick={(e) => {
                  filteredByCategory(e.target.value);
                }}
                className="focus:bg-red-700 px-4 py-2 m-2 rounded-full cursor-pointer bg-zinc-800 hover:bg-zinc-700"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="px-2 py-4 flex flex-wrap gap-16 justify-center lg:justify-start">
            {feedVideos.map((video) => (
              <VideoCard video={video} key={video?._id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
