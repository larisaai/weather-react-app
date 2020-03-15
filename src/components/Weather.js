import React, {Component} from "react";
import { WiCloud } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayCloudyHigh } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";

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
				case "shower rain":  return <WiDayShowers></WiDayShowers>;
				case "overcast clouds":  return <WiDayCloudyHigh></WiDayCloudyHigh>;
				case "rain":  return <WiDayShowers></WiDayShowers>;
				case "light rain":  return <WiDayShowers></WiDayShowers>;
				case "thunderstorm":  return <WiDaySleetStorm></WiDaySleetStorm>;
				case "snow":  return <WiDaySnow></WiDaySnow>;
				default:      return <WiDayCloudy></WiDayCloudy>;
				}
			})()}
			</p>

        </div>
         )}

      {error && <p className="weather__error">{error}</p>}
    </div>
  );
	  }
	}

