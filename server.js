var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var PORT = ( process.env.PORT || 3000 )

// Initialize Express
var app = express();

// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
    extended: false
}));
// Use express.static to serve the public folder as a static directory
app.use(express.static('build'));
app.use(cors())

// Routes


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// Start the server
app.listen(PORT, function() {
    console.log('App running on port ' + PORT + '!');
});