var http = require('http');
var app = require('./config/express.js')();

//Create Server end set port
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server running at port ' + app.get('port'));
});

