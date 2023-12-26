import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { useData } from "../context/DataContext";

const VideoCard = ({ video }) => {
  const {
    historyState: { history },
    historyDispatch,
  } = useData();
  return (
    <Link to={`/video/${video?._id}`}>
      <div onClick={() => {
        historyDispatch({
          type: "Add-to-history",
          payload: video,
        })
        console.log(history);
      }} className="w-[23rem] sm:w-[20rem] lg:w-[20rem] xl:w-[22.1rem] rounded-lg shadow-lg">
        <img
          className="w-[100%] object-cover h-[12.5rem] rounded-t-lg"
          src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
          alt="video-card-img"
        />
        <div className="px-2 py-4 flex flex-col gap-2 rounded-b-lg">
          <div className="flex items-center justify-between mr-2">
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap mr-4 pr-4 text-xl font-semibold">
              {video?.title}
            </h2>
            <FaEllipsisV />
          </div>
          <div className="flex items-center justify-between text-stone-400">
            <p>{video?.creator}</p>
            <p>{video?.uploaded}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
