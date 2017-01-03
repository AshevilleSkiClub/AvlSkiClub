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
        topic: 'Fitness for Skiing by Susan Robinson', 
        location: 'Twisted Laurel', 
        address: '130 College St, Asheville, NC 28801', 
        mapUrl: 'https://goo.gl/maps/Cj5obZ5swpp',
        date: 'Tuesday, January 10',
        time: '6:30 pm social, 7:00 pm meeting/program',
        notes: ''
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Race',
            location: 'Sugar Mountain',
            address: '1009 Sugar Mountain Dr, Sugar Mountain, NC 28604',
            mapUrl: 'https://goo.gl/maps/ohzhjFX14Zo',
            date: 'January 07-08',
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