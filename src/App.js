import './App.css';
import CurrentWeather from './Component/current-weather';
import Search from './Component/Search';
import { useState } from "react";


function App(props) {


  const [cityData, setCityData] = useState('');
  const cityInfo = (resJson) => {
    setCityData({
      ...cityData, name: resJson['name'],
      weather_description:resJson.weather[0]['main'],
      temp: resJson.main['temp'],
      humidity: resJson.main['humidity'],
      feels_like: resJson.main['feels_like'],
      wind:resJson.wind['speed'],
      pressure:resJson.main['pressure'],
      icon:resJson.weather[0]['icon']
    });
    // console.log(cityData);
    // temp: props.resJson['temp']

  }
  return (
    <div className="container">
      <Search getCityInfo={cityInfo} />
      <CurrentWeather city={cityData} />
    </div>
  );
}

export default App;
