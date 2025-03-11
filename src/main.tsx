import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProviderContainer from './app-provider-container'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviderContainer />
  </StrictMode>,
)
