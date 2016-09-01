'use strict'
loginApp.
controller('HomeController', ['$scope','loginService', function($scope,loginService){
    $scope.logout = function(){
        loginService.logout();
    }
}])
