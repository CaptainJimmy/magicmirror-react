import React from 'react';
import { Row, Col } from 'react-bootstrap'
const currentConditions = (props) => {
    let thisStyle = {
        fontSize: '5rem',
        fontWeight: '800'
    }
    let imageSize = {
        height: "60%",
        width: '60%'
    }
    let imgURL = props.weather.icon_url.split("/")
    let newURL = encodeURI("/img/VCloudsWeatherIcons/"+imgURL[imgURL.length -1].split(".")[0]+".png")
    
return (
    <Col>
        <Row>
            <Col xs={6}>
                <img src={newURL} alt={props.weather.icon} style={imageSize} />
            </Col>
            <Col xs={6}>
                <span style={thisStyle}>{props.weather.temp_f}&deg;F </span>
            </Col>
        </Row>
    </Col>
)

}
export { currentConditions as CurrentConditions };
