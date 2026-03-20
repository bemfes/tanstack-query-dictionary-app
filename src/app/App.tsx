import ThemeContextProvider from '@/shared/context/ThemeContext'
import './index.css'
import Header from '@/shared/ui/Header'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  

  return (
    <ThemeContextProvider>
      <Header/>
      <QueryClientProvider client={queryClient}>
        
      </QueryClientProvider>
    </ThemeContextProvider>
  )
}

export default App
