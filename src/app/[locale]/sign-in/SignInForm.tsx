"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function SignInForm() {
   
    const router =useRouter()
    useEffect(()=>{
        function handleEscBTN(event:KeyboardEvent){
            if(event.key==="Escape"){
router.back()
            }
        }
        window.addEventListener('keydown',handleEscBTN)
        return ()=>{
        window.removeEventListener('keydown',handleEscBTN)

        }
    },[])
  return (
    <form className='bg-white p-5 rounded '>SignInForm</form>
  )
}

export default SignInForm