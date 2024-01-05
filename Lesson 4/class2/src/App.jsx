import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// This is the root component of the application.
class App extends React.Component {
    render() {
        return (
            <div>
                {/* So, the usage of a component is similar to the usage of an HTML element. */}
                {/* Where the component is placed is where the component will be rendered. */}
                <Header/>
                <hr/>
                {/* For example, the <Body/> component will be rendered between the <hr/> elements. */}
                <Body/>
                <hr/>
                {/* We can also use the same component multiple times. */}
                {/* Also, when we use a component, it will create a new instance of that component. */}
                {/* So, that actually means that the Body class will have 4 independent instances in memory. */}
                <Body/>
                <Body/>
                <Body/>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

// Remember to export the component. You can also define the component in the same line as the export statement.
// Ex: export default class App extends React.Component { ... }
export default App;
