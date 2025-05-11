import React from 'react'
import styles from './styles.module.css'
import SectionHead from '../../components/SectionHead'
import { getTranslations } from 'next-intl/server'
import { prisma } from '../../../../../lib/prisma'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import { FaCartPlus } from "react-icons/fa6";





type props={
    locale:string
}

async function TrendingProducts({locale}:props) {
    const t=await getTranslations("home.trendingProducts")
    const currency= await getTranslations("currency")

    const products= await prisma.product.findMany({
        take:8
    })


const keyName=`name${locale.charAt(0).toUpperCase()+locale.slice(1)}`
    
  return (
    <section className={styles.trendingProducts}>
        <SectionHead title={t("title")}/>
        <div className={styles.trendingProductsContainer}>
            {products.map(product=>(
                <div key={product.id}>
                    <Image  src={product?.adImage} alt={product[keyName as keyof typeof product] as string} width={300} height={250}/>
                    <Rating value={5} readOnly  className='!text-base' />
                    <h4>{product[keyName as keyof typeof product]}</h4>
                    <div className={styles.cartBottom}>
                        <div>
                            <del>{product.price+5} {currency("currency")}</del>
                            <span>{product.price} {currency("currency")}</span>
                        </div>
                        <button aria-label='add to cart' title='add to cart' type='button'>
                            <FaCartPlus size={20} color='white'/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TrendingProducts