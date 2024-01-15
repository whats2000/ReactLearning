import {Button, Form} from "react-bootstrap";

function Footer({ completedCount, totalCount, clearCompleted, toggleAllTodos }) {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="ps-4">
                <label className="pe-2">
                    <Form.Check
                        aria-label="select all"
                        onChange={toggleAllTodos}
                        checked={completedCount === totalCount}
                    />
                </label>
                <span>Finish: {completedCount}</span> / All: {totalCount}
            </div>
            <Button variant="danger" onClick={clearCompleted}>Clear Finished Tasks</Button>
        </div>
    );
}

export default Footer;
