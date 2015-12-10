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
        topic: 'TBA', 
        location: 'Twisted Laurel', 
        address: '130 College St Asheville, NC 28801', 
        mapUrl: 'https://www.google.com/maps/place/Twisted+Laurel/@35.5961017,-82.5523825,17z/data=!3m1!4b1!4m2!3m1!1s0x8859f3583c9e03d5:0x2f6c367903d5d1f6',
        date: 'Tuesday, January 12',
        time: '6:30 pm Social, 7:00 pm Meeting'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Steamboat Trip',
            //location: 'New Mountain Asheville',
            //address: '38 N French Broad Ave Asheville, NC 28801',
            //mapUrl: 'https://www.google.com/maps/place/New+Mountain+Asheville/@35.5945235,-82.5613704,17z/data=!3m1!4b1!4m2!3m1!1s0x8859f354f5898bcb:0xa0c6cc1c341081f3',
            date: 'December 5th - 23rd'
            //time: 'Doors: 5:00 pm / Part one: 7:15-8:00 pm / Part two: 8:15-9:00 pm',
            //notes: 'Tickets: Sold out!'
        },
        {
            name: 'Mt Bachelor',
//            location: 'Ashley Woods Park/Pavilion',
//            address: 'Ashley Woods Dr Arden, NC 28704',
//            mapUrl: 'https://www.google.com/maps/place/Ashley+Woods+Dr,+Arden,+NC+28704/@35.4841305,-82.5870739,17z/data=!3m1!4b1!4m2!3m1!1s0x885992e9c6b7965f:0xd968443366d43ac2',
            date: 'January 16th - 23rd'
//            time: '5:00-9:00 pm',
//            notes: 'See newsletter for more details'
        },
        {
            name: 'Courmayeur',
//            location: 'Ashley Woods Park/Pavilion',
//            address: 'Ashley Woods Dr Arden, NC 28704',
//            mapUrl: 'https://www.google.com/maps/place/Ashley+Woods+Dr,+Arden,+NC+28704/@35.4841305,-82.5870739,17z/data=!3m1!4b1!4m2!3m1!1s0x885992e9c6b7965f:0xd968443366d43ac2',
            date: 'January 23rd - 31st'
//            time: '5:00-9:00 pm',
//            notes: 'See newsletter for more details'
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
        { src:'img/welcomePic6.png' },
        { src:'img/welcomePic7.png' }
    ];
    $scope.welcomeImgSrc = 'img/welcomePic.png'
}]);