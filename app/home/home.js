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
        location: 'Governor\'s Western Residence', 
        address: '45 Patton Mountain Road, Asheville, NC 28804', 
        mapUrl: 'https://goo.gl/maps/iykSV3wEhu22',
        date: 'Tuesday, September 12',
        time: '6:30 pm social, 7:00 pm meeting/announcements',
        notes: 'Bring a dish to share.  BYOB - wine and beer only. Liquor is not allowed.'
	};
    
    $scope.otherAnnouncements = [{ 
        name: 'Hike at Graveyard Fields', 
        location: 'Graveyard Fields', 
        address: 'Graveyard Fields, Canton, NC 28716', 
        mapUrl: 'https://goo.gl/maps/uMc5Y5WaMa52',
        date: 'September 16',
        time: 'Meet at 9:00',
        notes: 'Meet at the Ingles on Brevard Road across from Asheville Outlets. RSVP to Jeff Kenrick'
    },
    { 
        name: 'Wicked Weed Social', 
        location: 'Wicked Weed', 
        address: '91 Biltmore Ave, Asheville, NC 28801', 
        mapUrl: 'https://goo.gl/maps/E1pEnEaxUyL2',
        date: 'September 26',
        time: '5:00 - 6:15 pm',
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