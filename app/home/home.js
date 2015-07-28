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
        topic: 'What is new in Biking', 
        location: 'Ski Country Sports', 
        address: '1000 Merrimon Ave', 
        mapUrl: 'https://www.google.com/maps/place/Ski+Country+Sports/@35.6315982,-82.5545991,15z/data=!4m2!3m1!1s0x0:0x992ff8177143b2a2',
        date: 'Thursday, August 13',
        time: '6:30 pm',
        notes: ''
	};
    
    $scope.slideInterval = 5000;
	$scope.welcomeSlides = [ 
        { src:'img/welcomePic.png' },
        { src:'img/welcomePic2.png' }
    ];
    $scope.welcomeImgSrc = 'img/welcomePic.png'
}]);