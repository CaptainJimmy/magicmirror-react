import React from 'react';
import { Col } from 'react-bootstrap';


const topRow = (props) => {
    return (
            <Col className="text-left">
                <h1> {props.weather.name}  </h1> 
                <h3> {parseInt(props.weather.main.temp,10)}&deg;F 
                    <img src={encodeURI("http://openweathermap.org/img/w/" + props.weather.weather[0].icon + ".png")} alt={props.weather.weather[0].icon} />
                    {/* <Moment date={props.weather.dt} fromNow /> */}</h3>
                <h4>High: {parseInt(props.weather.main.temp_max, 10)}&deg;F  Low:  {parseInt(props.weather.main.temp_min, 10)}&deg;F</h4> 
            </Col>
    )
}
export { topRow as TopRow } ;
