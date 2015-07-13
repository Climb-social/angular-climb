(function () {
    'use strict';

    var ngModule = angular.module('climb', ['ng']);

    ngModule.provider('Climb', ClimbProvider);


    function ClimbProvider() {

        var FEED_ID;

        var climbProvider = {

            setFeedId: function(id) {
                FEED_ID = id;
                return true;
            },

            $get: function ($http) {

                return {
                    getContent: function() {

                        if (!FEED_ID) {
                            throw new Error('Please set a feedId');
                        }
                        //return $http.get();
                    }
                };

            }


        };

        return climbProvider;

    }

}());
