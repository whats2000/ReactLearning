import {Button, Form} from "react-bootstrap";

function Footer() {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="ps-3">
                <label className="pe-2">
                    <Form.Check aria-label="select all"/>
                </label>
                <span>Finish: 0</span> / All: 0
            </div>
            <Button variant="danger">Clear Finished Tasks</Button>
        </div>
    );
}

export default Footer;
