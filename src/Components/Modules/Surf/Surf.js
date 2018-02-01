import React, { Component } from 'react';
import { Row } from 'react-bootstrap'
import API from '../../../Utils/API'
import APIKEYS from '../../../Utils/APIkeys'
import moment from 'moment'
import { TopRow, CurrentTide } from './Rows';


class Surf extends Component {
    state = {
        timerRunning: false,
        timerInterval: null,
        timerIntervalMS: null,
        isWUpopulated: false,
        isNOAAtempPopulated: false,
        isNOAAtidesPopulated: false,
        isMagicSeaweedPopulated: false,
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
            fontColor: 'darkgrey',
        }
    }

    componentDidMount() {
        this.setState({ timerInterval: APIKEYS.timerIntervalMinutes }, function () {
            console.log("component mounted, state updated: ", this.state.timerInterval)
            this.startTimer();

        })

    }

    startTimer = () => {
        let timer = this.state.timerInterval * 60000         //convert minutes to milliseconds
        console.log(`timer: ${timer}`)
        if (typeof timer === "number") {   //makes sure timer is a number
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
                newWeather.daytime = true;        //sets the icon
            }
            else {
                newWeather.daytime = false;
            }
            let newWeatherObject = { ...this.state.weather }  // pulls the whole weather object, copies the new data into it to send back to state
            newWeatherObject.weatherUnderground = newWeather
            this.setState({
                weather: newWeatherObject,
                isWUpopulated: true,  //sets the flag so conditional rendering works
            }, () => {
                console.log('state updated with new WU  info')
            })


        }).catch(err => {
            if (err) throw err;
        })

        API.getNOAAtemperature().then(results => {
            console.log("temp", results.data)
            let newWeather = { ...this.state.weather }
            newWeather.noaaTemperature = results.data
            this.setState({ weather: newWeather, isNOAAtempPopulated: true }, () => {
                console.log('state updated with new noaa temp info')
            })
        }).catch(err => {
            if (err) throw err;
        })

        API.getNOAAtides().then(results => {
            console.log("tide", results.data)
            let newTides = { ...this.state.weather }
            newTides.noaaTides = results.data
            this.setState({ weather: newTides, isNOAAtidesPopulated: true }, () => {
                console.log('state updated with new noaa tide info')
            })
        }).catch(err => {
            if (err) throw err;
        })

        API.getMagicSeaweed().then(results => {
            console.log("seaweed", results)
            let newMagic = { ...this.state.weather }
            newMagic.magicSeaweed = results.data
            newMagic.magicSeaweed.spotID = APIKEYS.magicSeaweedSpotName
            this.setState({
                weather: newMagic, isMagicSeaweedPopulated: true
            }, () => {
                console.log("state updated with new magic seaweed info")
            })
        }).catch(err => {
            if (err) throw err;
        })
    }

    render() {
        return (
            <Row style={this.styles.baseText}>
                {/* condtionally render the top row, if there is data */}
                {this.state.isWUpopulated ? (
                    <TopRow
                        weather={this.state.weather.weatherUnderground}
                        beaufort={this.state.weather.weatherUnderground.beaufort}
                        style={this.styles}
                        daytime={this.state.weather.weatherUnderground.daytime}
                        sunset={this.state.weather.weatherUnderground.sunset}
                        sunrise={this.state.weather.weatherUnderground.sunrise}
                        spotID={this.state.weather.magicSeaweed.spotID}
                        moon={this.state.weather.weatherUnderground.moonPhase} />
                ) : null }
                { this.state.isNOAAtidesPopulated ? (
                    <CurrentTide 
                        tides={this.state.weather.noaaTides}
                        temps={this.state.weather.noaaTemperature} /> 
                ) : null }
                <hr />
                <h2> PeriodicForecast </h2>
                <hr />
                <h2> Daily Forecast </h2>
                {/* {this.state.weather.currentObservation ? (
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

                        {this.state.weather.forecast ? (
                            <TextForecast forecast={this.state.weather.forecast} />) : null}

                        {this.state.isWeatherPopulated ?
                            (<PeriodicForecast forecast={this.state.weather.forecastPeriodic} />) : null}

                        {this.state.isWeatherPopulated ?
                            (<DailyForecast forecast={this.state.weather.forecastDaily} />) : null} */}
            </Row>
        );
    }
}

export default Surf;