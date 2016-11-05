/*Service to Validate Data*/
app.service('Validate', function($rootScope) {

    this.reqcheck = function(value) {
        var validateresponse={};

        if ((value === null) || (value === undefined)) {
            validateresponse.status = false;
            validateresponse.msg = "Please Enter a Value Here";
            return validateresponse;
        } else {
            validateresponse.status = true;
            return validateresponse;
        }
    };

});



/*Service to Sanitize Data*/
/*app.service('Sanitize', function($rootScope) {

    this.formatdate = function(date) {
        return $filter('date')(date, "medium")
    };

    this.formatdatetime = function(date, time) {
        var hrs = parseInt(time.slice(0, 2));
        var min = parseInt(time.slice(3, 5));

        date.setHours(hrs);
        date.setMinutes(min);

        return this.formatdate(date)
    };


});*/
