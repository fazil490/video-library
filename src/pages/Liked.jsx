import MobileNavbar from '../components/MobileNavbar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Liked = () => {
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
        
      </main>
    </>
  )
}

export default Liked