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
//        { name: 'Mt Bachelor', date: 'Jan 16-23, 2016', templatePath: 'trips/articles/mt-bachelor.html' },
        { name: 'Beaver Creek', date: 'Jan 14-21, 2017', templatePath: 'trips/articles/beaver-creek.html' },
        { name: 'St. Moritz, Switzerland', date: 'Jan 28-Feb 5, 2017', templatePath: 'trips/articles/st-moritz.html' }
//        { name: 'Big Sky', date: 'Mar 12-19, 2016', templatePath: 'trips/articles/big-sky.html' }
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