import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppLanding from "./components/views/landingPage/AppLanding.tsx";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <Toaster richColors position='top-center'/>
      </ChakraProvider>
  </StrictMode>
);
