import React, { useEffect, useState } from 'react'
import { getEmotions, createEmotion, updateEmotion, deleteEmotion } from '../Services/api';
import EmotionForm from './EmotionForm';

const EmotionsList = () => {
    const [emotions, setEmotions] = useState([]);
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        fetchEmotions();
    }, []);

    const fetchEmotions = async () => {
        const data = await getEmotions();
        setEmotions(data);
    };

    const handleCreate = async (emotion) => {
        await createEmotion(emotion);
        setShowForm(false);
        fetchEmotions();
    };

    const handleUpdate = async (emotion) => {
        await updateEmotion(selectedEmotion._id, emotion);
        setSelectedEmotion(null);
        setShowForm(false);
        fetchEmotions();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this emotion?')) {
            await deleteEmotion(id);
            fetchEmotions();
        }
    };

  return (
    <>
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Emotions</h2>

      <button
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => { setSelectedEmotion(null); setShowForm(true); }}
      >
        Add Emotion
      </button>

      {showForm && (
        <EmotionForm
          initialData={selectedEmotion || {}}
          submitText={selectedEmotion ? 'Update Emotion' : 'Create Emotion'}
          onSubmit={selectedEmotion ? handleUpdate : handleCreate}
        />
      )}

      <ul>
        {emotions.map(emotion => (
          <li key={emotion._id} className="mb-2 flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-semibold text-lg">{emotion.name}</h3>
              <p>{emotion.description}</p>
            </div>
            <div>
              <button
                onClick={() => { setSelectedEmotion(emotion); setShowForm(true); }}
                className="mr-2 bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(mood._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default EmotionsList