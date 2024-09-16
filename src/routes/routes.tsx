// Archivo donde se van a definir las diferentes rutas del sitio

import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../components/views/landingPage/Home";
import Sponsors from "../components/features/landingPage/Sponsors";
import Evento from "../components/views/landingPage/Evento";
import Reglas from "../components/views/landingPage/Reglas";
import AppLanding from "../components/views/landingPage/AppLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLanding />,
    // element: <App />,
    // errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: "/home",
    //     element: <Home />,
    //   },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/evento",
        element: <Evento />,
      },
      {
        path: "/reglas",
        element: <Reglas />,
      },
    ],
  },
]);

export default router;
