import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";
import {createControl} from "../../form/formFramework"

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: {
      question: createControl({
        label: 'Enter the question',
        errorMessage: 'Question can`t be blank'
      }, {required: true}),
      option_1: createControl({
        label: 'Answer 1',
        errorMessage: 'Field can`t be blank'
      }),
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
