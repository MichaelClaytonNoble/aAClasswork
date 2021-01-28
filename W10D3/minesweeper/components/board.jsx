import React from "react";
import ReactDOM from "react-dom";
import Tile from './tile'
export default class Board extends React.Component {

    constructor(props){
        super(props);

    }
    
    render () {
        return(
            <div className="main-board-div">
              {
                this.props.currentBoard.map( (row, i) => {
                  return (
                  <div className="row-div" key={i}>
                    {row.map( (tile, j)=> {
                      return <Tile tile={tile} updateGame={this.props.updateGame} key={j}/>
                    })}
                  </div>)
                })
              }
            </div>
        );
    }
}