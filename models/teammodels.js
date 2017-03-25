(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    // Create a schema
    var teamSchema = new Schema({
        RESPONDANT: String,
        MEMBERS: String,
        RATE: String,
        ISTL: String
    }, {
            collection: 'team'
        });

    // Create a model 
    var Team = mongoose.model('Team', teamSchema);


    // Make model available 
    module.exports = Team;

}());

