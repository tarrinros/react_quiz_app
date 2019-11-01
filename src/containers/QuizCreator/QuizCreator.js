import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";
import {createControl} from "../../form/formFramework"

function createOptionControl(number) {
  return createControl({
    label: `Answer ${number}`,
    errorMessage: 'Field can`t be blank',
    id: number
  }, {required: true})
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: {
      question: createControl({
        label: 'Enter the question',
        errorMessage: 'Question can`t be blank'
      }, {required: true}),
      option_1: createOptionControl(1),
      option_2: createOptionControl(2),
      option_3: createOptionControl(3),
      option_4: createOptionControl(4)
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
