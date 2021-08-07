import React from "react";
import './index.css';


export default function MainHeader(){
  return(
    <div className = 'bg-gray-800 p-8'>
      <h1 className = 'text-xl text-center font-bold text-white sm:text-center sm:text-7xl sm:p-2'>Grabmale H. Biegel GmbH</h1>
      <div className = 'text-base text-center font-bold text-white sm:p-2 sm:text-4xl sm:text-center'>
        <h2> Steinmetz u. Bildhauer Meisterbetrieb</h2>
      </div>
    </div>
  )
}
