import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = (props) => {
  const inputType = props.type || 'text'
  const inputClasses = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    inputClasses.push(classes.invalid)
  }

  return (
    <div className={inputClasses.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type="text"
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Enter the correct information'}</span>
          : null
      }
    </div>
  )
}

export default Input