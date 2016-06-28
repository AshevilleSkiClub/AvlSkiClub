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
        { name: 'Steamboat', date: 'Dec 3-10, 2016', templatePath: 'trips/articles/steamboat.html' },
        { name: 'Beaver Creek', date: 'Jan 14-21, 2017', templatePath: 'trips/articles/beaver-creek.html' },
        { name: 'St. Moritz, Switzerland', date: 'Jan 28-Feb 5, 2017', templatePath: 'trips/articles/st-moritz.html' },
        { name: 'Banff, Canada', date: 'Feb 18-25, 2017', templatePath: 'trips/articles/banff.html' },
        { name: 'Winter Park', date: 'Mar 25-Apr 1, 2017', templatePath: 'trips/articles/winter-park.html' },
        { name: 'Greek Isle Cruise', date: 'June 10-17, 2017', templatePath: 'trips/articles/greek-isle-cruise.html' }
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