import React from 'react';
import ReactDOM from 'react-dom'

class Weather extends React.Component{

  constructor(){
    super();
    this.state = {
      weather: null
    };
    this.getWeatherFromLocation = this.getWeatherFromLocation.bind(this);
  }

  componentDidMount(){
    this.getWeatherFromLocation();
  }


  getWeatherFromLocation(){
    navigator.geolocation.getCurrentPosition((geo) => {
      const lat = geo.coords.latitude;
      const lon = geo.coords.longitude;

      var request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=44f337ec0ac42522892a7ca67c58a701`, true);
      request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE){
        if (request.status >= 200 && request.status < 400) {
          // Success!
          // console.log(request.response);
          const data = JSON.parse(request.responseText);
          this.setState({weather: data})

        } else {
          // We reached our target server, but it returned an error
          // console.log("could not retrieve weather information");
        }
      }
      };

      request.onerror = function () {
        // There was a connection error of some sort
        // console.log("there was a connection error of some sort");
      };
      request.send();
    });
  }

  render(){
    const weather = this.state.weather;
    let cityName = 'loading ...';
    let temp;
    if(weather){
      cityName = weather.name;
      temp = weather.main.temp;
    }
    return (
    <div className="weather-widget">
      <div id="weather-city">{cityName}</div>
      <div id="weather-temp">{temp}</div>
    </div>
    )
  }
}


export default Weather;