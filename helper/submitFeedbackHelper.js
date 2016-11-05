// Injecting Logger Module
var logger = require('../log');

exports.answerrouter = function(req, res) {

var newUser = User({
        'ID' : req.body.ID,
        'USERNAME': req.body.USERNAME,
        'PASSWORD': req.body.PASSWORD
    });

    console.log('newUser :: '+ newUser);


    newUser.save(function(err){
        req.body.Status = 'success';
        if(err) {
            req.body.Status = 'failure';
            req.body.errmsg="Database error";
        };      
        console.log('User Created!');
        res.end(JSON.stringify(req.body));
        
    });     


}
