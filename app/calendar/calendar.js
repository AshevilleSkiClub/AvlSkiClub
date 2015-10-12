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
            { name: 'November Meeting', date: '11/10' },
            { name: 'December Meeting', date: '12/01' },
            { name: 'CSC/Steamboat ski/race week', date: '12/5-12/13' },
            { name: 'Appalachian Mtn CSC race development training', date: '12/06' },
            { name: 'December Meeting', date: '12/08' },
            { name: 'Sugar Mt Race Camp', date: '12/11-12/13' },
            { name: 'CSC Race @ Appalachian Mtn', date: '12/19-12/20' }
        ];
        
    }]);