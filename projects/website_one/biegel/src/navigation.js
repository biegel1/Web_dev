import React from 'react';
import './index.css';
import { BriefcaseIcon } from '@heroicons/react/solid'
import {UserGroupIcon} from '@heroicons/react/solid'
import {BookOpenIcon} from '@heroicons/react/solid'
import {PhoneIcon} from '@heroicons/react/solid'

export default function NavigationBar(){
  const items = ['Historie', 'Angebot', 'Team', 'Kontakt']; 
  return (
    <NavigationList items = {items}/>
  );
}

function NavigationList(props){
  const items = props.items
  const styles = 'mr-1 h-6 w-6'
  const icons = [
    <BookOpenIcon className = {styles}/>,
    <BriefcaseIcon className = {styles}/>,
    <UserGroupIcon className = {styles}/>,
    <PhoneIcon className = {styles}/>, 
  ]
  return (
    <div className = 'py-5'>
      <div className = 'flex bg-white bg-opacity-95 p-1 w-full fixed justify-center top-0'>
          <ul>
            {items.map((item, i) =>{
              return (
                <div key = {i.toString()} className = 'inline-block '>
                  <li key = {i.toString()} className ='cursor-pointer text-gray-500 flex p-1 mx-12 text-base sm:text-base hover:text-black'>
                    {icons[i]}
                    {item}
                  </li>
                </div>
              )
            })}
          </ul>
      </div>
    </div>
  )
}
