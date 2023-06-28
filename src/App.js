import React from "react";
import Card from "./components/Card";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>"Random Quote Generator"</h1>
        <Card />
      </div>
    );
  }
}

export default App;
