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
                        if (j%3 === 0) {
                            tile.plantBomb();
                            tile.explored = true;
                        }

                        if (j%2 === 0 && i%2 === 0) {
                            tile.flagged = true;
                        }
                      return <span className="tile" key={j}><Tile tile={tile} updateBoard={this.props.updateBoard}/></span>
                    })}
                  </div>)
                })
              }
            </div>
        );
    }
}