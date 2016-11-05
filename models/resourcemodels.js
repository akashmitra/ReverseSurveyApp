var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var resourceSchema = new Schema({
    ID: String,
    NAME: String,
    DESIGNATION: String
}, {
    collection: 'resources'
}); 

// Create a model 
var Resource = mongoose.model('Resource', resourceSchema);

// Make model available 
module.exports = Resource;
