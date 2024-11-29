import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlogProvider from './contexts/BlogContextProvider'
import App from './App'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </StrictMode>,
)
