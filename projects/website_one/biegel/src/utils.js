import React from 'react'; 

export default function HeaderSecondLevel(props){
  const header = props.value;
  return (
    <div>
      <h2 className = 'text-center font-bold text-black text-4xl'>{header}</h2>
    </div>
  )
}