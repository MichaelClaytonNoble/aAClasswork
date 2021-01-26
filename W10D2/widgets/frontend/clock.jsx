import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{

  constructor(){
    super();
    this.state = {date: new Date()};
    this.intervalId;
  }

  componentDidMount() {
    this.intervalId = (setInterval(this.tick.bind(this), 1000));
  }
  //how often is unmount being called ? 
  componentWillUnmount(){
    clearInterval(this.intervalId);
    debugger;
  }

  tick(){
    this.setState({date: new Date()});
  }
  render(){

    const seconds = this.state.date.getSeconds();
    const minutes = this.state.date.getMinutes();
    const hours = this.state.date.getHours();

    return (
    <div>
      <h1>Clock!!!!!!!!!!!!!</h1>
      <h2>{hours} : {minutes} : {seconds}</h2>
    </div>);
  }

}

export default Clock;

