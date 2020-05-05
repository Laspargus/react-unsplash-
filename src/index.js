import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Unsplash from "./components/unsplash";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Unsplash />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
