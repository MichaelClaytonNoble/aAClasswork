import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{

  constructor(){
    super();
    this.state = {date: new Date()};

  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick(){
    this.setState({date: new Date()});
  }
  render(){
    return (
    <div>
      <h1>Clock!!!!!!!!!!!!!</h1>
      <h2>{this.state.date.map}</h2>
    </div>);
  }

}

export default Clock;

