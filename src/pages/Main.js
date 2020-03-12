import React, { Component } from "react";
import "../App.css";
import Titles from "../components/Titles";
import WeatherIcons from '../components/WeatherIcons'



export default class Main extends Component {
    state = {
        temperature: undefined,
        temperature_min:undefined,
        temperature_max:undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        visibility:undefined,
        description: undefined,
        error: undefined
      };
    getCphWeather = async e => {
        e.preventDefault();
    
        const CphAPI = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Copenhagen,denmark&units=metric&appid=1d9eadfd959a277cf87d476b23a8cc86'
        );
        const cphData =  await CphAPI.json();
        this.setState({
            temperature: Math.floor(cphData.main.temp)  ,
            temperature_min: Math.floor(cphData.main.temp_min),
            temperature_max: Math.floor(cphData.main.temp_max),
            city: cphData.name,
            country: cphData.sys.country,
            humidity: cphData.main.humidity,
            pressure: cphData.main.pressure,
            icon:cphData.icon,
            visibility: cphData.visibility,
            description: cphData.weather[0].description
        })
    }
 render(){
    const { city, country, temperature, temperature_min, temperature_max,
        humidity, pressure, visibility, description} = this.props;
     
     return(
         <div>
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


