import AnnouncementBar from './AnnouncementBar/AnnouncementBar'
import Categories from './categories/Categories'
import Navbar from './Navbar/navbar'

type props={
  locale:string
}
function Header({locale}:props) {
  // const locale=useLocale()
  return (
    <header  className='flex flex-col'>
        <AnnouncementBar/>
        <Navbar/>
        <Categories locale={locale}/>
    </header>
  )
}

export default Header