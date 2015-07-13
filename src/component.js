(function () {
    'use strict';

    var ngModule = angular.module('climb', ['ng']);


    ngModule
        .constant('CLIMB_BASE_URL', 'http://curate.uat.engine6.com/api/v1/collections/')

        .factory('ClimbFactory', ['$http', 'CLIMB_BASE_URL', ClimbFactory]);

    function ClimbFactory($http, CLIMB_BASE_URL) {

        return ({
            getFeed: function(FEED_ID) {

                if (!FEED_ID) {
                    throw new Error('Please specify a feedId');
                }

                var climbFeedUrl = [CLIMB_BASE_URL, FEED_ID].join('');

                return $http.jsonp(climbFeedUrl + '?callback=JSON_CALLBACK')
                    .then(function success(response) {
                        return response.data;
                    });

            }
        });


    }

}());
