import {Component} from "react";

class Counter3 extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0};
    }

    render() {
        console.log('Counter 3, Render called with state value: ', this.state.count);

        return (
            <div>
                <h1>Counter 3</h1>
                <p id="target">Count: {this.state.count}</p>
                <button onClick={() => {
                    // Question: What the difference between these two functions?
                    this.setState({count: this.state.count + 1});
                    this.setState((state) => {
                        console.log('First state value: ', state.count);
                        console.log('First real dom value: ', document.getElementById('target').textContent);
                    }, () => {
                        console.log('Second state value: ', this.state.count);
                        console.log('Second real dom value: ', document.getElementById('target').textContent);
                    });
                    // Answer: The first one will be called when the value is updated.
                    //         The second one will be called when the value is updated and the component is rendered.
                }}>Increment
                </button>
            </div>
        )
    }
}

export default Counter3;
