import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Lifecycles } from "./Components/lifecycles/lifecycles.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: "",
    };
  }

  clickHandleLC = () => {
    this.setState((state) => ({ showChild: !state.showChild }));
  };

  clickHandleUD = () => {
    this.setState((state) => ({ text: state.text + " hello" }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.clickHandleLC}>Toggle Lifecycles</button>
          <button onClick={this.clickHandleUD}>Update Text</button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
