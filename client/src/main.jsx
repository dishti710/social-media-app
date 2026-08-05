import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import {Provider} from "react-redux";
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
      <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
        <BrowserRouter>
          <Provider store={store}>
          <StrictMode>
            <App />
          </StrictMode>
            </Provider>
        </BrowserRouter>
      </ClerkProvider>
,
)
