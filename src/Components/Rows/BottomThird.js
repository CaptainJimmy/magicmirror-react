import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './rows.css'

class BottomThird extends Component {
    render() {
        return (
            <Row className="topThird">
                <Col xs={4}>
                    <h1> TESTING1 </h1>
                </Col>
                <Col xs={4}>
                    <h1 className="text-center" > TESTING2 </h1>
                </Col>
                <Col xs={4}>
                    <h1 className="pull-right"> TESTING3</h1>
                </Col>
            </Row>
        );
    }
}

export default BottomThird;
