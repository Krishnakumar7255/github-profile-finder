import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const[shadow,setShadow]=useState(false)

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
     <div className={`flex justify-between items-center bg-gradient-to-r from-blue-900 to-violet-400 w-full h-16 px-6 text-white fixed top-0 left-0 z-50 transition-all duration-300 
      ${shadow ? 'shadow-lg' : ''}`}>
        
     <div>
        <div className='flex items-center gap-2'>
          <img src='/github.png' className='w-10 rounded-full' />
          <h1 className='text-xl font-bold font-mono'>GitHub Profile</h1>
        </div>
        <h2 className='text-sm font-mono ml-16'>Get your details</h2>
      </div>

    <div className='flex gap-16 font-semibold'>
      <NavLink to='/' className={({isActive})=>isActive?"text-yellow-300 border-b-2 border-yellow-300 pb-1" : "hover:text-yellow-200 pb-1"}>
      Home
      </NavLink>
      <NavLink to='/about' className={({isActive})=>isActive?"text-yellow-300 border-b-2 border-yellow-300 pb-1" : "hover:text-yellow-200 pb-1"}>
      About
      </NavLink>
      <NavLink to='/contact' className={({isActive})=>isActive?"text-yellow-300 border-b-2 border-yellow-300 pb-1" 
              : "hover:text-yellow-200 pb-1"}>
      Contact
      </NavLink>
    </div>
    </div>
    </>
  )
}

export default Navbar
