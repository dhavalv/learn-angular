// myApp is global namespace of angular, blank array is module depedency of myApp
//angular is also object
//ng-* is angular custom attribute like data-*
var myApp = angular.module('myApp',[]);
//controller container under the global namespace: myApp
//$scope is provider
//$log is provider as object with method of info,warn,error,debug
//custom filter
myApp.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return 'text';
    };
});
myApp.controller('myAppController',function($scope,$log,$filter){
    //set property into $scope object
    //Tutorial - 1
    /*$scope.name = 'Tony';
    $scope.occupation = 'Coder';
    $scope.getUserName = function(){
        return 'Steve';
    }
    $log.info('This is an information!');
    $log.warn('This was warning message!');
    $log.debug('This is a debug message!');
    $log.error('This was error message!');
    $log.log("Log Message");
    console.log($log);*/
    //Tutorial - 2
    $scope.firstname = 'Tony';
    $scope.name = 'dhaval';
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'},
        {name:'Aai',country:'Norway'}
        ];
    $scope.arrNames = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai']; });

