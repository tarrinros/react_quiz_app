import React from 'react';
import classes from './AnswersList.module.css'

const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {

      })}
    </ul>
  );
}

export default AnswersList;
