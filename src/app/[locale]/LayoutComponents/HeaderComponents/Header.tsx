import AnnouncementBar from './AnnouncementBar/AnnouncementBar'
import Navbar from './Navbar/navbar'
function Header() {
  return (
    <header  className='flex flex-col'>
        <AnnouncementBar/>
        <Navbar/>
    </header>
  )
}

export default Header