(function () {
    
    // Injecting Logger Module
    var logger = require('../log');
    var Comment = require('../models/commentmodels');

    exports.addComment = function (commentvalue) {

        for (var comment in commentvalue) {

            val = commentvalue[comment];

            var newComment = Comment({
                'TARGET': val.TARGET,
                'COMMENT': val.COMMENT
            });

            newComment.save(function (err) {
                logger.trace('Comment Posted!');
                if (err) {
                    req.body.Status = 'failure';
                    req.body.errmsg = "Database error";
                }
            });

        }
    }


}());


