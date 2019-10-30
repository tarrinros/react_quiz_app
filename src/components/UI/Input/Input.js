import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  const inputType = props.type || 'text'
  const inputClasses = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  return (
    <div className={inputClasses.join(' ')}>
      <label htmlFor="">{props.label}</label>
      <input 
        type="text" 
        id={htmlFor} 
        value={props.value} 
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input