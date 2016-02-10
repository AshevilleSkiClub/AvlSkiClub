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
            { name: 'Whistler/Blackcomb Trip', date: '02/20-02/27' },
            { name: 'Sugar Mtn Race', date: '02/20-02/21' },
            { name: 'Crescent Cup', date: '03/04-03/06' },
            { name: 'March Meeting', date: '03/08' },
            { name: 'Crescent Big Sky Trip', date: '03/12-03/19' }
        ];
        
    }]);