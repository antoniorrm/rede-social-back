//Stub database

let users = [
    { _id: 1, nome: "Pereira", matricula: "3311" },
    { _id: 2, nome: "Jackson", matricula: "1133" },
    { _id: 3, nome: "Jordao", matricula: "2244" }
];

//Adicionar Usuário
module.exports.createUser = function(req, res){
    console.log(req.body);
    users.push(req.body);
    res.status(200).send(req.body);
}

//Buscar Usuário por id
module.exports.getUser = function(req, res) {
    let id = req.params.id;

    let user = users.find(user => (user._id == id));

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found!');
    }
};

//Buscar todos os usuários
module.exports.getAllUsers = function(req, res) {
    res.json(users);
};

// Atualizar Usuário
module.exports.updateUser = function(req, res) {
    let id = req.params.id;

    let user = users.find(user => (user._id == id));
    let userN = req.body;

    if (user) {
        let indexUser = users.indexOf(user);
        users[indexUser] = userN;
        res.json(userN);
    } else {
        res.status(404).send('User not found!');
    }
};

// Delete Usuário
module.exports.deleteUser = function(req, res) {
    let id = req.params.id;
    let user = users.find(user => (user._id == id));
    
    if (user) {
        let indexUser = users.indexOf(user);
        users.slice(indexUser, 1);
        res.json(user);
    } else {
        res.status(404).send('User not found!');
    }
};