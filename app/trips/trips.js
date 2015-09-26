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
        { name: 'Whistler-Blackcomb, BC', date: 'Feb 20-27, 2016', templatePath: 'trips/articles/whistler-blackcomb.html' },
        { name: 'Courmayeur', date: 'Jan 23-31, 2015', templatePath: 'trips/articles/courmayeur.html' },
        { name: 'Steamboat', date: 'Dec 5-12, 2015', templatePath: 'trips/articles/steamboat.html' },
        { name: 'Mt Bachelor', date: 'Jan 16-23, 2016', templatePath: 'trips/articles/mt-bachelor.html' },
        { name: 'Big Sky', date: 'Mar 12-19, 2016', templatePath: 'trips/articles/big-sky.html' }
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