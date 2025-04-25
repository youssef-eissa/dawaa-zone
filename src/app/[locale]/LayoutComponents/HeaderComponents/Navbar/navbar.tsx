import React from 'react'
import logo from '/public/assets/logo.png'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { useTranslations } from 'next-intl';
import { IoCallOutline } from "react-icons/io5";
import styles from './styles.module.css'
import CartBTN from './components/CartBTN';




function Navbar() {
  const t=useTranslations('header')
  return (
    <nav className={styles.navbar}>
      <Link href={'/'}>
      <Image src={logo} alt='logo' width={150} height={100}/>
      </Link>
      <div >
        <CiSearch />
        <input autoComplete='off' name='search' type='text' className='w-full border border-textColor focus:outline-none  rounded py-2 ps-10 caret-mainColor text-base' 
        placeholder={t('navbar.searchPlaceholder')}/>
      </div>
      <div>
        <Link href={'tel:+20123456789'}><IoCallOutline size={20}/></Link>
        
        <CartBTN/>
      </div>
    </nav>
  )
}

export default Navbar