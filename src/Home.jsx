
import React, { useState } from 'react'

const Home = () => {

    const [username,setUsername]=useState('')
    const [data,setData]=useState(null)
    const [load,setLoad]=useState(false)
    const [error,setError]=useState('')

    const fetchProfile=async()=>{
        if(!username) return
        try{
            setLoad(true)
            setError('')
            setData(null)

            const res = await fetch(`https://api.github.com/users/${username}`)

            if(!res.ok)
            {
                throw new Error('User not found')
            }

            const result=await res.json()
            setData(result)
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoad(false)
        }
    }

  
  return (
   
  <div className='min-h-screen pt-24 bg-gradient-to-r from-blue-900 to-violet-400 flex flex-col items-center text-center'>

    <h1 className='text-xl sm:text-3xl font-bold text-white mb-6 font-mono'>
      Search Github Profile
    </h1>

    <div className='w-full max-w-sm sm:max-w-md mx-auto bg-white/10 backdrop-blur-md p-3 rounded-full flex flex-col gap-2 items-center'>
      <input
        type="text"
        placeholder='Enter Github Username...'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-full  px-4 py-2 outline-none font-mono bg-transparent text-white placeholder-gray-300 rounded-full border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 transition-all duration-300'
      />

      <button
        onClick={fetchProfile}
        className='bg-black text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition w-fit flex-shrink-0'
      >
        Search
      </button>

    </div>
    {load && <p className='text-white mt-4'>Loading...</p>}
    {error && <p className='text-red-400 mt-4'>{error}</p>}
    {data && (
      <div className='bg-white rounded-xl m-6 shadow-lg p-6 text-center w-full max-w-md font-mono transition hover:scale-105 duration-300'>

        <img
          src={data.avatar_url}
          alt='avatar'
          className='w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4'
        />

        <h2 className='text-2xl font-bold'>
          {data.name || "No name"}
        </h2>

        <p className='text-gray-600'>
          @{data.login}
        </p>

        <div className='mt-4 text-sm sm:text-lg leading-relaxed'>

          <p><b>Bio:</b> {data.bio || "No bio available"}</p>
          <p><b>Repos:</b> {data.public_repos}</p>
          <p><b>Followers:</b> {data.followers}</p>
          <p><b>Following:</b> {data.following}</p>
          <p><b>Location:</b> {data.location || "Not available"}</p>

        </div>

        <a
          href={data.html_url}
          target='_blank'
          rel='noreferrer'
          className='inline-block mt-4 text-blue-500 underline'
        >
          View Profile
        </a>

      </div>
    )}

  </div>
)
}

export default Home