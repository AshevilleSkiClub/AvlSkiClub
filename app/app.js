'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.gallery',
  'myApp.services',
  'myApp.calendar',
  'myApp.version', 
  'myApp.news',
  'myApp.racing',
  'myApp.trips', 
  'myApp.membership',
  'myApp.resorts',
  'myApp.directives',
  'ui.bootstrap',
  'akoenig.deckgrid'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});

}]);


