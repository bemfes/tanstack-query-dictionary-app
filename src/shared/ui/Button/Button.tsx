import type { FC } from "react"
import type { ButtonProps } from "./types"
import './Button.css'


const Button: FC<ButtonProps> = ({children, className, onClick}) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
