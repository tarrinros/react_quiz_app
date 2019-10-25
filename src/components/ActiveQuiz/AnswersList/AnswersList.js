import React from 'react';
import classes from './AnswersList.module.css'
import AnswerItem from "./Answer/AnswerItem";

const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            index={index}
            answer={answer}
          />
        )
      })
      }
    </ul>
  );
}

export default AnswersList;
