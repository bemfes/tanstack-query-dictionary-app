import { type FC } from "react"
import Button from "../Button"
import { useThemeContext } from "@/shared/hooks/useThemeContext/useThemeContext"


const ThemeSwitcher: FC = () => {
    const { changeTheme } = useThemeContext()
    return (
        <div>
            <Button onClick={changeTheme}>click</Button>
        </div>
    )
}

export default ThemeSwitcher
