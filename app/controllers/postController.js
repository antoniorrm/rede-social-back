//Stub database

let posts = [
    { _id: 1, text: "Tudo certo?", likes: 2, user_id: [1] },
    { _id: 2, text: "Boa Noiteee", likes: 10, user_id: [3] }
];

//Adicionar Post
module.exports.createPost = function(req, res){
    console.log(req.body);
    posts.push(req.body);
    res.status(200).send(req.body);
}

//Buscar post por id
module.exports.getPost = function(req, res) {
    let id = req.params.id;

    let post = posts.find(post => (post._id == id));

    if (post) {
        res.json(post);
    } else {
        res.status(404).send('post not found!');
    }
};

//Buscar todos os posts
module.exports.getAllPosts = function(req, res) {
    res.json(posts);
};

// Atualizar Post
module.exports.updatePost = function(req, res) {
    let id = req.params.id;

    let post = posts.find(post => (post._id == id));
    let postN = req.body;

    if (post) {
        let indexPost = posts.indexOf(post);
        posts[indexPost] = postN;
        res.json(postN);
    } else {
        res.status(404).send('Post not found!');
    }
};

// Delete Post
module.exports.deletePost = function(req, res) {
    let id = req.params.id;
    let post = posts.find(post => (post._id == id));
    
    if (post) {
        let indexPost = posts.indexOf(post);
        posts.slice(indexPost, 1);
        res.json(post);
    } else {
        res.status(404).send('Post not found!');
    }
};