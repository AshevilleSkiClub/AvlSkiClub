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
        location: 'Pack\'s Tavern', 
        address: '20 S Spruce St Asheville, NC 28801', 
        mapUrl: 'https://www.google.com/maps/place/Pack\'s+Tavern/@35.595082,-82.5517567,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f3584a97e195:0x5b32226bf259602d!8m2!3d35.595082!4d-82.549568',
        date: 'Tuesday, July 12',
        time: '6:30 pm social, 7:00 pm meeting'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Asheville Pub Crawl',
            location: 'Downtown Asheville',
            address: 'Starts at Green Man Brewery Tasting Room',
            mapUrl: 'https://www.google.com/maps?rlz=1C1ADCB_enUS568US568&biw=1920&bih=975&q=green+man+brewery&bav=on.2,or.r_cp.&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiRouq8yurNAhWBQSYKHazdCC0Q_AUIBigB',
            date: 'Friday, July 29',
            time: 'Starts at 4',
            notes: ''
        },
        {
            name: 'Camping with ETMM',
            location: 'Little Oak on South Holston Lake',
            address: '1051 Little Oak Rd Bristol, TN 37620',
            mapUrl: 'https://www.google.com/maps/place/Little+Oak+Campground+Host/@36.515222,-82.0508057,17z/data=!3m1!4b1!4m5!3m4!1s0x88507aa849d39ab1:0xd9c4e3002259ddf7!8m2!3d36.515222!4d-82.048617',
            date: 'August 19-21',
            time: '',
            notes: '4 spots available. Contact Jeff Kenrick'
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