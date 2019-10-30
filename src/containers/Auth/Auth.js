import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input"

function validateEmail(email) {
  const re = /^[^@]+@[^@]+$/i;
  return re.test(String(email).toLowerCase());
}

export default class Auth extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Please enter the correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Please enter the password correctly',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  signUpHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  valdateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid
    }

    
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}`, event.target.value)

    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.valdateControl(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          label={control.label} 
          errorMessage={control.errorMessage}
          valid={control.valid}
          touched={control.touched}
          // '!!' - converts to the boolean type
          shouldValidate={!!control.validation}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Autherization</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            
            {this.renderInputs()}
            
            <Button
              type="success"
              onClick={this.loginHandler}
            >Login</Button>
           
            <Button
              type="primary"
              onClick={this.signUpHandler}
            >Sign up</Button>
          </form>
        </div>
      </div>
    )
  }
}
