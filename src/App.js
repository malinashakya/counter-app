import "./App.css";
import NavBar from "./components/navbar";
import React, { Component } from "react";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    this.setState((prevState) => {
      const counters = prevState.counters.map((c) =>
        c.id === counter.id ? { ...c, value: c.value + 1 } : c
      );
      return { counters };
    });
  };
  handleDecrement = (counter) => {
    this.setState((prevState) => {
      const counters = prevState.counters.map((c) =>
        c.id === counter.id ? { ...c, value: c.value - 1 } : c
      );
      return { counters };
    });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters:counters });
    //as if we can assumec counter property with counter object so can be written only one counters as well.
    //the down counter will give only undeleted counters
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
