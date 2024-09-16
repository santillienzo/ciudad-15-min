import './App.css'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/views/NotFound';
import GameLobby from './components/views/game/GameLobby';
import Login from './components/views/game/Login';
import Register from './components/views/game/Register';
import AppLanding from './components/views/landingPage/AppLanding';

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLanding/>} />
      <Route path="/game-lobby" element={<GameLobby />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
