var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var portfolioSchema = new Schema({
	RESPONDANT: String,
    Q1: String,
    Q2: String,
    Q3: String,
    Q4: String,
    Q5: String,
    Q6: String,
    Q7: String,
    Q8: String,
    Q9: String,
    Q10: String,
    Q11: String,
    ASPIRE: String
}, {
    collection: 'portfolio'
});

// Create a model 
var Portfolio = mongoose.model('Portfolio', portfolioSchema);


// Make model available 
module.exports = Portfolio;