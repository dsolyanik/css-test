(function () {
    'use strict';

    angular
        .module('timeclock')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/users'});
    }
})();


