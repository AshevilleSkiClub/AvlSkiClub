/**
 * Created by pmfarnsw on 4/14/15.
 */

angular.module('asc.calendar', ['ngRoute'])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/calendar', {
            templateUrl: 'calendar/calendar.html',
            controller: 'CalendarCtrl'
        });
    }])

    .controller('CalendarCtrl', ['$scope', function($scope) {
        $scope.upcomingEvents = [
            { name: 'April Meeting', date: '04/12' }
        ];
        
    }]);