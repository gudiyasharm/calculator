import React from 'react'
import './Button.css'

function Buttons({label, color, handleClick}) {
  return (
    <div
    onClick={() =>handleClick(label)}
    className='buttonStyle' style={{color: color}}>
      {label}
    </div>
  )
}

export default Buttons