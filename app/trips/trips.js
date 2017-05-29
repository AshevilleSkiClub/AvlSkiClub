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
        { name: 'Race Training Camp', date: 'June 24 – July 23, 2017', templatePath: 'trips/articles/asc-rdt.html' },
        { name: 'Steamboat', date: 'December 2 - 9, 2017', templatePath: 'trips/articles/steamboat.html' },
        { name: 'Mammoth', date: 'January 13 - 20, 2018', templatePath: 'trips/articles/mammoth.html' },
        { name: 'Val Gardena - Dolomites', date: 'January 26 - February 6, 2018', templatePath: 'trips/articles/val-gardena.html' },
        { name: 'Park City', date: 'February 24 - March 3, 2018', templatePath: 'trips/articles/park-city.html' },
        { name: 'Killington', date: 'March 18 - 23, 2018', templatePath: 'trips/articles/killington.html' },
        { name: 'Breckenridge', date: 'April 2 - 8, 2018', templatePath: 'trips/articles/breckenridge.html' }
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