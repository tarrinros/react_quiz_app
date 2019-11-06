import React, {Component} from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from 'react-redux'
import {fetchQuizById, quizAnswerClick} from "../../store/actions/quiz";

class Quiz extends Component {
  onAnswerClickHandler = (answerId) => {

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
  };

  componentDidMount() {
    console.log(this.props)
    this.props.fetchQuizById(this.props.match.params.id)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Please answer the questions</h1>
          {
            this.props.loading || !this.props.quiz
              ? <Loader/>
              : this.props.isFinished
                ? <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  onRetry={this.retryHandler}
                />
                : <ActiveQuiz
                  question={this.props.quiz[this.props.activeQuestion].question}
                  answers={this.props.quiz[this.props.activeQuestion].answers}
                  onAnswerClick={this.onAnswerClickHandler}
                  quizLength={this.props.quiz.length}
                  answerNumber={this.props.activeQuestion + 1}
                  answerState={this.props.answerState}
                />
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    answerState: state.quiz.answerState,
    activeQuestion: state.quiz.activeQuestion,
    isFinished: state.quiz.isFinished,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
