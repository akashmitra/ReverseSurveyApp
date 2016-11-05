// Injecting the Supervisor model
var Supervisor = require('../models/supervisormodels');
/*var modify= require('../helper/modifyResultsHelper');*/
var fetchTeam = require('../helper/fetchTeamHelper');
var logger = require('../log');

exports.getSupervisor = function(req, res) {    

    

    var data= {
        'SUPERVISOR': req.body.resourceName
    }
   console.log("searched data is:: " +data.SUPERVISOR);


    // get the Supervisor details
        Supervisor.find(data, function(err, result) {

            if (err) {
                req.body.Status = 'failure';
                req.body.errmsg="Database error";
                logger.trace(err);
            } else if (result.length) {
                req.body.supervisor=modify.modifyResults(result);
                // req.body.finalResult= modify.modifyResults(result);


                logger.trace('Supervisor found'+result); 
            } else {
                logger.trace('No records found');
                // req.body.supervisor.Status = 'failure';
                // req.body.supervisorerrormsg="No survey found";
                // res.end(JSON.stringify(req.body));
            }
        }).then(function(){

            fetchTeam.getTeam(req,res);

            });	
   
}
