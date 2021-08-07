import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './navigation.js';
import MainHeader from './main_header.js';
import EmployeeSection from './employees.js';
import History from './history.js'; 


ReactDOM.render(
  <div>
    <NavigationBar/>
    <MainHeader/>
    <History/>
    <EmployeeSection/>
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
