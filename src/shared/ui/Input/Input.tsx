import type { FC } from "react"
import type { InputProps } from "./types"

const Input: FC<InputProps> = ({type, placeholder, onChange, className, onKeyDown, value}) => {
    return (
        <input value={value} onKeyDown={onKeyDown} className={className} onChange={onChange} type={type} placeholder={placeholder} />
    )
}

export default Input
