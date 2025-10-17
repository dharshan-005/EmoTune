import React, { useState, useEffect } from 'react'

const SongForm = () => {
    const [title, setTitle] = useState(initialData.title || '');
    const [artist, setArtist] = useState(initialData.artist || '');
    const [emotion, setEmotion] = useState(initialData.emotion || '');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !emotion) {
        setError('Song title and associated emotion are required');
        return;
    }
    setError('');
    onSubmit({ title, artist, emotion });
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 border rounded'>
        <div className='mb-4'>
            <label>Song Title*</label>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='w-full p-2 border rounded'
            />
        </div>
        <div className='mb-4'>
            <label>Artist</label>
            <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className='w-full p-2 border rounded'
            />
        </div>
        <div className='mb-4'>
            <label>Emotion*</label>
            <select
                type="text"
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}
                className='w-full p-2 border rounded'
                required
            >
                <option value="">Select Emotion</option>
                {emotions.map((emo) => (
                    <option key={emo.id} value={emo.name}>{emo.name}</option>
                ))}
            </select>
        </div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>{submitText}</button>
    </form>
    </>
  )
}

export default SongForm