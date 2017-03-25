(function () {
    // Injecting Logger Module
    var logger = require('../log');
    var Overview = require('../models/overviewmodels');

    exports.addOverview = function (req, res) {

        var newOverview = Overview({
            'RESPONDANT': 'Akash',
            'SEX': req.body.Overview.ressex,
            'TIME': req.body.Overview.timeinport,
            'TEAM': req.body.Overview.team
        });

        console.log('newOverview :: ' + newOverview);


        newOverview.save(function (err) {
            req.body.Status = 'success';
            if (err) {
                req.body.Status = 'failure';
                req.body.errmsg = "Database error";
            }
            
            console.log('Overview Added!');
        });


    };


}());


