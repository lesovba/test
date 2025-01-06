import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {subscribe, getState, versionAnswer, getQuantity, addAnswer, getGo, shuffleOptions}
      from './redus/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <App state={props}
        versionAnswer={versionAnswer}
        addAnswer = {addAnswer}
        getGo={getGo}
        shuffleOptions={shuffleOptions}
        getQuantity={getQuantity}
      />
    </React.StrictMode>
  );
}
renderEntireTree(getState());

subscribe(renderEntireTree);