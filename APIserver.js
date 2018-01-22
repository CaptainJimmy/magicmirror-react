
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const axios = require('axios')
const APIkeys = require('./APIkeys') //export of APIkeys, could not reuse the keys in src because ES5 doesnt play nice with ES7 and ES8

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
app.use(cors());

app.get('/magic', (req,res,next) => {
    var magicSeaweedURL = encodeURI("http://magicseaweed.com/api/"+APIkeys.magicSeaweedKey+"/forecast/?spot_id="+APIkeys.magicSeaweedSpotID);

    console.log(magicSeaweedURL)
    axios.get(magicSeaweedURL).then(results =>{
        console.log(results)
        res.json(results.data)
    }).catch( err => {
        if (err) res.json(err)
    })
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});