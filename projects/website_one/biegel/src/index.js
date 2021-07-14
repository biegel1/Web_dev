import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import logo from './images/biegel_tobias.jpg';



function Employees(){
  const listOfEmployees = [{
    name: 'Max Mustermann',
    description: 'Max Mustermann Junior ist der Geschäftsführer des Unternehmens und ist zuständig für die Betriebsleitung, Vertrieb und vieles mehr',
    position: 'CEO',
    picture: logo,
  },
  {
    name: 'Max Mustermann', 
    description: 'Max Mustermann ist die Geschäftsführerin des Unternehmens und seit über 50 Jahre für das Controlling zuständig',
    position:'R&D',
    picture:logo,
  }
];
  return (
    <div>
      {listOfEmployees.map((employee, i) => {
        return ( 
          <RenderEmployee key = {i.toString()} employee = {employee}/>
        )
      })}
    </div>
  );
}

function RenderEmployee(props){
    const name = props.employee.name;
    const description = props.employee.description;
    const position = props.employee.position;
    const picture = props.employee.picture;
    return (
      <div className = 'pt-6 shadow-2xl w-auto'>
        <figure className =  'flex bg-gray-100 p-8'>
          <img className = 'w-32 h-30' src = {picture} alt = 'Tobias Biegel' />
          <div className = 'pt-6 pl-4 text-left space-y-4'>
            <p className = 'text-lg font-semibold'>
              {description}
            </p>
            <figcaption className = 'font-medium'>
              <div className = 'text-cyan-600'>
                {name}
              </div>
              <div className = 'text-gray-500'>
                {position}
              </div>
            </figcaption>
          </div>
        </figure>
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
