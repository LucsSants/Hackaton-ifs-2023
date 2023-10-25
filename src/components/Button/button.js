import React from 'react'
import './button.css'

function Button({label, ...rest}) {
  return (
    <div className='input-wrap'>
          <label>{label}</label>
          <input 
            {...rest}
            />
        </div>
  )
}
 export default Button