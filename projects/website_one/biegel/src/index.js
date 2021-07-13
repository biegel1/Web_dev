import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';



function Employees(){
  const listOfEmployees = [{
    name: 'Max Mustermann',
    description: 'Max Mustermann Junior ist der Geschäftsführer des Unternehmens und ist zuständig für die Betriebsleitung, Vertrieb und vieles mehr'
  },
  {
    name: 'Max Mustermann', 
    description: 'Max Mustermann ist die Geschäftsführerin des Unternehmens und seit über 50 Jahre für das Controlling zuständig'
  }
];
  return (
    <div>
      {listOfEmployees.map((employee) => {
        return ( 
          <RenderEmployee key = {employee.toString()} employee = {employee}/>
        )
      })}
    </div>
  );
}

function RenderEmployee(props){
    const name = props.employee.name;
    const description = props.employee.description;
    return (
      <div class = 'flex space-x-4'>
        <button class = 'mb-8'>{name}</button>
        <button class = 'mb-8'>{description}</button>
      </div>
    );
}


ReactDOM.render(
  <div>
    <Employees/>
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
