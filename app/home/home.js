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
        location: 'Ski Country Sports', 
        address: '1000 Merrimon Ave, Asheville, NC 28804', 
        mapUrl: 'https://www.google.com/maps/place/Ski+Country+Sports/@35.63155,-82.5567417,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f4d1c8b9f0d5:0x992ff8177143b2a2!8m2!3d35.63155!4d-82.554553',
        date: 'Tuesday, November 8',
        time: '6:30 pm networking and shopping, 7:00 pm meeting',
        notes: 'Special sale with food and beverage'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Warren Miller\'s Here, There & Everywhere',
            location: 'Fine Arts Theatre',
            address: '36 Biltmore Ave, Asheville, NC 28801',
            mapUrl: 'https://www.google.com/maps/place/Fine+Arts+Theatre/@35.593571,-82.5533137,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f359e223c221:0x70a200d72c8d1b05!8m2!3d35.593571!4d-82.551125',
            date: 'November 10',
            time: '',
            notes: 'Ticket sales are picking up so do not wait to purchase.  A free lift ticket from Cataloochee will be offered to all in attendance.'
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