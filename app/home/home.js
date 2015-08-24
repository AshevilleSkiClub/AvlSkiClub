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
        topic: 'Fun and Games', 
        location: 'Carrier Park', 
        address: 'Asheville, NC 28806', 
        mapUrl: 'https://www.google.com/maps/place/Carrier+Park/@35.5659219,-82.5791016,15z/data=!4m2!3m1!1s0x0:0xac8a261a869741bf?sa=X&ved=0CJEBEPwSMA1qFQoTCIHa9oiouccCFUV4Pgod-JkJGg',
        date: 'Thursday, September 10',
        time: '4:30 pm',
        notes: ''
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Asheville Tourists Game',
            location: 'McCormick Field',
            address: '30 Buchanan Pl, Asheville, NC 28801',
            mapUrl: 'https://www.google.com/maps/place/mccormick+field+asheville/data=!4m2!3m1!1s0x0:0xe0bc1e7b925e4bf7?sa=X&ved=0CCgQrwswAGoVChMIir_369bAxwIVw3g-Ch3m8g6B',
            date: 'Friday, August 28'
        },
        {
            name: 'CSC Fall Conference',
            location: 'Glenstone Lodge',
            address: '504 Historic Nature Trail, Gatlinburg, TN',
            mapUrl: 'https://www.google.com/maps/place/Glenstone+Lodge/@35.7048819,-83.5176635,17z/data=!3m1!4b1!4m2!3m1!1s0x885955ce286680e3:0x8225a7395e231487',
            date: 'October 23-25'
        }
    ];
    
    $scope.slideInterval = 5000;
	$scope.welcomeSlides = [ 
        { src:'img/welcomePic.png' },
        { src:'img/welcomePic2.png' },
        { src:'img/welcomePic3.png' },
        { src:'img/welcomePic4.png' },
        { src:'img/welcomePic5.png' },
        { src:'img/welcomePic6.png' }
    ];
    $scope.welcomeImgSrc = 'img/welcomePic.png'
}]);