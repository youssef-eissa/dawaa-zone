import React from 'react'
import logo from '/public/assets/logo.png'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

import { IoCallOutline } from "react-icons/io5";
import styles from './styles.module.css'
import CartBTN from './components/CartBTN';
import SearchBar from './components/SearchBar';




function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      <Link href={'/'}>
      <Image src={logo} alt='logo' width={150} height={100}/>
      </Link>
      <SearchBar/>
      <div>
        <Link aria-label='call' href={'tel:+20123456789'}><IoCallOutline size={20}/></Link>
        
        <CartBTN/>
      </div>
    </nav>
  )
}

export default Navbar