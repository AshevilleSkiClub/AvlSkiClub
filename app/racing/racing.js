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
        { name: 'Camps', templatePath: 'racing/articles/race-camps.html' },
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

.controller('RacingCampsCtrl', ['$scope', function($scope) {
    $scope.camps = [
        { date: 'December 5 - 12', place: 'Steamboat Race Camp', info: 'Sports Am.Tours: 800-876-8551'},
        { date: 'December', place: 'Killington Race Camp', info: '800-621-6867'},
        { date: 'December 6', place: 'CSC Development Training at Appalachian', info: '9:46 am - 3:00 pm'},
        { date: 'December 11 - 13', place: 'Sugar Mt. Race Camp', info: 'Kim Jöchl: 828-898-4521 x224'},
        { date: 'December', place: 'Timberline, WV  Ski School', info: '304-866-4801, Multiple sessions'}
    ];
}])
;