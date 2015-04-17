/**
 * Created by pmfarnsw on 4/14/15.
 */

angular.module('myApp.calendar', ['ngRoute'])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/calendar', {
            templateUrl: 'calendar/calendar.html',
            controller: 'CalendarCtrl'
        });
    }])

    .controller('CalendarCtrl', [function() {

    }]);