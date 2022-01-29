import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <Container fluid className="brand" role="footer">
            <Row>
                <Col sm={12} >
                    <p>Footer.</p>
                </Col>
            </Row>
        </Container>
    );
}
