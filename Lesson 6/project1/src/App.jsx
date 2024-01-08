import {Container} from "react-bootstrap";
import {useState} from "react";

import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Todo from "./Models/Todo";

function App() {
    // Here is how to use state in a function component
    const [todos, setTodos] = useState([
        new Todo(0, "Eating", true),
        new Todo(1, "Sleeping", true),
        new Todo(2, "Learning React", false),
    ]);

    /**
     * Add a todo to the todos array
     * @param {string} todoName - The name of the todo
     */
    const addTodo = todoName => {
        setTodos([...todos, new Todo(
            todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0,
            todoName,
            false
        )]);
    };

    /**
     * Remove a todo from the todos array
     * @param {int} id - The id of the todo to remove
     */
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    /**
     * Toggle the isDone property of a todo
     * @param {int} id - The id of the todo to toggle
     */
    const toggleTodoDone = id => {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    };

    /**
     * Remove all completed todos
     */
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.isDone));
    };

    /**
     * Toggle all todos to done except if all todos are done, then set all todos to not done
     */
    const toggleAllTodos = () => {
        const areAllCompleted = todos.every(todo => todo.isDone);
        setTodos(todos.map(todo => ({...todo, isDone: !areAllCompleted})));
    };


    // Calculations for the footer
    const completedCount = todos.filter(todo => todo.isDone).length;
    const totalCount = todos.length;

    return (
        <Container className="p-5 w-50 border mt-5 rounded-2">
            <Header addTodo={addTodo}/>
            <List todos={todos} toggleTodoDone={toggleTodoDone} removeTodo={removeTodo}/>
            <Footer
                completedCount={completedCount}
                totalCount={totalCount}
                clearCompleted={clearCompleted}
                toggleAllTodos={toggleAllTodos}
            />
        </Container>
    );
}

export default App;
