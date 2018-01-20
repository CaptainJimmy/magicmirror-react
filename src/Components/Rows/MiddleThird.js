import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './rows.css'

class MiddleThird extends Component {
    render() {
        return (
            <Row className="topThird">
                <Col xs={12}>
                    <h1 className="text-center"> TESTING </h1>
                </Col>
            </Row>
        );
    }
}

export default MiddleThird;
