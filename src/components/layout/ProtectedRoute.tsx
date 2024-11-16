import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReactNode } from "react";

type Props = {
    component: ReactNode; // Componente que se renderizará si el usuario está autenticado
    adminOnly?: boolean; // Si es true, solo se renderizará si el usuario es administrador
}

const ProtectedRoute = ({ component:Component, adminOnly = false }: Props) => {
  const { isAuth, loading, userData } = useAuth();

  if (loading) {
    return <div>Cargando...</div>; // Muestra un indicador de carga mientras verificas la sesión
  }

  // Si no está autenticado, redirige al login
  if (!isAuth()) {
    return <Navigate to="/iniciar-sesion" />;
  }

  if (adminOnly && !userData?.isAdmin) {
    return <Navigate to="/lobby" />;
  }

  // Si está autenticado, renderiza el componente protegido
  return Component;
};

export default ProtectedRoute;
