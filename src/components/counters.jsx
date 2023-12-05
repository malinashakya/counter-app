import React, { Component } from "react";
import Counter from "./counter";

class Components extends Component {
  render() {
    //object destruction gareko so that ki sabai thau ma this.props. lekhirakhna  naparos
    const { onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            //event nai arko component ma pass garnu parda
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Components;
