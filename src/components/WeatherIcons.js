import React, {Component} from "react";
import { WiCloud } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiCloudyGusts } from "react-icons/wi";


 export default class WeatherIcons extends Component {

  // NEED TO FIN A BETTER SOLUTION
  render() {
    const { description } = this.props;
      if ( description === 'clear sky' || 'few clouds') {
        return <WiCloud></WiCloud>;
      } 
      else if ( description === 'broken clouds' || 'scattered clouds') {
        return <WiDayCloudy></WiDayCloudy>;
      }
      else if ( description === 'shower rain' || 'rain') {
        return <WiDayShowers></WiDayShowers>;
      }
      else if ( description === 'thunderstorm' ) {
        return <WiDaySleetStorm></WiDaySleetStorm>;
      }
      else if ( description === 'snow' ) {
        return <WiDaySnow></WiDaySnow>;
      }
      else {
        return <WiCloudyGusts></WiCloudyGusts>;
      }
    }
}