
let express = require('express');
let user_routes = require('../app/routes/user');
// let post_routes = require('../app/routes/post');

module.exports = function(){
    let app = express();
    app.set('port', 3000);
    app.use(express.static('./public'));
    user_routes(app);
    // post_routes(app);

    return app;
}