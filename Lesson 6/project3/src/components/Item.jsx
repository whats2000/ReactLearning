import React, {memo, useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import styled from 'styled-components';

const DoneTask = styled.del`
  color: #ccc;
`;

function Item(props) {
    const {
        todo: {id, todoName, isDone},
        toggleTodoDone,
        removeTodo,
        editingTodo,
        toggleEditTodo,
        updateTodo
    } = props;

    const [newTodoName, setNewTodoName] = useState(todoName);

    const handleToggleDone = () => toggleTodoDone(id);
    const handleRemove = () => removeTodo(id);

    const startEdit = () => toggleEditTodo(id);
    const stopEdit = () => toggleEditTodo(null);

    const handleInputChange = (e) => {
        setNewTodoName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodoName.trim()) return;

        updateTodo(id, newTodoName);

        stopEdit();
    }

    return (
        <li id={id} className="d-flex align-items-center justify-content-between m-1">
            {
                editingTodo === id ? (
                    <Form onSubmit={handleSubmit} className="w-100">
                        <InputGroup>
                            <Form.Control type="text"
                                          defaultValue={todoName}
                                          className="px-4 rounded-0 rounded-start"
                                          onChange={handleInputChange}
                            />
                            <Button variant="primary" onClick={stopEdit}>Cancel</Button>
                        </InputGroup>
                    </Form>
                ) : (
                    <>
                        <Form.Check
                            type="checkbox"
                            label={
                                isDone ? (
                                    <DoneTask>{todoName}</DoneTask>
                                ) : (
                                    todoName
                                )
                            }
                            checked={isDone}
                            onChange={handleToggleDone}
                        />
                        <Button variant="outline-primary" className="ms-auto" onClick={startEdit}>Edit</Button>
                    </>
                )
            }
            <Button variant="danger" className="ms-2" onClick={handleRemove}>Remove</Button>
        </li>
    );
}

export default memo(Item);
