import React, { Component } from 'react';
import { Row, Grid, Button } from 'react-bootstrap'
import API from '../../../Utils/API'
import APIKEYS from '../../../Utils/APIkeys'


class Surf extends Component {
    state = {
        timerRunning: false,
        timerInterval: null,
        timerIntervalMS: null,
        weather: {
            weatherUnderground: {},
            magicSeaweed: {},
            noaaTemperature: {},
            noaaTides: {}
        }
    }
    styles = {
        baseText: {
            fontFamily: "Cormorant Garamond",
            fontColor: 'darkgrey'
        }
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
            let newWeather = { ...this.state.weather.weatherUnderground } // makes a copy if the current weather
            newWeather.currentObservation = results.data.current_observation
            newWeather.forecast = results.data.forecast
            newWeather.hourlyForecast = results.data.hourly_forecast
            newWeather.moonPhase = results.data.moon_phase
            newWeather.sunPhase = results.data.sun_phase
            newWeather.beaufort = Math.round(results.data.current_observation.wind_kph * .1429)   //converts KPH to M/S * .5144  to BFT
            newWeather.sunset = moment(results.data.sun_phase.sunset.hour + ":" + results.data.sun_phase.sunset.minute, "HH:mm")
            newWeather.sunrise = moment(results.data.sun_phase.sunrise.hour + ":" + results.data.sun_phase.sunrise.minute, "HH:mm")
            let now = new Date()
            if (moment(newWeather.sunset).isAfter(now)) {
                newWeather.daytime = true;
            }
            else {
                newWeather.daytime = false;
            }
            let newWeatherObject = {...this.state.weather}
            newWeatherObject.weatherUnderground = newWeather
            this.setState({
                weather: newWeatherObject,
                isWeatherPopulated: true,  //sets the flag so conditional rendering works
            }, () => {
                console.log('state updated with new weather info')
            })


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
                    bsStyle="info"> Get Data (in Console.log) </Button> 
            </Grid>
        );
    }
}

export default Surf;