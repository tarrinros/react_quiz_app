import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"
import Select from "../../components/UI/Select/Select"
import { createControl } from "../../form/formFramework"
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function createOptionControl(number) {
  return createControl({
    label: `Answer ${number}`,
    errorMessage: 'Field can`t be blank',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
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

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    rightAswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (controlName, value) => {
  }

  selectChangeHandler = (event) => {
    this.setState({
      rightAswerId: +event.target.value
    })
  }

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr/> : null }
        </Auxiliary>
      )
    })
  }

  render() {
    const select = <Select 
                      label='Choose right answer'
                      value={this.state.rightAswerId}
                      onChange={this.selectChangeHandler}
                      options={[
                        {text: 1, value: 1},
                        {text: 2, value: 2},
                        {text: 3, value: 3},
                        {text: 4, value: 4}
                      ]}
                    />
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Create the quiz</h1>

          <form onSubmit={this.submitHandler}>
            { this.renderInputs() }

            { select }
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
