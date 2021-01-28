import React from "react";
import ReactDOM from "react-dom"


export default class Tile extends React.Component{
  constructor (props){
    super(props); 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.updateGame(this.props.tile, true);

  }

  render(){
    const tile = this.props.tile;
    let symbol;
    if (tile.flagged) {
        symbol ="🏳️‍🌈"
    }

    if (tile.explored) {
        let count = tile.adjacentBombCount()
        if (tile.bombed) {
            symbol ="💣";
        }
        if (count > 0) {
            symbol = `${count}`;
        }
        symbol = "▩";
    }

    if (!tile.explored) {
        symbol ="▩";
    }

    //set up event listener
    return <span className="tile" key={this.props.key} onClick={this.handleClick}>{symbol}</span>
  }
}
