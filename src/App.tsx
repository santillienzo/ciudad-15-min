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
import ListQrGenerator from './components/views/qrGenerator/ListQrGenerator';
import Ranking from './components/views/game/Ranking';
import GameQr from './components/views/qrGenerator/GameQr';
import FinishEventQr from './components/views/qrGenerator/FinishEventQr';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AppLanding/>} />
        <Route path="/lobby" element={<GameLobby />} />
        <Route path="/iniciar-sesion" element={<Login/>} />
        <Route path="/registrarse" element={<Register/>} />
        <Route path="/recuperar-contraseña" element={<RecoverPassword/>} />

        {/* Rutas protegidas  */}
        <Route path="/juego" element={<ProtectedRoute component={<Game/>} />} />
        <Route path="/ranking" element={<ProtectedRoute component={<Ranking/>} />} />
        <Route path="/lector-qr" element={<ProtectedRoute component={<QrReader/>} />} />
        <Route path="/generador-lista-qr" element={<ProtectedRoute component={<ListQrGenerator/>} />} />
        <Route path="/generador-juego-qr" element={<ProtectedRoute component={<GameQr/>} />} />
        <Route path="/generador-finalizar-qr" element={<ProtectedRoute component={<FinishEventQr/>} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App
