import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";

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
          <form onSubmit={this.submitHandler}>
            <input type="text"/>
            <input type="text"/>

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
