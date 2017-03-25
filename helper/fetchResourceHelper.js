(function () {

    // Injecting the Resource model
    var Resource = require('../models/resourcemodels');
    var logger = require('../log');

    exports.getResource = function (req, res) {

        // get the ResourceList
        Resource.find(function (err, resource) {
            if (err) {
                logger.trace(err);
                req.body.errmsg = "Database error";
            } else if (resource.length) {
                logger.trace('Number of Resources :: ' + resource.length);
                req.body.resource = resource;
                res.end(JSON.stringify(req.body));
            } else {
                logger.trace('No Records Found!');
                req.body.errmsg = "No records found";
                res.end(JSON.stringify(req.body));
            }

        });
    }


}());


