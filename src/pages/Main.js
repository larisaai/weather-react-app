import React, { Component } from "react";
import "../App.css";
import Titles from "../components/Titles";
import WeatherIcons from '../components/WeatherIcons';
require('dotenv').config();

export default class Main extends Component {
    state = {
        temperature: undefined,
        temperature_min:undefined,
        temperature_max:undefined,
        city: 'Copenhagen',
        country: 'Denmark',
        humidity: undefined,
        pressure: undefined,
        visibility:undefined,
        description: undefined,
        error: undefined
      };
      componentDidMount() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'Copenhagen'},${'Denmark'}&units=metric&appid=${process.env.REACT_APP_KEY}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                temperature: Math.floor(data.main.temp)  ,
                temperature_min: Math.floor(data.main.temp_min),
                temperature_max: Math.floor(data.main.temp_max),
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                visibility: data.visibility,
                description: data.weather[0].description,
                error: ""
            })
        })
      }

 render(){
      
     
     const { city, country, temperature, temperature_min, temperature_max,
        humidity, pressure, visibility, description} = this.state;

     return(
         <div className="default-values-container">
            <Titles></Titles>
            <div className="weather__info">
                <p className="weather-key">Location:
                    <span className="weather-value">{city} {country}</span>
                </p>
                <p className="weather-key">
                    <WeatherIcons></WeatherIcons>
                </p>
                <p className="weather-key">Temperature:
                    <span className="weather-value"> {temperature}°C </span>
                </p>
                <p className="weather-key">Min:
                    <span className="weather-value"> {temperature_min}°C</span>
                </p>
                <p className="weather-key">Max:
                    <span className="weather-value"> {temperature_max}°C </span>
                </p>

                <p className="weather-key">Humidity:
                    <span className="weather-value"> {humidity}%</span>
                </p>
                <p className="weather-key">Pressure:
                    <span className="weather-value"> {pressure} hpa</span>
                </p>
                <p className="weather-key">Visivility:
                    <span className="weather-value"> { Number(visibility) / 1000} km</span>
                </p>

                <p className="weather-key">Conditions:
                    <span className="weather-value"> {description}</span>
                </p>

            </div>
         </div>
     )
 }
}


