import React from 'react';
import { Row, Col } from 'react-bootstrap'

const currentTide = props => {
    let brightStyle = {
        color: 'white',
        fontWeight: '800'
    }
    let thisStyle = {
        padding: 0,
        margin: 0
    }
    let gearType = () =>{
        return true
    }
    return (
    <Row>
        <hr />
        <Col xs={1} style={thisStyle}>
            <h4> {props.waterTemp} </h4>
            <h5> {gearType} </h5>
        </Col>
        {/* <h2> Tide Conditions Here </h2>
        <p> Water Temp and Gear, Current Tide, Current Tide %, Next  Tide </p> */}
    </Row>
    )
}
    export { currentTide as CurrentTide };
