import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input"

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

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          label={control.label} 
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
