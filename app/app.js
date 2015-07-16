'use strict';

// Declare app level module which depends on views, and components
angular.module('asc', [
  'ngRoute',
  'asc.home',
  'asc.gallery',
  'asc.services',
  'asc.calendar',
  'asc.version', 
  'asc.news',
  'asc.racing',
  'asc.trips', 
  'asc.membership',
  'asc.resorts',
  'asc.contact',
  'asc.directives',
  'ui.bootstrap',
  'akoenig.deckgrid'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});

}]);


