import { Routes, Route } from 'react-router-dom'
import {Home, History, Liked, WatchLater, VideoPlayer} from "./pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watchlater' element={<WatchLater />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/liked' element={<Liked />}></Route>
        <Route path='/video/:videoId' element={<VideoPlayer />}></Route>
      </Routes>
    </div>
  )
}

export default App
