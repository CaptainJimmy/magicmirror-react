import axios from 'axios'
import APIKEYS from './APIKEYS'

export default {
    getMagicSeaweed: () => {

    },
    getWU: () => {
        let WUURL = encodeURI("http://api.wunderground.com/api/"+APIKEYS.WUAPIKey+"/conditions/hourly/forecast10day/astronomy/alerts/lang:EN/q/pws:"+APIKEYS.WUPWS+".json")
        axios.get(WUURL).then( results => {
            console.log(results.data)
        })
    },
    getNOAA: () => {

    }
}
