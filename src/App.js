import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.counter}</p>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
