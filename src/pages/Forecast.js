import React, { Component } from "react";
import "../App.css";
import Form from "../components/Form";
import Weather from "../components/Weather";
require('dotenv').config();

export default class Forecast extends Component {
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

  componentDidMount() {

    console.log(process.env.REACT_APP_KEY);
    
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

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.REACT_APP_KEY}`
    );

    const data = await API.json();

    if (city && country) {
      this.setState({
        temperature: Math.floor(data.main.temp)  ,
        temperature_min: Math.floor(data.main.temp_min),
        temperature_max: Math.floor(data.main.temp_max),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        icon:data.icon,
        visibility: data.visibility,
        description: data.weather[0].description,
        
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        temperature_min: undefined,
        temperature_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        visibility:undefined,
        icon:undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }
  };
  render() {
    return (

            <div className="wrapper">
         
              <div className=" form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  temperature_min={this.state.temperature_min}
                  temperature_max={this.state.temperature_max}
                  pressure = {this.state.pressure}
                  visibility = {this.state.visibility}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  icon= { this.state.icon}
                  error={this.state.error}
                />
              </div>
            </div>
    );
  }
}


