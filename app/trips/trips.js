'use strict';

angular.module('asc.trips', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/trips', {
    templateUrl: 'trips/trips.html',
    controller: 'TripsCtrl'
  });
}])

.controller('TripsCtrl', ['$scope', function($scope) {
    $scope.trips = [
        { name: 'Val Gardena - Dolomites', date: 'January 26 - February 6, 2018', templatePath: 'trips/articles/val-gardena.html' },
        { name: 'Park City', date: 'February 24 - March 3, 2018', templatePath: 'trips/articles/park-city.html' },
        { name: 'Breckenridge', date: 'April 2 - 8, 2017', templatePath: 'trips/articles/breckenridge.html' }
    ];
    
    $scope.changeSelected = function (trip) {
        $scope.selectedPath = trip.templatePath;
        for (var i = 0; i < $scope.trips.length; i++) {
            $scope.trips[i].selected = false;
        }
        trip.selected = true;
    };
    
    function onLoad() {
        $scope.changeSelected($scope.trips[0]);
    }
    
    onLoad();
}]);