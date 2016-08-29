(function () {
    'use strict';

    angular
        .module('timeclock.users')
        .controller('users.ctrl', Controller);

    function Controller($scope, usersSvc, $timeout) {

        usersSvc.getUsers()
            .success(function (data) {
                $scope.users = data;
            });

        $scope.openDialog = function (id) {
            $scope.isOpenDialog = true;
            $scope.currentUser = _.find($scope.users, {id: id});
        };

        $scope.closeDialog = function () {
            $scope.isOpenDialog = false;
        };

        $scope.confirm = function () {
            usersSvc.setIsOnline($scope.currentUser.id);
            _.find($scope.users, {id: $scope.currentUser.id}).online = !$scope.currentUser.online;
            $scope.greeting = true;

            $timeout(function () {
                $scope.closeDialog();
                $scope.greeting = false;
            }, 2000);
        };

    }
})();
