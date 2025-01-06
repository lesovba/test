import React from 'react';
import s from '../Header.module.css';

const QuestionNumber = (props) => {
  return (
    <div className={s.mainQuestion__quantity}>
      Вопрос
      <span className="current">&ensp;{props.index}</span>
      <span> из </span>
      <span className="total">{props.getQuantity()}</span>
    </div>
  )
}

export default QuestionNumber;