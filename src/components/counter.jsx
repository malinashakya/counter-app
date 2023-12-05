import React, { Component } from "react";
class Counter extends Component {
  // componentDidUpdate,componentWillUnmount navayeni k hunni yesma, tara components ko phases ko ek part ho...

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     //Ajax call and get new data from the server
  //   }
  // }
  // componentWillUnmount() {
  //   console.log("Counter -Rendered");
  // }
  render() {
    console.log("props", this.props);
    return (
      //using bootstrap here m-margin, sm-small
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            //counters bata event define vako effect chai yesma garaunu parda
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/* For image */}
        {/* <img src={this.state.imageUrl} alt="Image" /> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //state ko count/value liyera count vanne ma store gara i.e. object destruction
    const { value } = this.props.counter;
    // we can also write <h1>Zero<h1>
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
