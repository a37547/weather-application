import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import Home from "./components/home";
import DetailedWeather from "./components/detailedWeather";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/weather/:id" component={DetailedWeather} />
          <Route path="/weather" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/weather" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
