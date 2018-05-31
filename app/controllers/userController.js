//Stub database

let users = [
    { _id: 1, nome: "Pereira", matricula: "3311" },
    { _id: 2, nome: "Jackson", matricula: "1133" },
    { _id: 3, nome: "Jordao", matricula: "2244" }
];

module.exports.getAllUsers = function(req, res) {
    res.json(users);
};

module.exports.getUser = function(req, res) {
    var id = req.params.id;

    var user = usuarios.find(user => (user._id == id));

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found!');
    }
};