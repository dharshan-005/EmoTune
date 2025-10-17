import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.left_arrow} alt="Backward" onClick={() => navigate(-1)} />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_icon} alt="Forward" onClick={() => navigate(1)} />
        </div>

        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Emotions</p>
            <p className='bg-black py-1 px-4 rounded-2xl text-[15px] cursor-pointer'>Genres</p>
            <p className='bg-blue-400 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
        </div>
    </div>

    <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl'>Playlists</p>
    </div>
    </>
  )
}

export default NavBar