import React from 'react';
import {Button, Form} from 'react-bootstrap';

function Item() {
    return (
        <li className="d-flex align-items-center">
            <Form.Check type="checkbox" label="Item 1"/>
            <Button variant="danger" className="d-none">Remove</Button>
        </li>
    );
}

export default Item;
