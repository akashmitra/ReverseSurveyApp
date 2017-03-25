(function () {

    // Injecting Logger Module
    var logger = require('../log');
    var fetchSupervisor = require('../helper/fetchSupervisorHelper');

    exports.fetchReview = function (req, res) {
        fetchSupervisor.getSupervisor(req, res);
    };

}());

