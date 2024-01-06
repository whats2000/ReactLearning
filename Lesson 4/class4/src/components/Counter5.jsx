import {Component} from "react";

class Counter5 extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0};

        // Solution 1: Bind the function in the constructor.
        this.handleClickSolution1a = () => {
            this.setState({
                count: this.state.count + 1
            });
        }

        // Solution 4: Use `bind`
        this.handleClickSolution4 = this.handleClickSolution4.bind(this);
    }

    // Solution 1b: Define the arrow function in the constructor. But with simpler syntax.
    handleClickSolution1b = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    // Solution 2: Use arrow function.
    handleClickSolution2()  {
        this.setState({
            count: this.state.count + 1
        });
    }

    // Solution 4: Use `bind` even the function is not arrow function.
    handleClickSolution4() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log('Counter 5, Render called with state value: ', this.state.count);

        // Solution 3: Define the function in the render function.
        // Yes, we can do this. But it will be defined every time the render function is called. That is not efficient.
        // So we should define it outside the render function. This is just for demonstration.
        const handleClickSolution3 = () => {
            this.setState({
                count: this.state.count + 1
            });
        }
        // Note: We not suggest that you define the function inside the render function.

        return (
            <div>
                <h1>Counter 5</h1>
                <p>Count: {this.state.count}</p>

                {/* Solution 1a: Define the arrow function in the constructor. */}
                {/* IMPORTANT: Do not use `()` when passing the function to `onClick`. */}
                {/*            If you use `()`, the function will be called immediately. */}
                {/*            Which mean it will take the return value of the function as the callback. */}
                {/*            The method can only be arrow function. */}
                {/* This work but will waste memory. */}
                {/* As every instance of the component will have its own function. */}
                <button onClick={this.handleClickSolution1a}>Solution 1a</button>

                {/* Solution 1b: Define the arrow function in the constructor. But with simpler syntax. */}
                {/* We can define the arrow function outside the constructor. */}
                {/* Though it is not the most efficient way. */}
                {/* The solution is most common used. */}
                <button onClick={this.handleClickSolution1b}>Solution 1b</button>

                {/* Solution 2: Use arrow method. */}
                {/* IMPORTANT: If you want to pass the function with `()`, you need to wrap it with another function. */}
                {/*            Which function will be call by apply with React? */}
                {/*            The outer function. But the inner function will be called when the button is clicked. */}
                {/*            So the inner function will be called when the button is clicked. */}
                {/* This is the most efficient way. */}
                {/* Because the method is only stored in the prototype of the class. */}
                <button onClick={() => this.handleClickSolution2()}>Solution 2</button>

                {/* Solution 3: Define the function in the render function. */}
                {/* This is worse than any other solution. */}
                {/* Note: We not suggest that you define the function inside the render function. */}
                <button onClick={handleClickSolution3}>Solution 3</button>

                {/* Solution 4: Use `bind` */}
                {/* The method can be a normal function or arrow function. */}
                {/* This is a traditional way to bind the function. */}
                {/* This is a little strange to understand. */}
                {/* And it still copies the method for each instance. */}
                <button onClick={this.handleClickSolution4}>Solution 4</button>
            </div>
        )
        // Question: What will the best solution?
        // Answer: Solution 1b.
        // This is the most common used.
    }
}

export default Counter5;
