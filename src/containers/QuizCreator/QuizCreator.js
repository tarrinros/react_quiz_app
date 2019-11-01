import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";

export default class QuizCreator extends Component {
  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {
    
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <h1>Create the quiz</h1>

        <form onSubmit={this.submitHandler}></form>
        <select></select>

        <Button
          type="primary"
          onClick={this.addQuestionHandler}
        >
          Add question
        </Button>

        <Button
          type="success"
          onClick={this.createQuizHandler}
        >
          Create quiz
        </Button>
      </div>
    )
  }
}
