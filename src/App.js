import React, { Component } from "react";
import "./App.css";
// import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  state = {
    temperature: undefined,
    temperature_min:undefined,
    temperature_max:undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=1d9eadfd959a277cf87d476b23a8cc86`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp  ,
        temperature_min: data.main.temp_min,
        temperature_max: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
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
        description: undefined,
        error: "Please enter the values"
      });
    }
  };
  render() {
    return (

            <div className="wrapper">
              <div className="title-container">
                {/* <Titles /> */}
              </div>
              <div className=" form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  temperature_min={this.state.temperature_min}
                  temperature_max={this.state.temperature_max}
                  pressure = {this.state.pressure}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
    );
  }
}

export default App;
