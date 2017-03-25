(function () {

    // Injecting Logger Module
    var logger = require('../log');
    var submitOverview = require('../helper/submitOverviewHelper');
    var submitSupervisor = require('../helper/submitSupervisorHelper');
    var submitTeam = require('../helper/submitTeamHelper');
    var submitComment = require('../helper/commentHelper');
    var submitPortfolio = require('../helper/submitPortfolioHelper');


    exports.answerrouter = function (req, res) {

        var commentvalue = [{
            TARGET: req.body.Supervisor.name,
            COMMENT: req.body.Supervisor.comments
        }, {
            TARGET: req.body.Team.name,
            COMMENT: req.body.Team.comments
        }, {
            TARGET: 'teammates-comments',
            COMMENT: req.body.Teammate.comments
        }, {
            TARGET: 'portfolio-comments',
            COMMENT: req.body.Portfolio.comments
        }, {
            TARGET: 'portfolio-likes',
            COMMENT: req.body.Portfolio.likes
        }, {
            TARGET: 'portfolio-dislikes',
            COMMENT: req.body.Portfolio.dislikes
        }, {
            TARGET: 'portfolio-suggestions',
            COMMENT: req.body.Portfolio.suggestions
        }, {
            TARGET: 'aspire-comment',
            COMMENT: req.body.Portfolio.aspirecomment
        }, {
            TARGET: 'feedback',
            COMMENT: req.body.Feedback.comment
        }];


        submitOverview.addOverview(req, res);
        submitSupervisor.addSupervisor(req, res);
        submitTeam.addTeam(req, res);
        submitComment.addComment(commentvalue);
        submitPortfolio.addPortfolio(req, res);

        res.end(JSON.stringify(req.body));

    }

}());



