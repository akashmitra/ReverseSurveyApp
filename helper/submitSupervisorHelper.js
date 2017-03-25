(function () {

    // Injecting Logger Module
    var logger = require('../log');
    var Supervisor = require('../models/supervisormodels');

    exports.addSupervisor = function (req, res) {

        var newSupervisor = Supervisor({
            'RESPONDANT': 'Akash',
            'SUPERVISOR': req.body.Supervisor.name,
            'RATE': req.body.Supervisor.rating,
            'INVOLVE': req.body.Supervisor.involvement
        });

        logger.trace('newPortfolio :: ' + newSupervisor);

        newSupervisor.save(function (err) {
            req.body.Status = 'success';
            logger.trace('Supervisor Created!');
            if (err) {
                req.body.Status = 'failure';
                req.body.errmsg = "Database error";
            };

        });

    }

}());


