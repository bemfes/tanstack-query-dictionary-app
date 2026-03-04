import ThemeContextProvider from '@/shared/context/ThemeContext'
import './index.css'
import Header from '@/shared/ui/Header'


function App() {
  

  return (
    <ThemeContextProvider>
      <Header/>
    </ThemeContextProvider>
  )
}

export default App
