import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import HOC from '../HOC/HOC'

class CurrentTide extends Component {
    state = {
        gearType: "",
        waterTemp: null
    }
    brightStyle = {
        color: 'white',
        fontWeight: '800'
    }
    thisStyle = {
        padding: 0,
        margin: 0
    }
   componentDidMount(){
       //set the temps and geartype into state
        let newTemp = parseInt(this.props.temps.data[this.props.temps.data.length - 1].v,10)
        let newGear = ""
        if (newTemp >= 73) newGear = "Boardies"
        if (newTemp >= 65 && newTemp <= 72) newGear = "2mm"
        if (newTemp >= 59 && newTemp <= 64) newGear = "3/2"
        if (newTemp >= 54 && newTemp <= 58) newGear = "4/3"
        if (newTemp >= 47 && newTemp <= 53) newGear = "5/4/3"
        if (newTemp <= 46) newGear = "6/5/4"
        //set state and callback
        this.setState({
            gearType: newGear,
            waterTemp: newTemp
        }, ()=>{ console.log(`State updated inside CurrentTide, ${this.state.gearType}, ${this.state.waterTemp}`)})
    }
    
    
    render() {
        return (
        <HOC>
            <hr /> 
            <Row>
                <Col xs={2}>
                    <h2 style={this.brightStyle} className="text-center"> {this.state.waterTemp}&deg;F </h2>
                    <h3> {this.state.gearType} </h3>
                </Col>
                {/* <h2> Tide Conditions Here </h2>
                <p> Water Temp and Gear, Current Tide, Current Tide %, Next  Tide </p> */}
            </Row>
        </HOC>
        );
    }
}

    export { CurrentTide };
