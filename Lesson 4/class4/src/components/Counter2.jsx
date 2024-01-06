import {Component} from "react";

class Counter2 extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0};
    }

    render() {
        console.log('Counter 2, Render called with state value: ', this.state.count);

        return (
            <div>
                <h1>Counter 2</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => {
                    // Question: What will be rendered in p tag? Consider `this.state.count` to be 0.
                    this.setState({count: this.state.count + 1});
                    // This will be called when the above setState is done.
                    this.setState((state) => {
                        // So `this.state.count` will be 1 here. Which means it is the latest state.
                        return {count: state.count + 2};
                    });
                    this.setState((state) => {
                        // So `this.state.count` will be 3 here. Also, the function will be called when the above function is done.
                        return {count: state.count + 3};
                        // After this, the render function will be called.
                    });
                    // Answer: 6
                }}>Increment
                </button>
            </div>
        )
    }
}

export default Counter2;
