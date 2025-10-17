import React, { useEffect, useState } from 'react'

const EmotionForm = ({ onSubmit, initialData = {}, submitText }) => {

    const [name, setName] = useState(initialData.name || '');
    const [description, setDescription] = useState(initialData.description || '')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Emotion name is required!')
            return
        }
        setError('')
        onSubmit({name,description})
    }

  return (
    <>
    <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 border rounded'>
        <div className='mb-4'>
            <label className='block font-semibold mb-1'>Emotions Name*</label>
            <input 
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                className='border p-2 w-full rounded'
            />
        </div>
        <div className='mb-4'>
            <label className='block font-semibold mb-1'>Description</label>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='border p-2 w-full rounded'
                rows={3}
            />
        </div>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <button type='submit' className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>
            {submitText}
        </button>
    </form>
    </>
  )
}

export default EmotionForm