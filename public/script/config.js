(function () {
    'use strict';

    angular.module('surveyApp')
        .config(Configuration, Configuration);

    function Configuration($stateProvider, $urlRouterProvider) {

        $stateProvider
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
        $urlRouterProvider.otherwise('/form/overview');

    }

}());