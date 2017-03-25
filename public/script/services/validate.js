(function(){
    'use strict';

    angular.module('surveyApp')
    .service('Validate', Validate);
    
    function Validate($rootScope) {

        this.reqcheck = function (value) {
            var validateresponse = {};

            if ((value === null) || (value === undefined)) {
                validateresponse.status = false;
                validateresponse.msg = "Please Enter a Value Here";
                return validateresponse;
            } else {
                validateresponse.status = true;
                return validateresponse;
            }
        };
    }

}());
