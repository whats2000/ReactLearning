import {Component, memo} from "react";

import { FloatingLabel, Form } from 'react-bootstrap';

class Header extends Component {
    state = {
        taskName: '',
    };

    handleInputChange = (e) => {
        this.setState({ taskName: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.taskName.trim()) return;

        this.props.addTodo(this.state.taskName);

        this.setState({ taskName: '' });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Input your task name, then click enter"
                    className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Task..."
                        value={this.state.taskName}
                        onChange={this.handleInputChange}
                    />
                </FloatingLabel>
            </Form>
        );
    }
}

export default memo(Header);
