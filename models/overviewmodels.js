var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var overviewSchema = new Schema({
    RESPONDANT: String,
    SEX: String,
    TIME: String,
    TEAM: String
}, {
    collection: 'overview'
});

// Create a model 
var Overview = mongoose.model('Overview', overviewSchema);

// Make model available 
module.exports = Overview;
