import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// When defining a component with a function, we need to follow these rules:
// Note 1: The name of the component must start with a capital letter.
// Note 2: The function must have a return statement.
function Welcome() {
    return <h1>Hello, user</h1>;
}

// We can also define a component with a class.
// Note 1: The name of the component must start with a capital letter.
// Note 2: The class must extend React.Component.
// Note 3: The render() method must return a React JSX element.
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello Class, user</h1>;
    }
}

const name = 'Sara';

const root = ReactDOM.createRoot(document.getElementById('root'));
// When using a component in React, we use HTML-like syntax to create an instance of that component.
root.render(
    <React.StrictMode>
        {/* This the same as `<Welcome></Welcome>` */}
        <Welcome/>

        {/* Define a component with a class */}
        <WelcomeClass/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
