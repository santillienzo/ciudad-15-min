import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner'
import { APIProvider } from "@vis.gl/react-google-maps";
import { MAPS_API_KEY } from '@/lib/config';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <APIProvider apiKey={MAPS_API_KEY}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </APIProvider>
      <Toaster richColors position='top-center'/>
  </StrictMode>
);
