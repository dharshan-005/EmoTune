import { Link } from 'react-router-dom';
import EmotionsList from '../src/Pages/EmotionsList'
import SongList from './Pages/SongList';
import SIdeBar from './Components/SIdeBar';
import Player from './Components/Player';
import Display from './Components/Display';

function App() {
  return (
        <div className="h-screen bg-black text-white p-4">
          <div className='h-[90%] flex'>
            <SIdeBar />
            <Display />
          </div>
          <Player />
        </div>
    // <Router>
    //   <nav>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/EmotionsList" element={<EmotionsList />} />
    //     <Route path="/SongList" element={<SongList />} />
    //   </Routes>
    // </Router>
  );
}

export default App;