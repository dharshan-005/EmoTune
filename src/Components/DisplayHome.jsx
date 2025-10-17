import React from 'react'
import NavBar from './NavBar'
import { emotions, songs } from '../assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
    <NavBar />
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Emotions</h1>
        <div className='flex overflow-auto'>
            {emotions.map((item,index) => (<AlbumItem key={index} name={item.name} id={item.id}/>))}
        </div>
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Songs</h1>
        <div className='flex overflow-auto'>
            {songs.map((item,index) => (<AlbumItem key={index} name={item.name} id={item.id}/>))}
        </div>
    </div>
    </>
  )
}

export default DisplayHome