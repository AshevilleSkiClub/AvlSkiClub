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
        topic: 'Holiday party with silent auction', 
        location: 'Southern Kitchen & Bar', 
        address: '41 N Lexington Ave Asheville, NC 28801', 
        mapUrl: 'https://www.google.com/maps/place/The+Southern+Kitchen+And+Bar/@35.5962333,-82.5556647,17z/data=!3m1!4b1!4m2!3m1!1s0x8859f357b3fdd449:0xd0de41a5c65a6e86',
        date: 'Tuesday, December 1',
        time: '6:30 pm'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Warren Miller\'s Chasing Shadows',
            location: 'New Mountain Asheville',
            address: '38 N French Broad Ave Asheville, NC 28801',
            mapUrl: 'https://www.google.com/maps/place/New+Mountain+Asheville/@35.5945235,-82.5613704,17z/data=!3m1!4b1!4m2!3m1!1s0x8859f354f5898bcb:0xa0c6cc1c341081f3',
            date: 'November 13',
            time: 'Doors: 5:00 pm / Part one: 7:15-8:00 pm / Part two: 8:15-9:00 pm',
            notes: 'Tickets: Sold out!'
        },
        {
            name: 'Ullr Fest',
            location: 'Ashley Woods Park/Pavilion',
            address: 'Ashley Woods Dr Arden, NC 28704',
            mapUrl: 'https://www.google.com/maps/place/Ashley+Woods+Dr,+Arden,+NC+28704/@35.4841305,-82.5870739,17z/data=!3m1!4b1!4m2!3m1!1s0x885992e9c6b7965f:0xd968443366d43ac2',
            date: 'November 14',
            time: '5:00-9:00 pm',
            notes: 'See newsletter for more details'
        }
    ];
    
    $scope.slideInterval = 5000;
	$scope.welcomeSlides = [ 
        { src:'img/WarrenMiller.png' },
        { src:'img/welcomePic.png' },
        { src:'img/welcomePic2.png' },
        { src:'img/welcomePic3.png' },
        { src:'img/welcomePic4.png' },
        { src:'img/welcomePic5.png' },
        { src:'img/welcomePic6.png' }
    ];
    $scope.welcomeImgSrc = 'img/welcomePic.png'
}]);