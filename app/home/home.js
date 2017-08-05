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
        topic: 'TBD', 
        location: 'Sierra Nevada', 
        address: '100 Sierra Nevada Way, Mills River, NC 28732', 
        mapUrl: 'https://goo.gl/maps/EgmyxeTFTnJ2',
        date: 'Tuesday, August 8',
        time: '6:30 pm meeting social, 5:00 - 6:30 pm private tour',
        notes: 'Contact Wayne Bailey by August 5th to reserve your space for the tour.'
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