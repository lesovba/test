import React from 'react';
import s from '../Header.module.css';

const QuestionText = (props) => {
   return (
    <div className={s.mainQuestion__text}>
      <p>
        <span>{props.index}. </span>
        <span>{props.text}</span>
      </p>
    </div>
  )
}

export default QuestionText;