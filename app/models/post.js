var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        text: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            required: true
        },
        uid: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
    });
    return mongoose.model('Post', schema);
}();