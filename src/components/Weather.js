import React, {Component} from "react";
import WeatherIcons from './WeatherIcons'

export default class Weather extends Component {
render(){
	const { city, country, temperature, temperature_min, temperature_max,
		 humidity, pressure, visibility, description, error} = this.props;
  return (
    <div className="weather__info">
      {city && country && (
        <div>
			<p className="weather-key">Location:
				<span className="weather-value">{city}, {country}</span>
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
         )}

      {error && <p className="weather__error">{error}</p>}
    </div>
  );
	  }
	}

