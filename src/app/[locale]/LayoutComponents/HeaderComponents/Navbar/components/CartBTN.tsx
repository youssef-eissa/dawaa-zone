"use client"
import React, {  useEffect, useRef, useState } from 'react'
import styles from '../styles.module.css'
import { CiShoppingCart } from "react-icons/ci";
import { AnimatePresence, motion } from "motion/react"

function CartBTN() {
    const [openCart, setOpenCart] = useState(false)
    const cartRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        function handleClick(event:MouseEvent){
            if( openCart && !cartRef.current?.contains(event.target as Node)){
                setOpenCart(false)
            }
        }
        window.addEventListener('click',handleClick)
        return ()=>{
            window.removeEventListener('click',handleClick)
        }
    })



  return (
    <div ref={cartRef} className={styles.cartBTN}>
        <button onClick={() => setOpenCart(!openCart)}>
        <CiShoppingCart size={20} />
        </button>

        <AnimatePresence  mode='popLayout'>
        {openCart&&(
            <motion.div  transition={{duration:0.2}} initial={{opacity:0,display:'none'}} animate={{opacity:1,display:'flex'}} exit={{opacity:0}} >
            dsa
        </motion.div>
        )}
        </AnimatePresence>

    </div>
  )
}

export default CartBTN