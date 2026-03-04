import { ThemeContext } from "@/shared/context/ThemeContext"
import { useContext } from "react"

export const useThemeContext = () => {
    return useContext(ThemeContext)
}