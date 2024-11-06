import { Routes, Route } from 'react-router-dom';
import NotFound from './components/views/NotFound';
import GameLobby from './components/views/game/GameLobby';
import Login from './components/views/game/Login';
import Register from './components/views/game/Register';
import AppLanding from './components/views/landingPage/AppLanding';
import ProtectedRoute from './components/layout/ProtectedRoute';
import { AuthProvider } from './components/contexts/AuthContext';
import Game from './components/views/game/Game';
import QrReader from './components/features/game/QrReader';
import RecoverPassword from './components/views/game/RecoverPassword';
import QrCodeGenerator from './components/features/qrGenerator/QrCodeGenerator';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AppLanding/>} />
        <Route path="/game-lobby" element={<GameLobby />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/recover-password" element={<RecoverPassword/>} />

        {/* Rutas protegidas  */}
        <Route path="/game" element={<ProtectedRoute component={<Game/>} />} />
        <Route path="/scanner" element={<ProtectedRoute component={<QrReader/>} />} />
        <Route path="/qr-generator" element={<ProtectedRoute component={<QrCodeGenerator/>} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App
