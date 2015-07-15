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

.controller('RacingScheduleCtrl', ['$scope', function($scope) {
    $scope.schedule = [
        { date: 'December 19 - 20', place: 'Appalachian Mt, NC', time: '9:30 am'},
        { date: 'January 9 - 10', place: 'Sugar Mt, NC', time: '9:00 am'},
        { date: 'January 16 - 23', place: 'Crescent Ski Council Ski Week', time: ''},
        { date: 'January 30 - 31', place: 'Appalachian Mt, NC', time: '9:30 am'},
        { date: 'February 1', place: 'Cupp Run Challenge at Snowshoe, WV', time: ''},
        { date: 'February 6 - 7', place: 'Beech Mt, NC', time: '10:00 am'},
        { date: 'February 20 - 21', place: 'Sugar Mt, NC', time: '9:00 am'},
        { date: 'March TBA', place: 'Governor’s Cup Race at Timberline, WV', time: ''},
        { date: 'March TBA', place: 'Dick Trundy/Sugar Cup GS Sugar Mt', time: '9:00 am'},
        { date: 'March 4 - 6', place: 'Crescent Cup, SilverCreek, WV', time: '8:45 am'},
        { date: 'March TBA', place: 'Rich Mead', time: ''},
    ];
}])
;