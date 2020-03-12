
import React, { Component } from "react";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Forecast from "./pages/Forecast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body-bg">
          <Nav />
          <Switch>
              <Route path="/home" component={(props) => <Main {...props}/>}/>
              </Switch>
              <Switch>
              <Route path="/forecast" component={(props) => <Forecast {...props}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;