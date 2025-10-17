import React from 'react';

const SongList = ({ id, name, artist, song, mood, setCurrentSongUrl }) => {
  return (
    <div className='min-w-[180px] p-2 cursor-pointer hover:bg-[#ffffff26]'>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{artist}</p>
      <button
        onClick={() => setCurrentSongUrl(song)} 
        className="mt-2 px-3 py-1 bg-blue-600 rounded text-white"
      >
        Play
      </button>
    </div>
  );
};

export default SongList;