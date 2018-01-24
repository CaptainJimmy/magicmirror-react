import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Moment from 'react-moment';

const forecast = (props) => (

        <Col className="text-left">
            {props.weather.map((item) =>{
                return (
                    <div key={item.dt}>
                        <h4> <Moment date={item.dt} format="dd" /> High: {parseInt(item.temp.max, 10)}&deg;F Low:{parseInt(item.temp.max, 10)}&deg;F 
                            <img src={encodeURI("http://openweathermap.org/img/w/" + item.weather[0].icon + ".png")} />
                        </h4>
                    </div>
                )           
            })}
        </Col>
)

export { forecast as Forecast };
