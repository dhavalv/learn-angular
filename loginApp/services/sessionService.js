'use strict'
loginApp
.factory('sessionService', function($http){
    return {
        set: function(key,value){
            return sessionStorage.setItem(key,value);
        },
        get:function(key){
            return sessionStorage.getItem(key);
        },
        destroy:function(key){
            $http.post('backend/destroy_session.php');
            return sessionStorage.removeItem(key);
        }
    }
})
