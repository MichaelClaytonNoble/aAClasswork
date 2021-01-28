import React from "react";
import ReactDOM from "react-dom"

const Tile = (props) => {
    const tile = props.tile;
    
    if (tile.flagged) {
        return("🏳️‍🌈")
    }

    if (tile.explored) {
        let count = tile.adjacentBombCount()
        if (tile.bombed) {
            return("💣");
        }
        if (count > 0) {
            return (`${count}`);
        }
        return ("▩");
    }

    if (!tile.explored) {
        return("▩");
    }

}

export default Tile;