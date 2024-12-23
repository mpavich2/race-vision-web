import { Provider } from '@/components/ui/provider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ScrollProvider } from './context/scrollContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
      <Provider>
        <App />
      </Provider>
    </ScrollProvider>
  </StrictMode>,
)
