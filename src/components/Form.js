import React, {Component} from "react";

export default class Form extends Component {
  render(){
    const {getWeather} = this.props;
    return(
      <form onSubmit={ getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>See Weather</button>
    </form>
    )
  }
}



