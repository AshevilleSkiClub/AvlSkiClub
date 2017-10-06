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
        date: 'Tuesday, October 10',
        time: '6:30 pm social, 7:00 pm meeting/announcements',
        notes: 'Bring a dish to share.  BYOB - wine and beer only. Liquor is not allowed.'
	};
    
    $scope.otherAnnouncements = [{ 
        name: 'Wicked Weed Social', 
        location: 'Wicked Weed', 
        address: '91 Biltmore Ave, Asheville, NC 28801', 
        mapUrl: 'https://goo.gl/maps/E1pEnEaxUyL2',
        date: 'September 26',
        time: '5:00 - 6:15 pm',
        notes: ''
    },
    { 
        name: 'Warren Miller\'s "Line of Descent"', 
        location: 'Fine Arts Theater', 
        address: '36 Biltmore Ave, Asheville, NC 28801', 
        mapUrl: 'https://goo.gl/maps/pCZbL8FCDQB2',
        date: 'October 26',
        time: '7:00',
        notes: 'Tickets on sale at Fine Arts Theater or online at '
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