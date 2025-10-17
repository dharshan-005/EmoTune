import React from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { emotions } from '../assets/assets'

const Album = () => {

    const {id} = useParams();
    const emotions = emotions[id]

  return (
    <>
    <NavBar />
    <div className='flex flex-col'>
        <p>Playlist</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{emotions.name}</h2>
        {/* <h4>{}</h4> */}
    </div>
    </>
  )
}

export default Album