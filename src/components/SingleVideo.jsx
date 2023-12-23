import ReactPlayer from "react-player"
import { videos } from "../backend/db/videos"
import { FaClock } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

const SingleVideo = ({id}) => {
  const video = videos.find((video) => video._id === id)

  return (
    <div className="p-2 md:p-10 lg:mx-[13.6rem]">
      <ReactPlayer className="min-h-0 md:min-h-[100%] lg:min-h-[65vh]" width="100%" url={`https://www.youtube.com/watch?v=${video?._id}`} controls={true} />
      <div className="py-4">
        <h2 className="text-xl lg:text-2xl font-semibold py-2">{video?.title}</h2>
        <p className="text-gray-200 text-lg">{video?.creator}</p>
        <div className="flex gap-4 my-2">
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 cursor-pointer"><BiLike />Like</span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 cursor-pointer"><FaClock />Watch Later</span>
        </div>
        <p className="text-lg font-medium py-2">Description :</p>
        <p className="text-base py-2">{video?.description}</p>
      </div>
    </div>
  )
}

export default SingleVideo