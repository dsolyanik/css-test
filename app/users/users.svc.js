(function () {
    'use strict';

    angular
        .module('timeclock.users')
        .factory('usersSvc', Service);

    function Service($http) {

        var factory = {};

        factory.getUsers = function () {
            return $http.get('content.json');
        };

        factory.setIsOnline = function (id) {
            // Set user online on server or some other logic.
        };

        return factory;

    }

})();


