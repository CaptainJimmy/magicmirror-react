import React, { Component } from 'react';
import { Row, Grid, Button } from 'react-bootstrap'
import API from '../../Utils/API'
import APIKEYS from '../../Utils/APIkeys'


class RMMMSurf extends Component {
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

        API.getWU().then( results => {
            console.log("WU",results.data)
        }).catch(err=>{
            if (err) throw err;
        })

        API.getNOAAtemperature().then( results => {
            console.log("temp",results.data)
        }).catch(err=>{
            if (err) throw err;
        })

        API.getNOAAtides().then( results => {
            console.log("tide",results.data)
        }).catch(err=>{
            if (err) throw err;
        })

        API.getMagicSeaweed().then( results => {
            console.log("seaweed",results)
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
                    bsStyle="info"> Get WU </Button> 
            </Grid>
        );
    }
}

export default RMMMSurf;