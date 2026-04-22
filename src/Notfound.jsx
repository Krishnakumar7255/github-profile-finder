
import React from 'react'

import {Link} from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-violet-400 text-white text-center px-6'>
      
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      
      <h2 className='text-2xl font-semibold mb-2'>
        Page Not Found
      </h2>

      <p className='mb-6 max-w-md'>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link 
        to='/' 
        className='bg-white text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition'
      >
        Go Back Home
      </Link>

    </div>
  )
}

export default Notfound
