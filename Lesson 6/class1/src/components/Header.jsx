import {FloatingLabel, Form} from "react-bootstrap";

function Header() {
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Input your task name, then click enter"
                className="mb-3">
                <Form.Control type="text" placeholder="Task..."/>
            </FloatingLabel>
        </div>
    );
}

export default Header;
