import {Component} from "react";

class Counter4 extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0};
    }

    render() {
        console.log('Counter 4, Render called with state value: ', this.state.count);

        return (
            <div>
                <h1>Counter 4</h1>
                <p>Count: {this.state.count}</p>
                <p>Check console for output</p>
                {/* Question: Why we use arrow function here? Can we use normal function? */}
                <button onClick={function () {
                    // Answer: Because we want to use `this` inside the function. If we use normal function, `this` will be undefined.
                    //         Check lesson 2 class 4 for more details (line 33).
                    console.log('Without arrow function, this is: ', this);
                }}>Without Arrow Function
                </button>
                <button onClick={() => {
                    //         The arrow function will inherit the `this` from the parent scope. Which is the function `render`.
                    //         So `this` will be the component instance.
                    console.log('With arrow function, this is: ', this);
                }}>With Arrow Function
                </button>
            </div>
        )
    }
}

export default Counter4;
