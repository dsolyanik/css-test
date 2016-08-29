(function () {
    'use strict';

    angular
        .module('timeclock.users')
        .controller('users.ctrl', Controller);

    function Controller($scope, usersSvc, $timeout) {

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
        };
        
        $scope.signIn = function () {
            angular.element(document.querySelector('.greeting')).text("Have a nice day!");
            angular.element(document.querySelector('#confirm')).text("");
            $timeout($scope.closeDialog, 1500);

        }

    }
})();
