(function () {
    'use strict';

    angular.module('surveyApp')
        .controller('surveyController', surveyController);

    function surveyController($scope, $http, $state, Validate) {

        var sc= $scope;

        // we will store all of our form data in this object
        sc.overview = {};
        sc.supervisor = {};
        sc.team = {};
        sc.teammate = {};
        sc.portfolio = {};
        sc.feedback = {};

        sc.currentstate = $state.current.name;

        sc.finalValues = {
            "Overview": sc.overview,
            "Supervisor": sc.supervisor,
            "Team": sc.team,
            "Teammate": sc.teammate,
            "Portfolio": sc.portfolio,
            "Feedback": sc.feedback
        };

        sc.formValidate = function (tonext, validatewhat) {
            sc.resp = Validate.reqcheck(validatewhat);
            if (sc.resp.status == true) {
                sc.currentstate = tonext;
                console.log(sc.currentstate);
                $state.go(tonext);
            }
        };

        sc.previousState = function (toprevious) {
            sc.currentstate = toprevious;
            $state.go(toprevious);
        };

        sc.nextState = function (tonext) {
            sc.currentstate = tonext;
            $state.go(tonext);
        };



        console.log(sc.currentstate);


        //Service Call for Resource DropDown
        var req = {
            method: 'GET',
            url: '/getResourceList'
        };

        sc.postpromise = $http(req)
            .success(function (response) {
                /*executed when server responds back*/
                sc.resourceList = response.resource;
            });


        // Function for Submit values for the Survey
        sc.submitSurvey = function () {

            //Service POST for Survey Submission
            var req = {
                method: 'POST',
                url: '/submitSurvey',
                data: sc.finalValues
            };

            sc.postpromise = $http(req)
                .success(function (response) {
                    /*executed when server responds back*/
                    /*sc.resourceList = response.resource;*/
                    alert('Survey Submitted Successfully');
                });
        };


    }

}());
