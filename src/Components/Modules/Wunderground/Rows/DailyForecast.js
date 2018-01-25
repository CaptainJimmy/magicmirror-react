import React from 'react';
import { Col, Row } from 'react-bootstrap'
import HOC from '../HOC/HOC'

const dailyForecast = (props) => (
    <HOC>
        <hr/>
        <Col>
            <Row>
                <Col xs={3}>
                    <h4> testing </h4>
                </Col>
                <Col xs={3}>
                    <h4> testing </h4>
                </Col>
                <Col xs={3}>
                    <h4> testing </h4>
                </Col>
                <Col xs={3}>
                    <h4> testing </h4>
                </Col>
            </Row>
        </Col>
    </HOC>
);

export { dailyForecast as DailyForecast };
