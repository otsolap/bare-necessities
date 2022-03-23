import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <div fluid className="container brand" role="footer">
            <Row>
                <Col sm={12} >
                    <p>Footer.</p>
                </Col>
            </Row>
        </div>
    );
}
