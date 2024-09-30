import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReactNode } from "react";

type Props = {
    component: ReactNode; // Componente que se renderizará si el usuario está autenticado
}

const ProtectedRoute = ({ component:Component }: Props) => {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>; // Muestra un indicador de carga mientras verificas la sesión
  }

  // Si no está autenticado, redirige al login
  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el componente protegido
  return Component;
};

export default ProtectedRoute;
