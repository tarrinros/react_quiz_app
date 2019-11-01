import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: {
      question: '',
      option_1: '',
      option_2: '',
      option_3: '',
      option_4: ''
    }
  }

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
        <div>
          <h1>Create the quiz</h1>
        

          <form onSubmit={this.submitHandler}>
            <input type="text"/>
            <hr/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>

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
          </form>
        </div>
      </div>
    )
  }
}
