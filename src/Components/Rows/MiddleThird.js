import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './rows.css'

import RMMMSurf from '../Modules//RMMMSurf/RMMMSurf';
import CurrentWeather from '../Modules//CurrentWeather/CurrentWeather'


class MiddleThird extends Component {

    colStyleLeft = {
        color: 'white',
        backgroundColor: 'black',
        height: '700px',
    }
    colStyleCenter = {
        color: 'white',
        backgroundColor: 'black',
        height: '700px',
    }
    colStyleRight = {
        color: 'white',
        backgroundColor: 'black',
        height: '700px',
    }

  
    render() {
        return (
            <Row className="middleThird">
                <Col xs={3} style={this.colStyleLeft}>
                      <RMMMSurf />  
                </Col>
                <Col xs={1} />
                <Col xs={4} style={this.colStyleCenter}>
                    <p> news goes here </p>
                </Col>
                <Col xs={1} />
                <Col xs={3} style={this.colStyleRight}>
                    <CurrentWeather />
                </Col>
            </Row>
        );
    }
}

export default MiddleThird;
