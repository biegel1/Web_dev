import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function FormattedDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render(){
    return (
      <button onClick = {this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }

}
ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
