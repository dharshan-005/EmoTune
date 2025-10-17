import { emotions, songs } from '../assets/assets'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import AlbumItem from './AlbumItem'
import axios from 'axios'

const DisplayHome = () => {

    const [emotions, setEmotions] = useState([])
    const [songs, setSongs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        const emotionsResponse = await axios.get('http://localhost:5000/api/emotions');
        setEmotions(emotionsResponse.data);
        const songsResponse = await axios.get('http://localhost:5000/api/songs');
        setSongs(songsResponse.data);
        };
        fetchData();
    }, []);

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