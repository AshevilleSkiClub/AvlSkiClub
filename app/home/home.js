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
        mapUrl: 'https://goo.gl/maps/NkdbwjTorG32',
        date: 'Tuesday, November 14',
        time: '6:30 pm - 8:00 pm',
        notes: ''
	};
    
    $scope.otherAnnouncements = [
    { 
        name: 'Warren Miller\'s "Line of Descent"', 
        location: 'Fine Arts Theater', 
        address: '36 Biltmore Ave, Asheville, NC 28801', 
        mapUrl: 'https://goo.gl/maps/pCZbL8FCDQB2',
        date: 'October 26',
        time: '7:00',
        notes: 'Tickets on sale at Fine Arts Theater or online at '
    },
    { 
        name: 'Picnic at Wolf Laurel Ski Resort', 
        location: 'Wolf Laurel Ski Resort', 
        address: '578 Valley View Cir, Mars Hill, NC 28754', 
        mapUrl: 'https://goo.gl/maps/nhXbJJagL4G2',
        date: 'October 28',
        time: '11:30 - 2:00',
        notes: 'Bring a dish to share and purchase season passes'
    },
    { 
        name: 'Ullr Fest', 
        location: 'Ashley Woods', 
        address: 'Ashley Woods Dr, Arden, NC 28704', 
        mapUrl: 'https://goo.gl/maps/pk93DTMmvLM2',
        date: 'October 28',
        time: '6:00 - 9:00',
        notes: 'Bring a dish to share and BYOB'
    },
    { 
        name: 'Caving with Ellen Hofler', 
        location: 'Meet in Weaverville, carpooling to cave in Tennessee', 
        address: '', 
        mapUrl: '',
        date: 'October 29',
        time: '',
        notes: ' to rsvp'
    }];
    
    $scope.slideInterval = 5000;
	$scope.welcomeSlides = [ 
        { src:'img/warrenMillerPromo.png' },
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