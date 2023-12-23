import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SingleVideo from '../components/SingleVideo'
import { useParams } from "react-router-dom"

const VideoPlayer = () => {
  const {videoId} = useParams();
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
        <SingleVideo id={videoId} />
      </main>
    </>
  )
}

export default VideoPlayer