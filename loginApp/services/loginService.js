'use strict'
loginApp.factory('loginService', function ($http,$location,sessionService) {
    return {
        login:function(user,scope){
            $http.post('backend/users.php',user)
            .success(function(results){
                var uniqueId = results;
                if(uniqueId){
                    sessionService.set('user',uniqueId);
                    $location.path('/home');
                }else{
                    scope.login_message = 'login failed';
                    $location.path('/')
                }
            }).error(function(error) {
                console.log(error);
            });
        },
        logout:function(){
            console.log('successfully logout');
            //scope.login_message = 'successfully logout';
            sessionService.destroy('user');
            $location.path('/');

        },
        isLogged:function(){
            var $checkSession = $http.post('backend/check_session.php');
            return $checkSession;

        }
    };
})
