import {Component, memo} from 'react';
import {Button, ButtonGroup, Form} from 'react-bootstrap';
import styled from 'styled-components';

const DoneTask = styled.del`
  color: #ccc;
`;

class Item extends Component {
    state = {
        newTodoName: this.props.todo.todoName,
    }

    handleToggleDone = () => {
        const { todo: { id }, toggleTodoDone } = this.props;
        toggleTodoDone(id);
    }

    handleRemove = () => {
        const { todo: { id }, removeTodo } = this.props;
        removeTodo(id);
    }

    startEdit = () => {
        const { todo: { id }, toggleEditTodo } = this.props;
        toggleEditTodo(id);
    }

    stopEdit = () => {
        const { toggleEditTodo } = this.props;
        toggleEditTodo(null);
    }

    handleInputChange = (e) => {
        this.setState({ newTodoName: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.newTodoName.trim()) return;

        const { todo: { id }, updateTodo } = this.props;
        updateTodo(id, this.state.newTodoName);

        this.stopEdit();
    }

    render() {
        const {todo: {id, todoName, isDone}, editingTodo} = this.props;

        return (
            <li id={id} className="d-flex align-items-center justify-content-between m-1">
                {
                    editingTodo === id ? (
                        <Form onSubmit={this.handleSubmit} className="w-100">
                            <ButtonGroup>
                                <Form.Control type="text"
                                              defaultValue={todoName}
                                              className="px-4 rounded-0 rounded-start"
                                              onChange={this.handleInputChange}
                                />
                                <Button variant="primary" onClick={this.stopEdit}>Cancel</Button>
                            </ButtonGroup>
                        </Form>
                    ) : (
                        <>
                            <Form.Check
                                type="checkbox"
                                label={
                                    isDone ? (
                                        <DoneTask>{todoName}</DoneTask>
                                    ) : todoName
                                }
                                checked={isDone}
                                onChange={this.handleToggleDone}
                            />
                            <Button variant="outline-primary" className="ms-auto" onClick={this.startEdit}>Edit</Button>
                        </>
                    )
                }
                <Button variant="danger" className="ms-2" onClick={this.handleRemove}>Remove</Button>
            </li>
        );
    }
}

export default memo(Item);
