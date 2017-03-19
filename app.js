/* Importing Support APIs */

(function () {

    var express = require('express'),
        http = require('http'),
        path = require('path'),
        log4js = require('log4js');

    var app = express();

    /* Injecting the Helper Classes */
    var db = require('./models/db');
    var logger = require('./log');


    var resourceList = require('./helper/fetchResourceHelper');
    var surveyRouter = require('./helper/surveyRouterHelper');
    var reviewRouter = require('./helper/reviewRouterHelper');


    /*JS client side files has to be placed under a folder by name 'public' */
    app.use(express.static(path.join(__dirname, 'public')));
    /*to access the posted data from client using request body*/
    app.use(express.bodyParser());


    /* Service for Resource List */
    app.get('/getResourceList', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        resourcelist = resourceList.getResource(req, res);
        return resourcelist;
    });

    /* Service to get feedback */
    app.post('/getReview', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        logger.trace('The Body :: ' + req.body);
        feedbacklist = reviewRouter.fetchReview(req, res);
        return feedbacklist;
    });


    /* Service for Survey Submit */
    app.post('/submitSurvey', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        logger.trace('The Body :: ' + req.body);
        surveysub = surveyRouter.answerrouter(req, res);
        return surveysub;
    });


    /* Server at 80 */
    http.createServer(app).listen(80, function () {
        logger.trace("Express server listening on port 80");
    });


}());



