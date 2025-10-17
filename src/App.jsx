import { Link } from 'react-router-dom';
import EmotionsList from '../src/Pages/EmotionsList'
import SongList from './Pages/SongList';
import SIdeBar from './Components/SIdeBar';
import Player from './Components/Player';
import Display from './Components/Display';
import { useState } from 'react';

function App() {

  const [currentSongUrl, setCurrentSongUrl] = useState(null)

  return (
        <div className="h-screen bg-black text-white p-4">
          <div className='h-[90%] flex'>
            <SIdeBar />
            <Display setCurrentSongUrl={setCurrentSongUrl} />
          </div>
          <Player currentSongUrl={setCurrentSongUrl} />
        </div>
  );
}

export default App;