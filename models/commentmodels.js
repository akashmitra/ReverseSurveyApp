var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var overviewSchema = new Schema({
    TARGET: String,
    COMMENT: String
}, {
    collection: 'comments'
});

// Create a model 
var Comment = mongoose.model('Comment', overviewSchema);

// Make model available 
module.exports = Comment;
