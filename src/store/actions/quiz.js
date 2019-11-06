import axios from '../../axios/axios-quiz'
import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE
} from "./actionTypes";

export function fetchQuizes() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get('/quizes.json');
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Test #${index + 1}`
        });
      });

      dispatch(fetchQuizesSuccess(quizes))
    } catch (e) {
      dispatch(fetchQuizesError(e))
    }
  }
}

export function fetchQuizById(quizId) {
  return async dispatch => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get(`/quizes/${quizId}.json`)
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz))
    } catch (e) {
      dispatch(fetchQuizesError(e))
    }
  }
}

export function quizAnswerClick(answerId) {
  return (dispatch, getState) => {
    const state = getState().quiz;

    // Fix to avoid double clicking handling
    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === 'success') {
        return
      }
    }

    const question = state.quiz[state.activeQuestion];
    const results = state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      dispatch(quizSetState({[answerId]: 'success'}, results));

      // Returns the message if answer is correct and clears timeout to avoid memory leak
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          // this.setState({
          //   isFinished: true
          // })
        } else {
          // Switches question to the next one
          // this.setState({
          //   activeQuestion: this.state.activeQuestion + 1,
          //   answerState: null
          // })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error';

      // Sets state if wrong answer
      dispatch(quizSetState({[answerId]: 'error'}, results));
    }
  }
}

// Action creators
export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START
  }
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes
  }
}

export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz
  }
}

export function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState, results
  }
}

// export function fetchAnswerSuccess(answer) {
//   return {
//     type: FETCH_ANSWER_SUCCESS,
//     answer
//   }
// }

export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e
  }
}
