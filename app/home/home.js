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
        topic: 'Auction Night', 
        location: 'Southern Kitchen and Bar', 
        address: '41 N Lexington Ave, Asheville, NC 28801', 
        mapUrl: 'https://www.google.com/maps/place/The+Southern+Kitchen+And+Bar/@35.5962911,-82.555519,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f357b3fdd449:0xd0de41a5c65a6e86!8m2!3d35.5962911!4d-82.5533303',
        date: 'Tuesday, December 13',
        time: '6:30 pm networking and shopping, 7:00 pm meeting',
        notes: 'Bring an item from your business or personal trunk to auction. Ask your favorite restaurant or retail/establishment for an item or gift certificate to auction'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'First race',
            location: 'Appalachian Mountain',
            address: '940 Ski Mountain Rd, Blowing Rock, NC 28605',
            mapUrl: 'https://www.google.com/maps/place/Alpine+Ski+Shop+Appalachian+Ski+MTN./@36.1744099,-81.664746,17z/data=!3m1!4b1!4m5!3m4!1s0x8850faef1c46ed2b:0x8433bb841353dd0d!8m2!3d36.1744099!4d-81.6625573',
            date: 'December 17-18',
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