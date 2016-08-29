(function () {
    'use strict';

    angular
        .module('timeclock.users')
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'users/users.html',
            controller: 'users.ctrl'
        });
    }
})();
