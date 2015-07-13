(function () {
    'use strict';


    var ngModule = angular.module('climb', ['ng']);


    ngModule.factory('ClimbService', ClimbService);

    function ClimbService($http) {

        var climbService = {

        };

        return climbService;
    }

}());
