'use strict'
loginApp
.controller('loginController', ['$scope','loginService', function($scope,loginService){
    $scope.login_message = '';
    $scope.login = function login(user){
        loginService.login(user,$scope);
    }
}]);
