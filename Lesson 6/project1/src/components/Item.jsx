import React, {memo, useEffect, useRef} from 'react';
import {Button, Form} from 'react-bootstrap';
import styled from 'styled-components';

const DoneTask = styled.del`
  color: #ccc;
`;

function Item(props) {
    const prevProps = useRef(props);

    useEffect(() => {
        const changedProps = Object.entries(props).reduce((changes, [key, value]) => {
            if (prevProps.current[key] !== value) {
                changes[key] = {
                    from: prevProps.current[key],
                    to: value
                };
            }
            return changes;
        }, {});

        if (Object.keys(changedProps).length > 0) {
            console.log(`Item ${id} changed props:`, changedProps);
        }

        prevProps.current = props;
    });

    const {
        todo: {id, todoName, isDone},
        toggleTodoDone,
        removeTodo,
    } = props;

    const handleToggleDone = () => toggleTodoDone(id);
    const handleRemove = () => removeTodo(id);

    return (
        <li id={id} className="d-flex align-items-center justify-content-between m-1">
            <Form.Check
                type="checkbox"
                label={
                    isDone ? (
                        <DoneTask>{todoName}</DoneTask>
                    ) : (
                        todoName
                    )
                }
                className="ps-3"
                checked={isDone}
                onChange={handleToggleDone}
            />
            <Button variant="danger" className="ms-auto" onClick={handleRemove}>Remove</Button>
        </li>
    );
}

export default memo(Item);
