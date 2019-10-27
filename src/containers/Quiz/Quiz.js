import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {}, // {[id]: 'success' 'error'}
    answerState: null, // {[id]: 'success' 'error'}
    activeQuestion: 0,
    isFinished: false,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 1,
        id: 1,
        answers: [
          {text: 'Голубое', id: 1},
          {text: 'Зеленое', id: 2},
          {text: 'Желтое', id: 3},
          {text: 'Розовое', id: 4}
        ]
      },
      {
        question: 'Что ты ел на обед? Брю..',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'Ки', id: 1},
          {text: 'Хо', id: 2},
          {text: 'Кву', id: 3},
          {text: 'Лок', id: 4}
        ]
      },
      {
        question: 'Почему люди не летают, как птицы?',
        rightAnswerId: 1,
        id: 3,
        answers: [
          {text: 'Летают лучше', id: 1},
          {text: 'Потому что не могут', id: 2},
          {text: 'Страшно', id: 3},
          {text: 'Не знаю', id: 4}
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    // Fix to avoid double clicking handling
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] ='success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });

      // Returns the message if answer is correct and clears timeout to avoid memory leak
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          // Switches question to the next one
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      // Sets state if wrong answer
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Please answer the questions</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz 
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                />
              : <ActiveQuiz
                question={this.state.quiz[this.state.activeQuestion].question}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                answerState={this.state.answerState}
              />
          }
        </div>
      </div>
    );
  }
}

export default Quiz;
