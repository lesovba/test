import React from 'react';
import s from './Header.module.css';
import Title from './Title';
import MainIntro from './MainIntro';
import Question from './Question/Question';


const Header = (props) => {
  let index = props.state.number - 1;
  return (
    <div className={s.main}>
      <Title/>
      <MainIntro getQuantity={props.getQuantity}/>
      <Question
        answer={props.state.answer}
        text={props.state.questions.item[index].text}
        index={props.state.number}
        getGo={props.getGo}
        getQuantity={props.getQuantity}
        countTrue={props.state.countTrue}
        countFalse={props.state.countFalse}
      />
    </div>
  )
}

export default Header;