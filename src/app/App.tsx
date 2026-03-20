import ThemeContextProvider from '@/shared/context/ThemeContext'
import './index.css'
import Header from '@/shared/ui/Header'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import SearchPage from '@/pages/SearchPage'

const queryClient = new QueryClient()

function App() {
  

  return (
    <ThemeContextProvider>
      <Header/>
      <QueryClientProvider client={queryClient}>
        <SearchPage/>
      </QueryClientProvider>
    </ThemeContextProvider>
  )
}

export default App
