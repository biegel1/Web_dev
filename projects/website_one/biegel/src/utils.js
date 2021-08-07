import React from 'react'; 

export default function HeaderSecondLevel(props){
  const header = props.value;
  return (
    <div>
      <h2 className = 'text-base sm:text-4xl text-center font-bold text-black'>{header}</h2>
    </div>
  )
}