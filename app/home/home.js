'use strict';

angular.module('asc.home', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.monthlyMeeting = { 
        topic: 'Fun on the river and Carrier Park', 
        location: 'Asheville Outdoor Center', 
        address: '521 Amboy Rd, Asheville, NC 28806', 
        mapUrl: 'https://goo.gl/maps/LhBg2kBTZqL2',
        date: 'Tuesday, July 11',
        time: '6:00 pm networking/volleyball, 7:00 pm meeting',
        notes: 'Bring a dish to share. No BYOB. AOC sells beer and wine.'
	};
    
    $scope.otherAnnouncements = [];
    
    $scope.slideInterval = 5000;
	$scope.welcomeSlides = [ 
        { src:'img/welcomePic.png' },
        { src:'img/welcomePic2.png' },
        { src:'img/welcomePic3.png' },
        { src:'img/welcomePic4.png' },
        { src:'img/welcomePic5.png' },
        { src:'img/welcomePic6.png' },
        { src:'img/welcomePic7.png' }
    ];
    $scope.welcomeImgSrc = 'img/welcomePic.png'
}]);