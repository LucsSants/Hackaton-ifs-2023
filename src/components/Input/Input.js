import React from 'react'
import './input.css'

function Input({label, ...rest}) {
  return (
    <div className='input-wrap'>
          <label>{label}</label>
          <input 
            {...rest}
            />
        </div>
  )
}
 export default Input