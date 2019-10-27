import React from 'react';
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you?!
          <i className={'fa fa-times ' + classes.error}></i>
        </li>
        <li>
          <strong>1. </strong>
          How are you?!
          <i className={'fa fa-check ' + classes.success}></i>
        </li>
      </ul>

      <p>4 of  10 are correct</p>

      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
}

export default FinishedQuiz;