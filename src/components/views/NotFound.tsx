import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/lobby');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-secondary">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <button 
        onClick={handleGoBack}
        className="px-6 py-3 bg-background-primary text-white rounded-lg hover:bg-opacity-90 transition-all cursor-pointer"
      >
        Volver al inicio
      </button>
    </div>
  )
}

export default NotFound