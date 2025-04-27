"use client"
import { CiSearch } from "react-icons/ci";
import { useLocale, useTranslations } from 'next-intl';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from "react";
import { InputSearch } from "../actions/InputSearch";
import styles from '../styles.module.css'
import { AnimatePresence, motion } from "motion/react"
import { ProductsType } from "@/app/[locale]/types/app-types";
import { Link } from "@/i18n/navigation";
import Image from "next/image";


 function SearchBar() {
      const t=useTranslations('header')
      const [searchText,setSearchText]=useState<string>('')
      const [searchResult,setSearchResult]=useState<ProductsType[]| undefined>(undefined)
        const locale=useLocale()
      const [value] = useDebounce(searchText, 1000);


      useEffect(()=>{
            handleSearchResult()
        

      },[value])

    async  function handleSearchResult(){
            const result=await InputSearch({text:value})
            setSearchResult(result)
    }

// console.log(searchResult)    
  return (
     <div >
            <CiSearch />
            <input value={searchText}  onChange={(e)=>setSearchText(e.target.value)} autoComplete='off' name='search' type='text' className='w-full border border-textColor focus:outline-none  rounded py-2 ps-10 caret-mainColor text-base' 
            placeholder={t('navbar.searchPlaceholder')}/>
            <AnimatePresence mode="wait">
           {
            searchResult&&(
                <motion.div data-testid='search-result' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.searchResult} >
                    {
                        searchResult?.length===0?(
                            <p className="w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-textColor font-bold text-lg italic">{t('navbar.noSearchResults')}</p>

                        ):(
                            searchResult?.map(product=>(
                                       <Link  key={product.id} href={''}  className={styles.searchResultItem} >
                                    <Image src={product.images[0].url} alt={product.nameEn} width={50} height={50}/>
                                    <div>
                                        <span>{locale==="en"?product.titleEn:product.titleAr}</span>
                                        <span>{locale==="en"?product.nameEn:product.nameAr}</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-xs ">{product?.price} {t('currency')}</span>
                                </Link>
                            ))
                        )
                    }
                </motion.div>
            )
           }
            </AnimatePresence>
          </div>
  )
}

export default SearchBar