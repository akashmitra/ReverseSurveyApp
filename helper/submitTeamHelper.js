(function () {
    // Injecting Logger Module
    var logger = require('../log');
    var Team = require('../models/teammodels');

    exports.addTeam = function (req, res) {

        var newTeamLead = Team({
            'RESPONDANT': 'Akash',
            'MEMBERS': req.body.Team.name,
            'RATE': req.body.Team.rating,
            'ISTL': 'Y'
        });

        var newTeamMateOne = Team({
            'RESPONDANT': 'Akash',
            'MEMBERS': req.body.Teammate.nameone,
            'RATE': req.body.Teammate.ratingone,
            'ISTL': 'N'
        });
        var newTeamMateTwo = Team({
            'RESPONDANT': 'Akash',
            'MEMBERS': req.body.Teammate.nametwo,
            'RATE': req.body.Teammate.ratingtwo,
            'ISTL': 'N'
        });
        var newTeamMateThree = Team({
            'RESPONDANT': 'Akash',
            'MEMBERS': req.body.Teammate.namethree,
            'RATE': req.body.Teammate.ratingthree,
            'ISTL': 'N'
        });

        newTeamLead.save(function (err) {
            req.body.Status = 'success';
            if (err) throw err;
            console.log('Team Created!');
        });

        newTeamMateOne.save(function (err) {
            req.body.Status = 'success';
            if (err) throw err;
            console.log('Team Mates Created!');
        });
        newTeamMateTwo.save(function (err) {
            req.body.Status = 'success';
            if (err) throw err;
            console.log('Team Mates Created!');
        });
        newTeamMateThree.save(function (err) {
            req.body.Status = 'success';
            if (err) throw err;
            console.log('Team Mates Created!');
        });

    };

}());


