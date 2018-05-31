
let controller = require("../controllers/userController.js");

module.exports = function(app){

    app.get("/api/users", controller.getAllUsers);
    app.get("/api/users/:id", controller.getUser);


}