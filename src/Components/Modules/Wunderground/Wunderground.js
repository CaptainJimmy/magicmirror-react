import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import API from '../../../Utils/API'
import APIKEYS from '../../../Utils/APIkeys'

class Wunderground extends Component {
    state = {
        timerRunning: false,
        timerInterval: null,
        timerIntervalMS: null,
        weather: {
            current: {},
            forecast: []
        }
    }

    componentDidMount() {
        this.setState({ timerInterval: APIKEYS.timerIntervalMinutes }, () => {
            console.log("component mounted, state updated: ", this.state.timerInterval)
            //this.startTimer();
        })

    }

    startTimer = () => {
        let timer = this.state.timerInterval * 60000         //convert minutes to milliseconds
        console.log(`timer: ${timer}`)
        if (typeof timer === "number") {   //makes sure timer is a number
            console.log("is number")
            this.setState({ timerRunning: true, timerIntervalMS: timer }, function () {
                this.timerHandler()
                console.log("timer is running")
            })
        }

    }

    timerHandler = () => {
        setInterval(this.runAPIs(), this.state.timerIntervalMS)  //starts the API pulls
    }
    runAPIs = () => {

        API.getWU().then(results => {
            console.log("WU", results.data)
            //this.setState
        }).catch(err => {
            if (err) throw err;
        })

    }
    render() {
        return (
            <div>

                <Button
                    onClick={this.startTimer}
                    bsSize="large"
                    bsStyle="info"> Get wU (in Console.log) </Button> 
            </div>
        );
    }
}

export default Wunderground;
