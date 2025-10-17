import React, { useEffect, useRef, useState } from 'react';
import { assets, songs } from '../assets/assets';

const Player = ({ currentSongUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]); // default first song

  // When currentSongUrl changes, update audio and play
  useEffect(() => {
    if (currentSongUrl) {
      audioRef.current.src = currentSongUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSongUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
          <div>
            <p>{currentSong.name}</p>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
          <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
            
            {/* Play icon triggers audio play/pause */}
            <img
              className='w-4 cursor-pointer'
              src={assets.play_icon}
              alt={isPlaying ? "Pause" : "Play"}
              onClick={togglePlay}
            />

            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
          </div>
          <div className='flex items-center gap-5'>
            <p>1:06</p>
            <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
              <hr className='h-1 border-none w-0 bg-blue-500 rounded-full' />
            </div>
            <p>3:20</p>
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
          <img className='w-4' src={assets.volume_icon} alt="Volume" />
          <div className='w-20 bg-slate-50 h-1 rounded'></div>
        </div>
      </div>

      {/* Actual audio element */}
      <audio ref={audioRef} />
    </>
  );
};

export default Player;