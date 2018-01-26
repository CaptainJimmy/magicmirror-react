import React from 'react';
import { Col } from 'react-bootstrap'
import HOC from '../HOC/HOC'


const textForecast = (props) => {
    return (
    <HOC>
        <hr />
        <Col>
            <h3> {props.forecast.txt_forecast.forecastday[0].fcttext}
            </h3>
        </Col>
    </HOC>
)
}

export { textForecast as TextForecast };
