import './App.css'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/views/NotFound';
import GameLobby from './components/views/GameLobby';
import Login from './components/views/Login';
import Register from './components/views/Register';

function App() {

  return (
    <Routes>
      <Route path="/" element={<>Hola</>} />
      <Route path="/game-lobby" element={<GameLobby />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
