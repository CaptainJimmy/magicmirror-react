import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './rows.css'

import Surf from '../Modules//Surf/Surf';
import CurrentWeather from '../Modules//CurrentWeather/CurrentWeather';
import Wunderground from '../Modules/Wunderground/Wunderground'


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
                    <Surf />  
                </Col>
                <Col xs={1} />
                <Col xs={3} style={this.colStyleCenter}>
                    <Wunderground />
                </Col>
                <Col xs={2} />
                <Col xs={3} style={this.colStyleRight}>
                    <CurrentWeather />
                </Col>
            </Row>
        );
    }
}

export default MiddleThird;
