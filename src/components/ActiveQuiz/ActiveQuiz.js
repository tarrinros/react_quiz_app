import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>1.</strong>&nbsp;
          Как дела?
        </span>

        <small>4 из 12</small>
      </p>

      <AnswersList/>
    </div>
  );
};

export default ActiveQuiz;
