import './App.css'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/views/NotFound';
import GameLobby from './components/views/GameLobby';

function App() {

  return (
    <Routes>
      <Route path="/" element={<>Hola barbi</>} />
      <Route path="/game-lobby" element={<GameLobby />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
