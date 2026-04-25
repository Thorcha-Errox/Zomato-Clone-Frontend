import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './context/AppContext.tsx';
import "leaflet/dist/leaflet.css";
import { SocketProvider } from './context/SocketContext.tsx';

export const authService = "https://zomato-clone-auth.onrender.com";
export const restaurantService = "https://zomato-clone-restaurant-services.onrender.com";
export const utilsService = "https://zomato-clone-utils-services.onrender.com";
export const realtimeService = "https://zomato-clone-realtime-services.onrender.com";
export const riderService = "https://zomato-clone-rider-services.onrender.com";
export const adminService = "https://zomato-clone-admin-services.onrender.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="417480107911-uj9esqhu528pnjfma3n17bv84udtibl3.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
