import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { useData } from "../context/DataContext";

const History = () => {
  const {
    historyState: { history },
    historyDispatch,
  } = useData();
  const reversedHistory = history.slice().reverse();
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
              Histoy
              {` (${reversedHistory.length}
                ${reversedHistory.length <= 1 ? " Video" : " Videos"})`}
            </h2>
            {reversedHistory.length === 0 ? (
              <p className="text-lg">
                Looks like you haven't watched anything yet.
              </p>
            ) : (
              <button
                onClick={() => {
                  historyDispatch({
                    type: "Clear",
                    payload: [],
                  });
                }}
                className="w-fit px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 bg-opacity-50"
              >
                Clear History
              </button>
            )}
          </div>
          <div className="px-2 py-4 flex flex-wrap gap-16 justify-center lg:justify-start">
            {reversedHistory.map((video) => (
              <VideoCard video={video} key={video?._id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default History;
