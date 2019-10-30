import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input"

export default class Auth extends Component {
  loginHandler = () => {

  }

  signUpHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Autherization</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input label={'Email'} />
            <Input label={'Password'} />
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
