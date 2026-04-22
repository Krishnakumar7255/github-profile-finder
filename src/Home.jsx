
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
   
   <div className='pt-20 h-screen bg-gradient-to-r from-blue-900 to-violet-400 flex flex-col items-center text-center'>
        <h1 className='text-3xl font-bold text-white mb-6 font-mono'>
            Search Github Profile
        </h1>

        <div>
            <input type="text" placeholder='Enter Github Username...' 
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value)}
            }
            className='p-3 outline-none border-b-2 w-60 font-mono'/>

            <button onClick={fetchProfile} 
            className='bg-black font-mono text-white px-5 rounded-lg hover:bg-gray-800'>
            Search</button>
        </div>

        {load && <p className='text-white'>Loading...</p>}

        {
            error &&<p className='text-red-400'>{error}</p>
        }

        {
            data && (
                <div className='bg-white rounded-xl m-6 shadow-lg p-6 text-center w-90 font-mono'>
                    <img
                    src={data.avatar_url}
                    alt='avatar'
                    className='w-30 h-30 rounded-full mx-auto mb-4'
                    />
                    <h2 className='text-2xl font-bold'>{data.name || "No name"}</h2>
                    <p className='text-gray-600'>@{data.login}</p>

                    <div className='  mt-4 text-xl'>
                        <p>Bio:{data.bio}</p>
                        <br/>
                        <p>Repos:{data.public_repos}</p>
                        
                        <p>Followers:{data.followers}</p>
                        <p>Following:{data.following}</p>
                        <p>Location:{data.location}</p>
                    </div>

                    <a
                    href={data.html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-block mt-4 text-blue-500 underline'
                    >
                        view Profile
                    </a>

                </div>
            )
        }

    </div>  
  )
}

export default Home