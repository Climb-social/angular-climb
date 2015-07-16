(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
        // CommonJS support (for us webpack/browserify/ComponentJS folks)
        module.exports = factory(require('angular'));
    } else {
        // in the case of no module loading system
        // then don't worry about creating a global
        // variable like you would in normal UMD.
        // It's not really helpful... Just call your factory
        return factory(root.angular);
    }
}(this, function (angular) {

    'use strict';

    var moduleName = 'angular-climb';

    var ngModule = angular.module(moduleName, ['ng']);


    ngModule
        .constant('CLIMB_BASE_URL', 'http://app.climb.social/api/v1/collections/')

        .factory('ClimbFactory', ['$http', 'CLIMB_BASE_URL', ClimbFactory]);

    function ClimbFactory($http, CLIMB_BASE_URL) {

        return ({
            getFeed: function(FEED_ID, limit) {

                if (!FEED_ID) {
                    throw new Error('Please specify a feedId');
                }

                var climbFeedUrl = [CLIMB_BASE_URL, FEED_ID, '?callback=JSON_CALLBACK'].join('');

                return $http.jsonp(climbFeedUrl)
                    .then(function success(response) {
                        var items = response.data;

                        if(items) {
                            return items.slice(0, limit);
                        }
                        return items;
                    });

            }
        });

    }

    return moduleName;

}));
