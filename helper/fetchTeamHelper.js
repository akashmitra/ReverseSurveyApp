(function () {

    // Injecting the Resource model
    var Team = require('../models/teammodels');
    /*var fetchComments=require('../helper/fetchCommentsHelper');*/
    var logger = require('../log');

    exports.getTeam = function (req, res) {

        var data = {
            'MEMBERS': req.body.resourceName
        }
        // get the Team details
        Team.find(data, function (err, result) {
            if (err) {
                req.body.Status = 'failure';
                req.body.errmsg = "Database error";
                logger.trace(err);
            } else if (result.length) {
                req.body.teammember = result;
                logger.trace('Team found :: ' + result);
                // res.end(JSON.stringify(req.body));
            } else {
                logger.trace('No records found');
                // req.body.Steammember.tatus = 'failure';
                // req.body.teammember.errormsg="no reviews found as a teammember";
                // res.end(JSON.stringify(req.body));
            }
        }).then(function () {

            fetchComments.getComments(req, res);

        });

    }


}());

