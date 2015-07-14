'use strict';

angular.module('myApp.resorts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resorts', {
    templateUrl: 'resorts/resorts.html',
    controller: 'ResortsCtrl'
  });
}])

.controller('ResortsCtrl', ['$scope', function($scope) {
	
}]);