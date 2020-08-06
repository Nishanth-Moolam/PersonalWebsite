import React from "react";
import "./App.css";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <BaseRouter />
        </Router>
      </div>
    );
  }
}

export default App;
