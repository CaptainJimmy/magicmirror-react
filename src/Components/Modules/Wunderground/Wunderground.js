import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { TopRow, TextForecast, FourHour, DailyForecast, CurrentConditions } from './Rows'
import API from '../../../Utils/API'
import APIKEYS from '../../../Utils/APIkeys'
import moment from 'moment';
import HOC from '../../HOC/HOC'


class Wunderground extends Component {
    styles  = {
        baseText: {
        fontFamily: 'Libre Baskerville'
        },
        titleText: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    }

    state = {
        timerRunning: false,
        timerInterval: null,
        timerIntervalMS: null,
        isWeatherPopulated: false,
        weather: {}
    }

    componentDidMount() {
        this.setState({ timerInterval: APIKEYS.timerIntervalMinutes }, () => {
            console.log("component mounted, state updated: ")
            this.startTimer();
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
            let newWeather = {...this.state.weather} // makes a copy if the current weather
            newWeather.currentObservation = results.data.current_observation
            newWeather.forecast = results.data.forecast
            newWeather.hourlyForecast = results.data.hourly_forecast 
            newWeather.moonPhase = results.data.moon_phase
            newWeather.sunPhase = results.data.sun_phase
            newWeather.beaufort = Math.round( results.data.current_observation.wind_kph * .1429)   //converts KPH to M/S * .5144  to BFT
            newWeather.sunset = moment(results.data.sun_phase.sunset.hour + ":" + results.data.sun_phase.sunset.minute, "HH:mm")
            newWeather.sunrise = moment(results.data.sun_phase.sunrise.hour + ":" + results.data.sun_phase.sunrise.minute, "HH:mm")
            let now = new Date()
            if (moment(newWeather.sunset).isAfter(now)){
                newWeather.daytime = true;
            }
            else {
                newWeather.daytime = false;
            }

            this.setState({ 
                weather: newWeather, 
                isWeatherPopulated: true,  //sets the flag so conditional rendering works
            }, ()=>{ 
                console.log('state updated with new weather info')
            })

        }).catch(err => {
            if (err) throw err;
        })

    }
    render() {
        return (
            <Row style={this.styles.baseText}>
                    { this.state.weather.currentObservation ? ( 
                    <HOC>
                        <TopRow 
                        weather={this.state.weather} 
                        beaufort={this.state.weather.beaufort}
                        style={this.styles}
                        daytime={this.state.weather.daytime}
                        sunset={this.state.weather.sunset}
                        sunrise={this.state.weather.sunrise} />

                        <CurrentConditions 
                        weather={this.state.weather.currentObservation}
                        daytime={this.state.weather.daytime} />
                    </HOC>) : null}

                    { this.state.weather.forecast? ( 
                    <TextForecast 
                    forecast={this.state.weather.forecast} /> ) : null }

                    <FourHour
                        weather={this.state.weather} />
                    <DailyForecast
                    weather={this.state.weather.forecast} /> 
            </Row>
        );
    }
}

export default Wunderground;
