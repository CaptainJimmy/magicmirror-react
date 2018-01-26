import React from 'react';
import { Col, Row } from 'react-bootstrap'
import HOC from '../HOC/HOC'

// Hours of Forecast Shown are set in ../config.js
const boxStyle = {
    color: 'darkgray',
    fontWeight: 700
}
const bright = {
    color: 'white',
    fontWeight: 800
}
let iconSize = {
    fontSize: '3rem'
}
let imageSize= {
    height: "60%", 
    width: '60%'
}
const periodicForecast = (props) => (
    <HOC>
        <hr />
        <Col>
            <Row>
                { props.forecast.map( (forecast,index)=>{
                    //strips the filename from the URL, and uses a local clipart instead
                    let oldURL = forecast.icon_url.split("/")
                    let newURL = encodeURI("/img/light/"+oldURL[oldURL.length -1].split(".")[0]+".png")
                    //maps the wind speed to beaufort scape for icon
                    let beaufort = "wi wi-wind-beaufort-"+Math.round(Number(forecast.wspd.metric)*.1459)
                    //maps direction of the wind for icon direction
                    let windDirection = "wi wi-wind from-" + forecast.wdir.degrees + "-deg"  
                    return (
                        <Col style={boxStyle} key={forecast.FCTTIME.epoch} xs={3}>
                            
                                <h4> {forecast.FCTTIME.civil} </h4>
                                <img src={newURL} alt={forecast.icon} style={imageSize}  />
                                <h4> <span style={bright}>{forecast.temp.english}&deg;</span> / {forecast.feelslike.english}&deg; </h4>
                                <h4>{forecast.pop}%/{forecast.qpf.english}</h4>
                                <i style={iconSize} className={beaufort} /><i style={iconSize} className={windDirection} />
                        </Col>
                    )
                })}

            </Row>
        </Col>
    </HOC>
);

export { periodicForecast as PeriodicForecast };
