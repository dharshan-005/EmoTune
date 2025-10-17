import { emotions, songs } from '../assets/assets';
import React, { useState } from 'react';
import NavBar from './NavBar';
import AlbumItem from './AlbumItem';
import SongList from '../Pages/SongList';

const DisplayHome = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [currentSongUrl, setCurrentSongUrl] = useState(null);

  const filteredSongs = selectedMood
    ? songs.filter(song => song.mood === selectedMood)
    : songs;

  return (
    <>
      <NavBar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Emotions</h1>
        <div className='flex overflow-auto'>
          {emotions.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 mr-2 rounded ${
                selectedMood === item.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
              }`}
              onClick={() => setSelectedMood(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Songs</h1>
        <div className='flex overflow-auto'>
          {filteredSongs.length > 0 ? (
            filteredSongs.map((item, index) => (
              <SongList
                key={index}
                {...item}
                setCurrentSongUrl={setCurrentSongUrl}
              />
            ))
          ) : (
            <p>No songs found for this mood.</p>
          )}
        </div>
      </div>

    </>
  );
};

export default DisplayHome;