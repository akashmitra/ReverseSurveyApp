var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var supervisorSchema = new Schema({
	RESPONDANT: String,
    SUPERVISOR: String,
    RATE: String,
    INVOLVE: String
}, {
    collection: 'supervisor'
});

// Create a model 
var Supervisor = mongoose.model('Supervisor', supervisorSchema);


// Make model available 
module.exports = Supervisor;