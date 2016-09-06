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
        location: 'Bier Garden', 
        address: '46 Haywood Street Asheville, NC 28801', 
        mapUrl: 'https://www.google.com/maps/place/46+Haywood+St,+Asheville,+NC+28801/@35.5959721,-82.5575381,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f356673cb529:0x535885cf1ede2f68!8m2!3d35.5959721!4d-82.5553494',
        date: 'Tuesday, September 6',
        time: '6:30 pm networking, 7:00 pm meeting',
        notes: 'Appetizers provided. Drinks and meal on your own'
	};
    
    $scope.otherAnnouncements = [
        {
            name: ' Annual Ullr Fest/Costume Party',
            location: 'Little Oak on South Holston Lake',
            address: 'Greg Caspsers\' and Susan Slettdal\'s',
            mapUrl: 'https://www.google.com/maps/place/Asheville,+NC/@35.538851,-82.7054901,11z/data=!3m1!4b1!4m5!3m4!1s0x88598ca93c0f6f09:0x94ef31c106343a5d!8m2!3d35.5950581!4d-82.5514869',
            date: 'October 29',
            time: '',
            notes: ''
        }
    ];
    
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