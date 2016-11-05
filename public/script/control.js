// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
var app = angular.module('surveyApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'chart.js']);

// configuring our routes 
// =============================================================================
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'views/form.html',
            controller: 'surveyController'
        })

        // View for Overview
        .state('form.overview', {
            url: '/overview',
            templateUrl: 'views/form-overview.html'
        })

        // url will be /form/supervisor
        .state('form.supervisor', {
            url: '/supervisor',
            templateUrl: 'views/form-supervisor.html'
        })

        // url will be /form/team
        .state('form.team', {
            url: '/team',
            templateUrl: 'views/form-team.html'
        })

        // url will be /form/teammates
        .state('form.teammates', {
            url: '/teammates',
            templateUrl: 'views/form-teammates.html'
        })

        // url will be /form/portfolio
        .state('form.portfolio', {
            url: '/portfolio',
            templateUrl: 'views/form-portfolio.html'
        })

        // url will be /form/feedback
        .state('form.feedback', {
            url: '/feedback',
            templateUrl: 'views/form-feedback.html'
        })

        .state('review', {
            url: '/review',
            templateUrl: 'views/review.html',
            controller: 'reviewController'
        });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/home');
});


/********************************/
/* Directive for JQuery Chosen  */
/********************************/
app.directive('chosen', function () {
    var linker = function (scope, element, attr) {
        // update the select when data is loaded
        scope.$watch(attr.chosen, function (oldVal, newVal) {
            element.trigger('chosen:updated');
        });

        // update the select when the model changes
        scope.$watch(attr.ngModel, function () {
            element.trigger('chosen:updated');
        });

        element.chosen();
    };

    return {
        restrict: 'A',
        link: linker
    };
});


// Controller for the  Survey
// =============================================================================
app.controller('surveyController', ['$scope', '$http', '$state', 'Validate', function (sc, $http, $state, Validate) {

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
    }

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
    }

    sc.nextState = function (tonext) {
        sc.currentstate = tonext;
        $state.go(tonext);
    }



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


}]);

// Controller for the  Review Feedback
// =============================================================================
app.controller('reviewController', ['$scope', '$http', '$state', 'Validate', function (sc, $http, $state, Validate) {



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



    sc.getReview = function (resourceName) {

        sc.supervisorlist = null;
        sc.teammemberlist = null;
        sc.commentslist = null;

        console.log(sc.resourceName);
        sc.finalValue = {
            "resourceName": sc.resourceName
        }


        //Service POST for Survey Submission
        var req = {
            method: 'POST',
            url: '/getReview',
            data: sc.finalValue
        };

        sc.postpromise = $http(req)
            .success(function (response) {
                /*executed when server responds back*/
                sc.supervisorlist = response.supervisor;
                sc.teammemberlist = response.teammember;
                sc.commentslist = response.comments;


                sc.labels = ["Very Good", "Good", "Neutral", "Bad", "Very Bad"];
                sc.data = [500, 200, 100, 50, 60];

            });

        sc.chartData = function (datalist) {
            sc.resp = Count.reqCount(supervisorlist);

        }

        sc.filterTable = function (keyword) {
            if (keyword == "respondant") {
                sc.filterkeyword = "RESPONDANT";
            } else if (keyword == "rate") {
                sc.filterkeyword = "RATE";
            } else if (keyword == "involve") {
                sc.filterkeyword = "INVOLVE";
            }
        }


    };
    // end of review controller

}]);