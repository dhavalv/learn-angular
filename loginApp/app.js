'use strict'
var loginApp = angular.module('loginApp',['ngRoute']);
loginApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'templates/loginForm.tpl',
       controller: 'loginController'
    })
    .when('/home',{
      templateUrl: 'templates/dashboard.html',
      controller: 'HomeController'
    })
    .when('/about-us',{
      template: '<h1>About us page</h1>'
    })
    .otherwise({ redirectTo: '/' })
}]);

loginApp.run(function($rootScope,$location,loginService){
  console.log($location.path());
  var routePermission = ['/home','/about-us','/'];
  $rootScope.$on('$routeChangeStart',function() {
    //console.log('>> exit tab: ' + routePermission.indexOf($location.path()));
    //console.log('>> logged: ' + loginService.isLogged());
    if(routePermission.indexOf($location.path()) != -1){
      var connected = loginService.isLogged();
      connected.then(function(msg){
          if(!msg.data) $location.path('/')
          else $location.path('/home');
      })
    }
  });
});
