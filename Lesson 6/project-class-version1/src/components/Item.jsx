import {Component, memo} from 'react';
import {Button, Form} from 'react-bootstrap';
import styled from 'styled-components';

const DoneTask = styled.del`
  color: #ccc;
`;

class Item extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { todo } = this.props;

        const changedProps = Object.entries(this.props).reduce((changes, [key, value]) => {
            if (prevProps[key] !== value) {
                changes[key] = {
                    from: prevProps[key],
                    to: value
                };
            }
            return changes;
        }, {});

        if (Object.keys(changedProps).length > 0) {
            console.log(`Item ${todo.id} changed props:`, changedProps);
        }
    }

    handleToggleDone = () => {
        const { todo: { id }, toggleTodoDone } = this.props;
        toggleTodoDone(id);
    }

    handleRemove = () => {
        const { todo: { id }, removeTodo } = this.props;
        removeTodo(id);
    }

    render() {
        const {todo: {id, todoName, isDone}} = this.props;

        return (
            <li id={id} className="d-flex align-items-center justify-content-between m-1">
                <Form.Check
                    type="checkbox"
                    label={isDone ? <DoneTask>{todoName}</DoneTask> : todoName}
                    className="ps-3"
                    checked={isDone}
                    onChange={this.handleToggleDone}
                />
                <Button variant="danger" className="ms-auto" onClick={this.handleRemove}>Remove</Button>
            </li>
        );
    }
}

export default memo(Item);
