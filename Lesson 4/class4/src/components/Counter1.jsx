import {Component} from "react";

class Counter1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            message: "Hello"
        };
    }

    render() {
        console.log('Counter 1, Render called with state value: ', this.state.count, this.state.message);

        return (
            <div>
                <h1>Counter 1</h1>
                <p>Count: {this.state.count} {this.state.message}</p>
                <button onClick={() => {
                    // Question: What will be rendered in p tag? Consider `this.state.count` to be 0.
                    this.setState({count: this.state.count + 1, message: "World"});
                    this.setState({count: this.state.count + 2});
                    this.setState({count: this.state.count + 3});
                    // Answer: 3 World
                    // Explanation: If you call `setState` multiple times in a row, React will batch the updates together and only render once.
                    //              React will also merge the state objects together.
                    //              If you call `setState` with the same key, the last one will override the previous ones after merging.
                    //              The above code is equivalent to:
                    //              this.setState({count: this.state.count + 3, message: "World"});
                }}>Increment</button>
            </div>
        )
    }
}

export default Counter1;
