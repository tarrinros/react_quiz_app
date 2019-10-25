import React from 'react';
import classes from './AnswerItem.module.css'

const AnswerItem = (props) => {
  return (
    <li className={classes.AnswerItem}>
      {props.index + 1}.&nbsp; {props.answer.text}
    </li>
  )
};

export default AnswerItem;
