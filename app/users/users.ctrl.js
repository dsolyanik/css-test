(function () {
    'use strict';

    angular
        .module('timeclock.users')
        .controller('users.ctrl', Controller);

    function Controller($scope, usersSvc) {

        $scope.userName = "est";

        usersSvc.getUsers()
            .success(function (data) {
                $scope.users = data;
            });

        $scope.openDialog = function (id) {
            $scope.id = id;
            $scope.isOpenDialog = true;
        };

        $scope.closeDialog = function () {
            $scope.isOpenDialog = false;
        };

        $scope.confirm = function (id) {
            usersSvc.setIsOnline(id);
            
            _.find($scope.users, {id: $scope.id}).online = true;
            $scope.isOpenDialog = false;
        }

    }
})();
