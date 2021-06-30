import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function ButtonBoldFormatter(props){
  if(props.buttonBold){
    return (
      <button onClick = {props.onClick}>
        <b>
          {props.value}
        </b>
      </button>
    );
  }
  else{
    return (
      <button onClick = {props.onClick}>
        {props.value}
      </button>
    )
  }
}

function Square(props){
  return (
    <button 
      className = 'square' 
      onClick= {props.onClick}>
      {props.value}
    </button>
  ); 
}

function ConstructBoard(props){

}

class Board extends React.Component {
  renderSquare(i){
    return <Square  
      	value= {this.props.squares[i]}
        onClick = {() =>this.props.onClick(i)}/>; 
  }

  render(){
    return (
      <div>
        <div className = 'board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className = 'board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className = 'board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    ); 
  }
}
class Game extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      history: [{
        squares: Array(9).fill(null), 
      }],
      stepNumber: 0,
      xIsNext: true,
      index: Array(9).fill(null),
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1); 
    const current = history[history.length -1]; 
    const squares = current.squares.slice(); 
    const index = this.state.index.slice(); 

    if (calculateWinner(squares) || squares[i]){
      return; 
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'; 
    index[this.state.stepNumber]= getIndexOfMove(i);
    this.setState({
      history: history.concat([{
        squares: squares, 
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext, 
      index: index,
    })
  }


  jumpTo(step){
    this.setState({
      stepNumber: step, 
      xIsNext: (step%2 ===0), 
    });
  }

  render() {
    const history = this.state.history; 
    const current = history[this.state.stepNumber];
    const index = this.state.index;
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      const buttonStyle = {
        bold:false
      };
      const desc = move ?
        'Go to move #' + move + ' ' + index[move-1]:
        'Go to game start'; 
      if(move ===this.state.stepNumber){
        buttonStyle.bold = true;
      }

      return (
        <li key = {move}>
          <ButtonBoldFormatter onClick = {() => this.jumpTo(move)} buttonBold = {buttonStyle.bold} value = {desc}/>
        </li>
      );
    });

    let status; 
    if(winner) {
      status = 'Winner: ' + winner; 
    } else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return ( 
      <div className = 'game'>
        <div className = 'game-board'>
          <Board
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className = 'game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>

    ); 
  }
}

function getIndexOfMove(i){
    const indices_list = [
      '(1,1)',
      '(2,1)', 
      '(3,1)',
      '(1,2)',
      '(2,2)',
      '(3,2)',
      '(1,3)',
      '(2,3)',
      '(3,3)',
    ];
    return indices_list[i]
  }

function calculateWinner(squares){
  const winningLines = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for(let i = 0; i<winningLines.length; i++){
    const [a,b,c] = winningLines[i]; 
    if(squares[a]&&squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]; 
    }
  }
  return null; 
}


ReactDOM.render(
  <Game/>, 
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
