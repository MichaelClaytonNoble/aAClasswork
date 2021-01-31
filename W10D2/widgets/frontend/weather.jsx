import React from 'react';

class Weather extends React.Component{

  constructor(){
    super();
    this.state = {
      weather: null
    };
    // this.getWeatherFromLocation();
  }

  componentDidMount(){
    this.getWeatherFromLocation();
  }


  getWeatherFromLocation(){
    navigator.geolocation.getCurrentPosition((geo) => {
      const lat = geo.coords.latitude;
      const lon = geo.coords.longitude;

      var request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=44f337ec0ac42522892a7ca67c58a701`, true);

      request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          var resp = this.response;
          console.log(resp);
        } else {
          // We reached our target server, but it returned an error
          console.log("could not retrieve weather information");
        }
      };

      request.onerror = function () {
        // There was a connection error of some sort
        console.log("there was a connection error of some sort");
      };
      request.send();
    });
  }

  render(){
    return <div>loading weather...</div>
  }
}


export default Weather;