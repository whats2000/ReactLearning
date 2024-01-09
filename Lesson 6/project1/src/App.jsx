import {Container} from "react-bootstrap";
import {useCallback, useMemo, useState} from "react";

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

    // Callbacks for child components
    const addTodo = useCallback((todoName) => {
        setTodos(currentTodos => {
            const newId = currentTodos.length > 0 ? Math.max(...currentTodos.map(todo => todo.id)) + 1 : 0;
            return [...currentTodos, new Todo(newId, todoName, false)];
        });
    }, []);


    const toggleTodoDone = useCallback((id) => {
        setTodos(currentTodos => currentTodos.map(todo =>
            todo.id === id ? new Todo(todo.id, todo.todoName, !todo.isDone) : todo
        ));
    }, []);

    const removeTodo = useCallback((id) => {
        setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
    }, []);

    const clearCompleted = useCallback(() => {
        setTodos(currentTodos => currentTodos.filter(todo => !todo.isDone));
    }, []);


    const toggleAllTodos = useCallback(() => {
        setTodos(currentTodos => {
            const areAllCompleted = currentTodos.every(todo => todo.isDone);
            return currentTodos.map(todo => ({...todo, isDone: !areAllCompleted}));
        });
    }, []);


    // Memoized values from state computed for child components
    const completedCount = useMemo(() => {
        return todos.filter(todo => todo.isDone).length;
    }, [todos]);

    const totalCount = useMemo(() => {
        return todos.length;
    }, [todos]);

    return (
        <Container className="p-5 w-50 border mt-5 rounded-2">
            <Header addTodo={addTodo}/>
            <List todos={todos} toggleTodoDone={toggleTodoDone} removeTodo={removeTodo}/>
            {todos.length > 0 && (
                <Footer
                    completedCount={completedCount}
                    totalCount={totalCount}
                    clearCompleted={clearCompleted}
                    toggleAllTodos={toggleAllTodos}
                />
            )}
        </Container>
    );
}

export default App;
