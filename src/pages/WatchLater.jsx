import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { useData } from "../context/DataContext";

const WatchLater = () => {
  const {
    watchlaterState: { watchlater },
  } = useData();
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
          <div className="px-2 py-4 flex flex-col gap-4 items-center lg:items-start">
            <h2 className="text-xl font-semibold">
              {" "}
              Watch Later
              {` (${watchlater.length}
                ${watchlater.length <= 1 ? " Video" : " Videos"})`}
            </h2>
            {watchlater.length === 0 && (
              <p className="text-lg">
                Looks like you haven't added anything yet in Watch Later.
              </p>
            )}
          </div>
          <div className="px-2 py-4 flex flex-wrap gap-16 justify-center lg:justify-start">
            {watchlater.map((video) => (
              <VideoCard video={video} key={video?._id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default WatchLater;
