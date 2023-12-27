import ReactPlayer from "react-player";
import { videos } from "../backend/db/videos";
import { FaClock } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useData } from "../context/DataContext";

const SingleVideo = ({ id }) => {
  const {
    likeState: { like },
    likeDispatch,
    watchlaterState: { watchlater },
    watchlaterDispatch,
  } = useData();
  const video = videos.find((video) => video._id === id);

  return (
    <div className="p-4 md:p-10 lg:ml-[13.6rem] xl:mx-[13.6rem]">
      <ReactPlayer
        className="min-h-0 md:min-h-[50vh] xl:min-h-[65vh]"
        width="100%"
        url={`https://www.youtube.com/watch?v=${video?._id}`}
        controls={true}
      />
      <div className="py-4">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold py-2">
          {video?.title}
        </h2>
        <p className="text-md md:text-xl text-gray-200 ">{video?.creator}</p>
        <div className="flex gap-4 my-4">
          <span
            onClick={() => {
              likeDispatch({
                type: "Add-to-like",
                payload: video,
              });
            }}
            className={`${
              like.find((item) => item._id === video._id) &&
              "bg-white text-black hover:bg-white"
            } flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer`}
          >
            <BiLike />
            {like.find((item) => item._id === video._id) ? "Liked" : "Like"}
          </span>
          <span
            onClick={() => {
              watchlaterDispatch({
                type: "Add-to-watchlater",
                payload: video,
              });
            }}
            className={`${
              watchlater.find((item) => item._id === video._id) &&
              "bg-white text-black hover:bg-white"
            } flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer`}
          >
            {" "}
            {watchlater.find((item) => item._id === video._id) ? (
              <TiTick />
            ) : (
              <FaClock />
            )}
            Watch Later
          </span>
        </div>
        <hr className="border-none my-4 p-[0.1px] bg-gray-700" />
        <p className="text-md md:text-lg lg:text-xl font-medium">
          Description :
        </p>
        <p className="text-md md:text-lg py-4">{video?.description}</p>
      </div>
    </div>
  );
};

export default SingleVideo;
