'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
    .controller('MainCtrl', function ($scope, $auth,$http) {
        $scope.user = {};

        $scope.loginForm = {};
        $scope.loginForm.email = 'ba@example.com';
        $scope.loginForm.password = 'parola';

        $scope.user.isAuthenticated = $auth.isAuthenticated();

        $scope.logout = function()
        {
            $auth.logout();
            location.reload();
        }

        $scope.login = function () {
            $auth.login($scope.loginForm).then(
                function (response) {
                    location.reload();
                },
                function (error) {
                    console.log(error)
                }
            )
        }

        if($auth.isAuthenticated())
        {
            $scope.users = [];

            $http.get('http://api.users.box/getUsers').then(
                function(response)
                {
                    $scope.users = response.data;
                },
                function(error)
                {
                    console.log(error);
                }
            );
        }
    });
