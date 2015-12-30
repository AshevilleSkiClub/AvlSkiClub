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
            { name: 'January Meeting', date: '01/12' },
            { name: 'Sugar Mtn Race', date: '01/09-01/10' },
            { name: 'Mt Bachelor Trip', date: '01/16-01/23' },
            { name: 'Courmayeur Trip', date: '01/23-01/31' },
            { name: 'Appalachian Mtn Race', date: '01/30-01/31' }
        ];
        
    }]);