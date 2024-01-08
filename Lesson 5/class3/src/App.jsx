import {Component} from 'react';
import CoordinateDisplay from "./components/CoordDisplay";
import ArrayDisplay from "./components/ArrayDisplay";

class App extends Component {
    state = {
        coords: {
            x: 100,
            y: 200,
            z: 300
        },
        arr: [1, 2, 3, 4, 5]
    }

    render() {
        return (
            <div>
                {/* 1. The `props` can bulk pass data to a component. */}
                {/* When use the `...` operator, we are spreading the object into its individual properties. */}
                {/* Here is what the spread operator looks like in React components: */}
                <CoordinateDisplay {...this.state.coords}/>
                {/* This is the same as the following: */}
                {/* <CoordinateDisplay x={this.state.coords.x} y={this.state.coords.y} z={this.state.coords.z}/> */}
                <hr/>
                {/* 2. The `props` can validate the data type of the data passed to a component. */}
                {/* There will be an error in component code if the `props` not match the data type or the `props` is missing. */}
                {/* To identify the error is from the component or usage, we can use the `propTypes` property. */}
                {/* Try passing a wrong data type to the `array` property or even remove the `array` property and see what happens to the browser console. */}
                {/* Note: We have written the default value for the `array` property, so the browser console will not show an error if the `array` property is missing. */}
                <ArrayDisplay array={this.state.arr}/>
            </div>
        );
    }
}

export default App;
