(function () {
    // Injecting Logger Module
    var logger = require('../log');
    var Portfolio = require('../models/portfoliomodels');

    exports.addPortfolio = function (req, res) {

        var newPortfolio = Portfolio({
            "RESPONDANT": "Akash",
            "Q1": req.body.Portfolio.areaofwork,
            "Q2": req.body.Portfolio.volumeofwork,
            "Q3": req.body.Portfolio.balance,
            "Q4": req.body.Portfolio.environment,
            "Q5": req.body.Portfolio.help,
            "Q6": req.body.Portfolio.learn,
            "Q7": req.body.Portfolio.communication,
            "Q8": req.body.Portfolio.appraisal,
            "Q9": req.body.Portfolio.rnr,
            "Q10": req.body.Portfolio.leadership,
            "Q11": req.body.Portfolio.peopleconnect,
            "ASPIRE": req.body.Portfolio.aspire
        });

        console.log('newPortfolio :: ' + newPortfolio);

        newPortfolio.save(function (err) {
            req.body.Status = 'success';
            if (err) {
                req.body.Status = 'failure';
                req.body.errmsg = "Database error";
            }
            logger.trace('Portfolio Created!');

        });


    };

}());


