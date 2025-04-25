"use client"
import React from 'react'
import styles from './styles.module.css'
import { Link } from '@/i18n/navigation'


type props={
    categoriesSet:string[]
}

function CategoriesSlider({categoriesSet}:props) {
  return (
   <div className={styles.categoriesContainer}>
     <ul  className={styles.categories}>
        {
            categoriesSet.map((category,index)=>(
                <li key={index}>
                    <Link href={''}>{category}</Link>
                </li>
                
            ))
        }
        
    </ul>
   </div>

  )
}

export default CategoriesSlider