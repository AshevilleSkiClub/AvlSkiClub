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
        topic: 'Trip Info', 
        location: 'Governer\'s Western Residence', 
        address: '45 Patton Mountain Road, Asheville, NC 28804', 
        mapUrl: 'https://www.google.com/maps/place/45+Patton+Mountain+Rd,+Asheville,+NC+28804/@35.623663,-82.5340096,17z/data=!4m13!1m7!3m6!1s0x8859f4edd43215a3:0x5842359f794166b9!2s45+Patton+Mountain+Rd,+Asheville,+NC+28804!3b1!8m2!3d35.623663!4d-82.5318209!3m4!1s0x8859f4edd43215a3:0x5842359f794166b9!8m2!3d35.623663!4d-82.5318209',
        date: 'Tuesday, June 13',
        time: '6:00 - 7:00 pm social and meal, 7:00 pm meeting',
        notes: ''
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