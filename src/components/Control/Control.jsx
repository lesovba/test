import React from 'react';
import s from './Control.module.css';

const Control = (props) => {
  const onwards = () => {
    props.addAnswer();
  }
  return (
    <button className={s.nextQuestion} onClick={onwards}>Дальше »</button>
  )
}

export default Control;