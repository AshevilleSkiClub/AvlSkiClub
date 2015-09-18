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
        topic: 'Bye-bye Thursday Meetings & By-law Changes', 
        location: 'Avenue M', 
        address: '791 Merrimon Ave Asheville, NC 28804', 
        mapUrl: 'https://www.google.com/maps/place/Avenue+M/@35.625743,-82.553496,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x6c37d17d9cf1317d',
        date: 'Thursday, October 8',
        time: '6:30 pm',
        notes: 'Appetizers will be served'
	};
    
    $scope.otherAnnouncements = [
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