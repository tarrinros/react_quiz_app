import React from 'react';
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
  const answerClasses = [classes.AnswerItem];

  if (props.answerState) {
    answerClasses.push(classes[props.answerState])
  }

  return (
    <li
      className={answerClasses.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
};

export default AnswerItem;
