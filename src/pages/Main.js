import React, { Component } from "react";
import "../App.css";
import Titles from "../components/Titles";
import { WiCloud } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayCloudyHigh } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
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
         <div className="default-values-container form-container">
            <Titles></Titles>
            <div className="weather__info">
                <p className="weather-key">Location:
                    <span className="weather-value">{city} {country}</span>
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
                    <span className="weather-value description"> {description}</span>
                    {(() => {
                    switch (description) {
                    case "clear sky":   return <WiDaySunnyOvercast></WiDaySunnyOvercast>;
                    case "few clouds":   return <WiCloud></WiCloud>;
                    case "broken clouds": return <WiCloudy></WiCloudy>;
                    case "scattered clouds": return <WiDayCloudy></WiDayCloudy>;
                    case "overcast clouds":  return <WiDayCloudyHigh></WiDayCloudyHigh>;
                    case "shower rain":  return <WiDayShowers></WiDayShowers>;
                    case "rain":  return <WiDayShowers></WiDayShowers>;
                    case "light rain":  return <WiDayShowers></WiDayShowers>;
                    case "thunderstorm":  return <WiDaySleetStorm></WiDaySleetStorm>;
                    case "snow":  return <WiDaySnow></WiDaySnow>;
                    default:      return <WiDayCloudy></WiDayCloudy>;
                    }
                     })()}
                </p>

            </div>
         </div>
     )
 }
}


