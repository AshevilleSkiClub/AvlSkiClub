'use strict';

angular.module('myApp.trips', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trips', {
    templateUrl: 'trips/trips.html',
    controller: 'TripsCtrl'
  });
}])

.controller('TripsCtrl', ['$scope', function($scope) {
	
}]);