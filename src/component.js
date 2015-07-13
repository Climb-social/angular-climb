(function () {
    'use strict';

    var ngModule = angular.module('climb', ['ng']);

    ngModule.factory('ClimbFactory', ['$http', ClimbFactory]);

    function ClimbFactory($http) {

        var climb = {
            getFeed: function(FEED_ID) {

                if (!FEED_ID) {
                    throw new Error('Please specify a feedId');
                }

            }
        };

        return climb;

    }

}());
