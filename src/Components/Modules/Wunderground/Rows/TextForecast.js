import React from 'react';
import { Col } from 'react-bootstrap'
import HOC from '../HOC/HOC'


const textForecast = (props) => {
    return (
    <HOC>
        <hr />
        <Col>
            <h1> {props.forecast.txt_forecast.forecastday[0].fcttext}
            </h1>
        </Col>
    </HOC>
)
}

export { textForecast as TextForecast };
