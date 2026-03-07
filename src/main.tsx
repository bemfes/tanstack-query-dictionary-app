import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app/App.tsx'
import { ErrorBoundary } from 'react-error-boundary'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<p>There seems to have been an error, please try refreshing the page.</p>}>
  <StrictMode>
    <App />
  </StrictMode>
  </ErrorBoundary>,
)
