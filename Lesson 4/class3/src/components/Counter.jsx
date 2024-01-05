import {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        // Well, this is the attribute of the class. But these value updates will not cause the page to re-render.
        this.count = 0;

        // This is the state of the component.
        // Note 1: The attribute `state` is a special attribute in React. Which can make the page re-render when the value of `state` changes.
        // Note 2: The `state` attribute must be an object.
        this.state = {
            count: 0,
            hiddenMessage: "This is a hidden message."
        };
    }

    render() {
        // Because we are in strict mode, so the `render` method will be called twice.
        // If not in strict mode, the `render` method will be called once.
        console.log('render() got called.', this.state.count);

        // Note 1: The `this` statement in the render method must be current instance of the class.
        return (
            <div>
                {/* This is the attribute of the class. */}
                <h1>Counter (Use normal attribute?)</h1>
                <p>Check console (F12)</p>
                <p>Count: {this.count}</p>
                <button onClick={() => {this.count++; console.log(this.count);}}>Increment</button>
                <button onClick={() => {this.count--; console.log(this.count);}}>Decrement</button>
                <hr/>
                {/* This is the direct use the state of the component. */}
                {/* Note: This will cause warning in the compiler console (Not the browser console). */}
                <h1>Counter (Use state.count?)</h1>
                <p>Check console (F12)</p>
                <p>Count: {this.state.count}</p>
                <button onClick={() => {
                    ++this.state.count;
                    console.log(this.state.count);
                }}>Increment</button>
                <button onClick={() => {
                    --this.state.count;
                    console.log(this.state.count);
                }}>Decrement</button>
                <hr/>
                {/* This is the state of the component. */}
                <h1>Counter (Use setState())</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => {
                    // Note 1: You can use `++this.state.count` here.
                    // But it is not recommended and will cause warning in the compiler console.
                    // Also the `this.state.count++` will not work.
                    // Because the `this.state.count++` will return the original value of `this.state.count` and then increment the value of `this.state.count`,
                    // which will not change the value of `this.state.count` in the `setState` method.
                    this.setState({count: this.state.count + 1}, () => {
                        // Note 2: The `setState` method is asynchronous. Code here will be executed after the state is updated.
                        console.log('Log after the state is updated.', this.state.count);
                    });
                    // Note 3: The `setState` method is asynchronous. So the `console.log` statement here will be executed before the `setState` method.
                    console.log('Log before the state is updated.', this.state.count);
                }}>Increment</button>
                <button onClick={() => {
                    this.setState({count: this.state.count - 1}, () => {
                        console.log('Log after the state is updated.', this.state.count);
                    });
                    console.log('Log before the state is updated.', this.state.count);
                }}>Decrement</button>
            </div>
        )
    }
}

export default Counter;
