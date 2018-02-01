import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import HOC from '../HOC/HOC'
import MoonIcon from './Subcomponents/MoonIcon'
import moment from 'moment'

const topRow = props => {

    let imgURL = props.weather.currentObservation.icon_url.split("/")
    let newURL = encodeURI("/img/VCloudsWeatherIcons/" + imgURL[imgURL.length - 1].split(".")[0] + ".png")
    let beaufort = "wi wi-wind-beaufort-" + props.beaufort
    let windDirection = "wi wi-wind from-" + props.weather.currentObservation.wind_degrees + "-deg"  
    let now = new Date();   
    let brightStyle= {
        color: 'white',
        fontWeight: '800'
        }
    let topStyle= {
        padding: 0,
        margin: 0
    }
        return (
        <HOC>
            { props.spotID ? (
            <Row>
                <Col style={topStyle}>
                    <h1> {props.spotID} </h1>
                </Col>
            </Row> ) : null }
            <Row>
                    <Col style={topStyle} xs={2}>
                        <img src={newURL} alt={props.weather.icon} className="img-responsive" style={topStyle}/>
                    </Col>
                    <Col style={topStyle} xs={2}>
                        <h3 style={brightStyle}>{props.weather.currentObservation.temp_f}&deg;F </h3>
                    </Col>
                    <Col style={topStyle} xs={1}>
                        <h3><i className={beaufort} /></h3>
                    </Col>
                    <Col style={topStyle} xs={1}>    
                        <h3><i className={windDirection} /></h3>
                    </Col>
                    <Col style={topStyle} xs={1}>
                        <h3><i className="wi wi-humidity" />{props.weather.currentObservation.relative_humidity.substring(0, props.weather.currentObservation.relative_humidity.length - 1)} </h3>
                    </Col>
                    <Col style={topStyle} xs={2}>
                        {props.daytime ?
                            (<h3><i className="wi wi-sunset" /> {moment(props.sunset).format("HH:mm")} </h3>) :
                            (<h3><i className="wi wi-sunrise" /> {moment(props.sunrise).format("HH:mm")} </h3>)}
                    </Col>
                    <Col style={topStyle} xs={2}>
                        <MoonIcon day={parseInt(props.weather.moonPhase.ageOfMoon, 10)} />
                    </Col>
            </Row>
        </HOC>
        );
    }


export { topRow as TopRow };
