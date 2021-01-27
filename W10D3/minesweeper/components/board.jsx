import React from "react";
import ReactDOM from "react-dom";
import Tile from './tile'
export default class Board extends React.Component {

    constructor(props){
        super(props);

    }
    
    render () {
        return(
            <div>
              {
                this.props.currentBoard.map( (row, i) => {
                  return (
                  <div key={i}>
                    {row.map( (tile, j)=> {
                      return <span key={j}><Tile tile={tile} updateBoard={this.props.updateBoard}/></span>
                    })}
                  </div>)
                })
              }
            </div>
        );
    }
}