import type { FC } from "react"
import ThemeSwitcher from "../ThemeSwitcher"
import './Header.css'
import IconBook from '@/shared/assets/icon-book.svg?react'

const Header: FC = () => {
    return (
        <header className="header">
            <IconBook className="icon-book"/>
           <ThemeSwitcher/> 
        </header>
    )
}

export default Header
