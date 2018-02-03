import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import HOC from '../HOC/HOC'
import moment from 'moment'

class CurrentTide extends Component {
    state = {
        gearType: "",
        waterTemp: null,
        currentTide: {},
        nextTide: {},
        previousTide: {}
    }
    brightStyle = {
        color: 'white',
        fontWeight: '800'
    }
    thisStyle = {
        padding: 0,
        margin: 0
    }
    tideImg = {
        verticalAlign: 'bottom',
        border: 0
    }
   componentDidMount(){
       this.getTemps();
       this.getTides();
   }
   
   getTemps = () => {
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

    getTides = () =>{
        // get the current and next tides
        let currentTide = null;
        let currentTideIndex = null;
        let now = new Date();
        for (var i=0; i < this.props.tides.length ; i++) {
            let thisTideTime = moment(this.props.tides[i].t,"YYYY-MM-DD HH:mm")
                if (moment(thisTideTime).isSameOrBefore(now)){
                    console.log("tide is before",thisTideTime)
                    currentTideIndex = i
                }
        }
        currentTide= this.props.tides[currentTideIndex+1]
        let nextTide = this.props.tides[currentTideIndex+2]
        let previousTide = this.props.tides[currentTideIndex]
        let delta = (moment(currentTide.t, "YYYY-MM-DD HH:mm") - moment(previousTide.t, "YYYY-MM-DD HH:mm"))/36e5
        console.log("delta",delta)
        let tideDeltaNow =(moment(now) - moment(previousTide.t, "YYYY-MM-DD HH:mm"))/36e5
        console.log("tideDeltaNow",tideDeltaNow)
        let percent = Math.round((tideDeltaNow / delta)*100)
        currentTide.percent = percent
        console.log("Percent",percent)
        console.log("nextTide", nextTide)
        this.setState({
            currentTide: currentTide,
            nextTide: nextTide,
            previousTide: previousTide
        }, function(){
            console.log("State updated with new tides:",this.state.currentTide,this.state.nextTide,this.state.previousTide)
        })
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

                <Col xs={2}>
                        <h4>Current Tide</h4>
                        {this.state.currentTide.type === "L" ? (<img src="img/Low.png" className="img-responsive" alt="low tide" style={this.tideImg} />) : (<img src="img/High.png" className="img-responsive" alt="high tide" style={this.tideImg}/>)}
                </Col>

                <Col xs={3}>
                        <h3>{moment(this.state.currentTide.t).format('HH:mm a')} {this.state.currentTide.v} ft</h3>
                        {this.state.currentTide.type === "L" ? (<h3> {this.state.currentTide.percent} % out </h3>) : (<h3> {this.state.currentTide.percent} % in </h3>) }
                </Col>

                <Col xs={2}>
                        <h4>Next Tide</h4>
                        {this.state.nextTide.type === "L" ? (<img src="img/Low.png" className="img-responsive" alt="low tide" style={this.tideImg} />) : (<img src="img/High.png" className="img-responsive" alt="high tide" style={this.tideImg} />)}
                </Col>

                <Col xs={3}>
                        <h3>{moment(this.state.nextTide.t).format('HH:mm a')} {this.state.nextTide.v} ft</h3>
                </Col>
            </Row>
        </HOC>
        );
    }
}

    export { CurrentTide };
