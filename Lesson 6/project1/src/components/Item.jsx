import {Button, Form} from 'react-bootstrap';
import styled from 'styled-components';

const DoneTask = styled.del`
  color: #ccc;
`;

function Item(props) {
    const {
        todo: {id, todoName, isDone},
        toggleTodoDone,
        removeTodo,
    } = props;

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
                onChange={() => toggleTodoDone(id)}
            />
            <Button variant="danger" className="ms-auto" onClick={() => removeTodo(id)}>Remove</Button>
        </li>
    );
}

export default Item;
