import React from 'react'

type props={
    children:React.ReactNode
}

function Modal({children}:props) {
  return (
    <div className='bg-black/50 h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50'>{children}</div>
  )
}

export default Modal