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
        topic: 'Day and overnight backpack demonstration', 
        location: 'Standard Pizza Co', 
        address: '755 Biltmore Ave Asheville, NC 28803', 
        mapUrl: 'https://www.google.com/maps/place/Standard+Pizza/@35.570631,-82.5473468,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f33eaed33c23:0x31941cada46c13d8!8m2!3d35.570631!4d-82.5451581',
        date: 'Tuesday, June 14',
        time: '6:30 pm social/food/fun'
	};
    
    $scope.otherAnnouncements = [
//        {
//            name: 'Sugar Mtn Race',
//            location: 'Ashley Woods Park/Pavilion',
//            address: 'Ashley Woods Dr Arden, NC 28704',
//            mapUrl: 'https://www.google.com/maps/place/Ashley+Woods+Dr,+Arden,+NC+28704/@35.4841305,-82.5870739,17z/data=!3m1!4b1!4m2!3m1!1s0x885992e9c6b7965f:0xd968443366d43ac2',
//            date: 'Februayr 20th - 21st'
//            time: '5:00-9:00 pm',
//            notes: 'See newsletter for more details'
//        }
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