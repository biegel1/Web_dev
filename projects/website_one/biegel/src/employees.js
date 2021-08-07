import React from 'react';
import './index.css';
import tb from './images/biegel_tobias.jpg';
import HeaderSecondLevel from './utils.js'; 


export default function EmployeeSection(){
  return (
    <div className = 'bg-gray-100 p-8'>
      <HeaderSecondLevel value = 'Unser Team'/>
      <Employees/>
    </div>
  )
}

function Employees(){
  const listOfEmployees = [{
    name: 'Max Mustermann',
    description: 'Max Mustermann Junior ist der Geschäftsführer des Unternehmens und ist zuständig für die Betriebsleitung, Vertrieb und vieles mehr',
    position: 'CEO',
    picture: tb,
  },
  {
    name: 'Max Mustermann', 
    description: 'Max Mustermann ist die Geschäftsführerin des Unternehmens und seit über 50 Jahre für das Controlling zuständig.',
    position:'R&D',
    picture: tb,
  },
  {
    name: 'Max Mustermann', 
    description: 'Max Mustermann ist die Geschäftsführerin des Unternehmens und seit über 50 Jahre für das Controlling zuständig.',
    position:'Montage',
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
      <div className="group flex-grow-0 max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden md:max-w-2xl m-12 2xl:max-w-screen-2xl">
        <div className="group-hover:bg-gray-100 md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-auto w-full object-cover md:h-full md:w-48" src={picture} alt="Tobias Biegel"/>
          </div>
          <div className="p-8 ">
            <p className="block mt-1 text-l leading-tight font-bold text-black">
              {name}
            </p>
            <p className="mb-2 text-l text-indigo-400 font-medium">
              {position}
            </p>
            <div className="tracking-wide text-sm text-gray-400 font-semibold h-24">
              <p>
                {description}              
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
