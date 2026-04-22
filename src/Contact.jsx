import React from 'react'

const Contact = () => {
  return (
    <div className='pt-20 min-h-screen bg-gradient-to-r from-blue-900 to-violet-400 flex flex-col items-center justify-center px-6 space-y-10'>
      
      {/* Contact Form */}
      <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Contact Us
        </h1>

        <form className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Your Name'
            className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <textarea
            rows='4'
            placeholder='Your Message'
            className='border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
          ></textarea>
          <button
            type='submit'
            className='bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition'
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Developer Details */}
      <div className='bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg text-center space-y-4 m-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Developer Details</h2>
        <p className='text-gray-600'>Krishna Kumar</p>
        <p className='text-gray-600'>Email: krishna@example.com</p>
        <p className='text-gray-600'>Phone: +91 12345 67890</p>
        <div className='flex justify-center gap-6 mt-2'>
          <a href='https://github.com/krishnakumar7255' target='_blank' rel='noreferrer' className='text-gray-800 hover:text-black'>
            GitHub
          </a>
          <a href='https://www.linkedin.com/in/krishna-kumar-8298b72a0' target='_blank' rel='noreferrer' className='text-blue-700 hover:text-blue-800'>
            LinkedIn
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact