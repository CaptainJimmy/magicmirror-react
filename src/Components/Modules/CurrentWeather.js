import React, { Component } from 'react';
import { Row, Grid, Button } from 'react-bootstrap'
import API from '../../Utils/API'
import APIKEYS from '../../Utils/APIkeys'


class CurrentWeather extends Component {
    state = {
        timerRunning: false,
        timerInterval: null,
        timerIntervalMS: null
    }

    componentDidMount(){
        this.setState({timerInterval: APIKEYS.timerIntervalMinutes}, function(){
            console.log("component mounted, state updated: ",this.state.timerInterval)
           
        })
        
    }

    startTimer = () => {
        let timer = this.state.timerInterval*60000         //convert minutes to milliseconds
        console.log(`timer: ${timer}`)
        if (typeof timer === "number") {   //makes sure timer is a number
            console.log("is number")
            this.setState({timerRunning: true, timerIntervalMS: timer}, function(){
                this.timerHandler()
                console.log("timer is running")
            })
        }
        
    }

    timerHandler = () => {
        setInterval(this.runAPIs(),this.state.timerIntervalMS)  //starts the API pulls
    }

   
    runAPIs = () => {
        API.getCurrentOpenWeather().then( results => {
            console.log("currentOpen",results.data)
        }).catch(err=>{
            if (err) throw err;
        })

        API.getForecastedOpenWeather().then( results => {
            console.log("forecastOpen",results.data)
        }).catch(err=>{
            if (err) throw err;
        })
    }

    render() {
        return (
            <Grid>
                <Row>

                </Row>

                    <Button 
                    onClick={this.startTimer}
                    bsSize="large" 
                    bsStyle="info"> Get Data (in Console.log) </Button> 
            </Grid>
        );
    }
}

export default CurrentWeather;