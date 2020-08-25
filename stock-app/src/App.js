import React from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import About from "./components/About";
import Stock from "./components/Stock";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import stocksData from "./stock-data";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stocks" component={Dashboard} />
          <Route
            exact
            path="/stocks/:symbol"
            render={(routerProps) => <Stock match={routerProps.match} />}
          />
          <Redirect to="/stocks" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
