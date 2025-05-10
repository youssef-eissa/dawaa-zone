import React from 'react'
import { prisma } from '../../../../../lib/prisma'
import styles from './styles.module.css'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'


type props={
    locale:string
}

async function AdsSection({locale}:props) {
    const products=await prisma.product.findMany()
    function getRandomAds(products:any[]){
        const countOfAds=3
        const randomNumber=Math.floor(Math.random()*products.length)

        if(countOfAds+randomNumber>products.length){
            return products.slice(randomNumber,randomNumber-countOfAds)
        } else return products.slice(randomNumber,randomNumber+countOfAds)
    }
const keyName=`name${locale.charAt(0).toUpperCase()+locale.slice(1)}`

  return (
    <section className={styles.ads}>
        {getRandomAds(products)?.map(product=>(
            <Link key={product.id} href=''>
                <Image alt={product[keyName as keyof typeof product]}  width={350} height={300}   src={product?.adImage}/>
            </Link>
        ))}
    </section>
  )
}

export default AdsSection