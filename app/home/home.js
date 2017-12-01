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
        location: 'Twisted Laurel', 
        address: '130 College St, Asheville, NC 28801', 
        mapUrl: 'https://goo.gl/maps/eHkee6w8VbC2',
        date: 'Tuesday, December 12',
        time: '6:30 pm social and auction, 7:00 pm meeting',
        notes: ''
	};
    
    $scope.otherAnnouncements = [
    { 
        name: 'Steamboat Ski Week', 
        location: 'Steamboat', 
        address: '2305 Mt Werner Cir, Steamboat Springs, CO 80487', 
        mapUrl: 'https://goo.gl/maps/nhXbJJagL4G2',
        date: 'December 2 - 9',
        time: '',
        notes: ''
    },
    { 
        name: 'Race at Appalachian Mtn', 
        location: 'Appalachian Ski Mtn', 
        address: '940 Ski Mountain Rd, Blowing Rock, NC 28605', 
        mapUrl: 'https://goo.gl/maps/RCgrKRUZYs12',
        date: 'December 17 - 18',
        time: '',
        notes: ''
    }];
    
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