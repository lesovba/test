import React from 'react';
import s from '../Header.module.css';
import Circle from './Circle';
import QuestionNumber from './QuestionNumber';
import QuestionText from './QuestionText';

const Question = (props) => {
  return (
    <div className={s.mainQuestion}>
      <QuestionNumber index={props.index} getQuantity={props.getQuantity}/>
      <Circle
        answer={props.answer}
        countTrue={props.countTrue}
        countFalse={props.countFalse}
      />
      {props.getGo()
        ? <QuestionText text={props.text} index={props.index}/>
        : <></>
      }
    </div>
  )
}

export default Question;