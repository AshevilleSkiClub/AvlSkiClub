'use strict';

angular.module('myApp.racing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/racing', {
    templateUrl: 'racing/racing.html',
    conroller: 'RacingCtrl'
  });
}])

.controller('RacingCtrl', ['$scope', function($scope) {
    $scope.links = [
        { name: 'Schedule', templatePath: 'racing/articles/race-schedule.html' },
        { name: 'Results', templatePath: 'racing/articles/race-results.html' },
        { name: 'Sponsors', templatePath: 'racing/articles/race-sponsors.html' }
    ];
    
    $scope.changeSelected = function (link) {
        $scope.selectedPath = link.templatePath;
        for (var i = 0; i < $scope.links.length; i++) {
            $scope.links[i].selected = false;
        }
        link.selected = true;
    };
    
    function onLoad() {
        $scope.changeSelected($scope.links[0]);
    }
    
    onLoad();
}])


;