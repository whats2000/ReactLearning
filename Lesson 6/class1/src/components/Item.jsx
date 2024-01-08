import React from 'react';
import {Button, Form} from 'react-bootstrap';

function Item() {
    return (
        <li className="d-flex align-items-center justify-content-between m-1">
            <Form.Check
                type="checkbox"
                label="Task 1"
                className="ps-3"
            />
            <Button variant="danger" className="ms-auto">Remove</Button>
        </li>
    );
}

export default Item;
