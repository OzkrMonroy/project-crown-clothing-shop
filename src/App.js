import React from "react";
import "./App.css";
import HomePage from "./homepage.component";
import { Switch, Route } from "react-router-dom";

// bigelow rules (fuente)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
