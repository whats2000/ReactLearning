import { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

function Header(props) {
    const { addTodo } = props;
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName.trim()) return;

        addTodo(taskName);

        setTaskName('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInput"
                label="Input your task name, then click enter"
                className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Task..."
                    value={taskName}
                    onChange={handleInputChange}
                />
            </FloatingLabel>
        </Form>
    );
}

export default Header;
