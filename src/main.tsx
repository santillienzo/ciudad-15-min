import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner'
import { APIProvider } from "@vis.gl/react-google-maps";

const mapApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <APIProvider apiKey={mapApiKey}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </APIProvider>
      <Toaster richColors position='top-center'/>
  </StrictMode>
);