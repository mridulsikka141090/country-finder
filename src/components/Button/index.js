import React from 'react'

const Button = ({ text, onClick, children }) => {
    return <button className='button' onClick={onClick}>
        { children && <span className='icon'>{children}</span> }
        <span>{text}</span>
        </button>
}

export default Button;