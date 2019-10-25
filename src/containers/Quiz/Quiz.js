import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 1,
        answers: [
          {text: 'Голубое', id: 1},
          {text: 'Зеленое', id: 2},
          {text: 'Желтое', id: 3},
          {text: 'Розовое', id: 4}
        ]
      }
    ]
  };

  onAnswerClickHandler (answerId) {
    console.log('Answer Id:', answerId)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
