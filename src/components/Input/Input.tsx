import React, { useState } from 'react'
import './Input.css'


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    border: 'white' | 'gray' | 'black';
    placeholderText?: string;
}

const Input: React.FC<InputProps> = ({ border, placeholderText, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);



    const borderClass = () => {
        if (border === 'white') {
            return {
                border: isFocused ? '2px solid white' : '1px solid white'
            }
        };
        if (border === 'gray') {
            return {
                border: isFocused ? '2px solid #7B7B7B' : '1px solid #7B7B7B'
            }
        };
        if (border === 'black') {
            return {
                border: isFocused ? '2px solid #010B13' : '1px solid #010B13'
            }
        };
        return {
            border: '1px solid gray'
        }

    };
    return (
        <input style={{ ...borderClass(), ...props.style }} type="text" placeholder={placeholderText} {...props}
            onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} >
        </input>
    )
}

export default Input