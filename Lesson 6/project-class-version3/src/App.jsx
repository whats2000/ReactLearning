import {Container} from "react-bootstrap";
import {Component} from "react";

import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Todo from "./Models/Todo";

class App extends Component {
    state = {
        todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos"))?.map(todo =>
            new Todo(todo.id, todo.todoName, todo.isDone)) : [],
        editingTodo: null,
    };

    addTodo = (todoName) => {
        this.setState(prevState => {
            const newId = prevState.todos.length > 0 ? Math.max(...prevState.todos.map(todo => todo.id)) + 1 : 0;
            return {
                todos: [...prevState.todos, new Todo(newId, todoName, false)],
            };
        });
    }

    toggleTodoDone = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo =>
                todo.id === id ? new Todo(todo.id, todo.todoName, !todo.isDone) : todo
            ),
        }));
    }

    removeTodo = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== id),
        }));
    }

    clearCompleted = () => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => !todo.isDone),
        }));
    }

    toggleAllTodos = () => {
        this.setState(prevState => {
            const areAllCompleted = prevState.todos.every(todo => todo.isDone);
            return {
                todos: prevState.todos.map(todo => ({...todo, isDone: !areAllCompleted})),
            };
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }

    toggleEditTodo = (id) => {
        this.setState({
            editingTodo: id,
        });
    }

    updateTodo = (id, todoName) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo =>
                todo.id === id ? new Todo(todo.id, todoName, todo.isDone) : todo),
        }));
    }

    render() {
        const {todos, editingTodo} = this.state;
        const completedCount = todos.filter(todo => todo.isDone).length;
        const totalCount = todos.length;

        return (
            <Container className="p-5 w-50 border mt-5 rounded-2">
                <Header addTodo={this.addTodo}/>
                <List todos={todos}
                      toggleTodoDone={this.toggleTodoDone}
                      removeTodo={this.removeTodo}
                      editingTodo={editingTodo}
                      toggleEditTodo={this.toggleEditTodo}
                      updateTodo={this.updateTodo}
                />
                {todos.length > 0 && (
                    <Footer
                        completedCount={completedCount}
                        totalCount={totalCount}
                        clearCompleted={this.clearCompleted}
                        toggleAllTodos={this.toggleAllTodos}
                    />
                )}
            </Container>
        );
    }
}

export default App;
