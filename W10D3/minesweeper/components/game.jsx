import React from 'react'
import ReactDOM from 'react-dom'
import * as Minesweeper from '../minesweeper.js'
import Board from "./board";

export default class Game extends React.Component{

  // constructor(props){
    // super(props);
    // this.state = {board: new Minesweeper.Board(this.props.gridSize, this.props.numBombs)}
  constructor(){
    this.state = {
      board: new Minesweeper.Board(9, 14)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(){ }
  
  render(){
    
    return (
      // <Board currentBoard={this.state.board} updateGame={this.updateGame}/>
      // <Board/>
      <div>Hello!</div>
      )
    };
    
}
