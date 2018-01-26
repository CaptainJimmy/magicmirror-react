import React from 'react';
import { Col, Row } from 'react-bootstrap'
import moment from 'moment';
import MoonIcon from './Subcomponents/MoonIcon'

const topRow = (props) => {
    let beaufort = "wi wi-wind-beaufort-"+props.beaufort
    let windDirection = "wi wi-wind from-"+props.weather.currentObservation.wind_degrees+"-deg"  
    let now = new Date();   
    let moonStyle = {
        padding: 0,
        margin: 0
    }
    
 return (
    <Col>
        <Row>
             <Col xs={1} style={moonStyle} />
             <Col xs={1} style={moonStyle}>
                <h3><i className={beaufort} /></h3>
            </Col>
             <Col xs={1} style={moonStyle}>
                <h3><i className={windDirection} /></h3>
            </Col>
             <Col xs={2} style={moonStyle}>
                <h3><i className="wi wi-humidity" />{props.weather.currentObservation.relative_humidity.substring(0, props.weather.currentObservation.relative_humidity.length -1)} </h3>
            </Col>
             <Col xs={4} style={moonStyle}>  
                {moment(props.sunrise).isBefore(now) &&  moment(props.sunset).isAfter(now) ? 
                    (<h3><i className="wi wi-sunset" /> {moment(props.sunset).format("HH:mm")} </h3>) : 
                    (<h3><i className="wi wi-sunrise" /> {moment(props.sunrise).format("HH:mm")} </h3>) }
            </Col>
            <Col xs={2} style={moonStyle}>
                <MoonIcon style={moonStyle} day={parseInt(props.weather.moonPhase.ageOfMoon,10)} />
            </Col>
             <Col xs={1} style={moonStyle} />   
         </Row> 
    </Col>
 )
}

export { topRow as TopRow };
