import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Options from './components/Options/Options';
import Control from './components/Control/Control';

function App(props) {
  return (
    <div className="appWrapper">
      <Header state={props.state} getGo={props.getGo} getQuantity={props.getQuantity}/>
      <Options state={props.state}
          versionAnswer={props.versionAnswer}
          getGo={props.getGo}
          shuffleOptions={props.shuffleOptions}/>
      <Control addAnswer={props.addAnswer} getGo={props.getGo} state={props.state} />
    </div>
  )
}

export default App;