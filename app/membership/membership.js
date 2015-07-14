'use strict';

angular.module('myApp.membership', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/membership', {
    templateUrl: 'membership/membership.html',
    controller: 'MembershipCtrl'
  });
}])

.controller('MembershipCtrl', ['$scope', function($scope) {
	
}]);