import React from "react";
import ReactDOM from "react-dom";

export default class Board extends React.Component {

    constructor(props){
        super(props);

    }
    
    render () {
        return(
            <div>
                {/* {
                    this.props.currentBoard.map(row => {
                        return <div>{row}</div>
                    })
                } */}
                Board
            </div>
        );
    }
}