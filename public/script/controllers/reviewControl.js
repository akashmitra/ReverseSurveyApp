(function () {
    'use strict';

    angular.module('surveyApp')
        .controller('reviewController', reviewController);

    function reviewController($scope, $http, $state, Validate) {

        var sc= $scope;
        
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


    }

}());