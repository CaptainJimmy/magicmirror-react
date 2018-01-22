import axios from 'axios'
import moment from 'moment'
import APIkeys from './APIkeys'  //create this file by copying ./config.js to ./APIKEYS.js.  The APIKEYS.js is in the gitignore or point this at './config'

export default {
    getMagicSeaweed: () => {
        // Magic Seaweed does not use CORS headers, so you must run an API Proxy
        return (
        axios.get("http://localhost:3001/magic")
        )

    },
    getWU: () => {
        let WUURL = encodeURI("http://api.wunderground.com/api/"+APIkeys.WUAPIKey+"/conditions/hourly/forecast10day/astronomy/alerts/lang:EN/q/pws:"+APIkeys.WUPWS+".json")

        return (
            axios.get(WUURL)
        )
    },
    getNOAAtemperature: () => {
        let todaysDate = moment().format('YYYYMMDD');
        let tomorrowsDate = moment().add(1,'day').format('YYYYMMDD')
        let NOAAtemperatureURL = encodeURI("https://tidesandcurrents.noaa.gov/api/datagetter?product=water_temperature&application=MMM-Surf&begin_date="+todaysDate+"&end_date=" + tomorrowsDate + "&station=" + APIkeys.NOAAstationID + "&time_zone=" + APIkeys.NOAATZ + "&units=english&interval=h&format=json")


        return ( 
            axios.get(NOAAtemperatureURL)
        )
    },
    getNOAAtides: () => {
        let todaysDate = moment().format('YYYYMMDD');
        let tomorrowsDate = moment().add(1,'day').format('YYYYMMDD')
        let NOAAtideURL = encodeURI("https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=MMM-Surfer&begin_date="+todaysDate+"&end_date=" + tomorrowsDate + "&station=" + APIkeys.NOAAstationID + "&datum=MLLW&time_zone=" + APIkeys.NOAATZ + "&units=english&interval=hilo&format=json")
        return (
            axios.get(NOAAtideURL)
        )
    },
    getCurrentOpenWeather: () => {
        let openWeatherURL = encodeURI("https://api.openweathermap.org/data/2.5/weather?q="+APIkeys.openWeatherCity+"&appid="+APIkeys.openWeatherKey+"&mode=json")
        console.log(openWeatherURL)

        return (
            axios.get(openWeatherURL)
        )

    },
    getForecastedOpenWeather: () => {
        let openWeatherURL = encodeURI("https://api.openweathermap.org/data/2.5/forecast/daily?q="+APIkeys.openWeatherCity+"&appid="+APIkeys.openWeatherKey+"&mode=json&cnt=5");
        console.log(openWeatherURL);
        return (
            axios.get(openWeatherURL)
        )

    }
}
