import React, { useEffect, useState} from 'react'
import { fetchEmotions } from '../Services/api'

const EmotionCard = () => {
  const [emotions, setEmotions] = useState([]);

  useEffect(() => {
    const getEmotions = async () => {
      const data = await fetchEmotions();
      setEmotions(data);
    };
    getEmotions();
  }, []);

  return (
    <>
    <div>
        <h2>Emotions</h2>
        {emotions.length === 0 && <p>No emotions found.</p>}
        <ul>
            {emotions.map((emotion) => (
                <li key={emotion.id}>{emotion.name}</li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default EmotionCard