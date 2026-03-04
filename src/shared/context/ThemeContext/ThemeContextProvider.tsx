import {  useEffect, useState, type FC } from "react"
import type {  ThemeContextProviderProps, ThemeType } from "./types"
import { ThemeContext } from "./context"




const ThemeContextProvider: FC<ThemeContextProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme
        return 'light'
    })


    function changeTheme() {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider


