import React from 'react'

const SongList = ({id, name, artist, url, mood}) => {
  return (
    <>
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{artist}</p>
    </div>
    </>
  )
}

export default SongList