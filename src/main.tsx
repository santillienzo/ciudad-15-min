import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { RouterProvider } from "react-router-dom";
// import router from "./routes/routes.tsx";
import AppLanding from "./AppLanding.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router}> */}
      <ChakraProvider>
        {/* <App /> */}
        <AppLanding />
      </ChakraProvider>
    {/* </RouterProvider> */}
  </StrictMode>
);
