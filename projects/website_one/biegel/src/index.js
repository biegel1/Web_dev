import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import tb from './images/biegel_tobias.jpg';
import { BriefcaseIcon } from '@heroicons/react/solid'



function Employees(){
  const listOfEmployees = [{
    name: 'Max Mustermann',
    description: 'Max Mustermann Junior ist der Geschäftsführer des Unternehmens und ist zuständig für die Betriebsleitung, Vertrieb und vieles mehr',
    position: 'CEO',
    picture: tb,
  },
  {
    name: 'Max Mustermann', 
    description: 'Max Mustermann ist die Geschäftsführerin des Unternehmens und seit über 50 Jahre für das Controlling zuständig',
    position:'R&D',
    picture: tb,
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
      <div className="flex-grow-0 max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden md:max-w-2xl m-12">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-auto w-full object-cover md:h-full md:w-48" src={picture} alt="Tobias Biegel"/>
          </div>
          <div className="p-8">
            <div className="tracking-wide text-sm text-black font-semibold">
              {description}              
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-indigo-400">
              {name}
            </p>
            <p className="mt-2 text-gray-500">
              {position}
            </p>
          </div>
        </div>
      </div>
    );
}

function NavigationBar(){
  const items = ['Historie', 'Unser Angebot', 'Unser Team']; 
  return (
    <NavigationList items = {items}/>
  );
}

function NavigationList(props){
  const items = props.items
  return (
    <div className = 'bg-gray-100'>
      <ul>
        {items.map((item, i) =>{
          return (
            <div>
              <BriefcaseIcon className = 'h-5 w-5 text-black-400'/>
              <li key = {i.toString()} className = 'hover:text-red-400'>{item}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
  
}


ReactDOM.render(
  <div>
    <NavigationBar/>
    <Employees/>
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
