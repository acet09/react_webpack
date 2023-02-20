import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));

// import Module from './module'
// const root = document.querySelector("#root");
// root.innerHTML = Module

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');
//   const myAlert = require('./components/myAlert').default;

//   btn.innerHTML = 'Click me';
//   btn.onclick = myAlert;

//   element.appendChild(btn);
//   return element;
// }

// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./components/myAlert.js', () => {
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   })
// }
