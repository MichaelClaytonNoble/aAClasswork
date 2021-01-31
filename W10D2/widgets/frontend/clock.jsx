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
  }

  tick(){
    this.setState({date: new Date()});
  }
  render(){

    const seconds = this.state.date.getSeconds();
    const minutes = this.state.date.getMinutes();
    const hours = this.state.date.getHours();
    const day = this.state.date.getDay();
    const date = this.state.date.getDate();
    const month = this.state.date.getMonth();
    const year = this.state.date.getFullYear();
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


    return (
    <div className="clock-widget">
        <div className="time">
          <span id="time1">Time:</span> <span id="time2"> {hours}:{minutes}:{seconds} PDT</span>
        </div>
        <br />
        <div className="date">
          <span id="date1">Date:</span> <span id="date2">{days[day]} {months[month]} {date} {year}</span>
        </div>
    </div>);
  }

}

export default Clock;

