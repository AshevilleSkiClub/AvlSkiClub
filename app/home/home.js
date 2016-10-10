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
        mapUrl: 'https://www.google.com/maps/place/Twisted+Laurel/@35.5961034,-82.5524551,17z/data=!3m1!4b1!4m5!3m4!1s0x8859f3583c9e03d5:0x2f6c367903d5d1f6!8m2!3d35.5961034!4d-82.5502664',
        date: 'Tuesday, October 11',
        time: '6:30 pm networking, 7:00 pm meeting',
        notes: 'Appetizers provided. Drinks and meal on your own'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Annual Ullr Fest/Costume Party',
            location: 'Greg Caspsers\' and Susan Slettdal\'s',
            address: '',
            mapUrl: 'https://www.google.com/maps/place/Asheville,+NC/@35.538851,-82.7054901,11z/data=!3m1!4b1!4m5!3m4!1s0x88598ca93c0f6f09:0x94ef31c106343a5d!8m2!3d35.5950581!4d-82.5514869',
            date: 'October 29',
            time: '',
            notes: 'The club will provide chili, brats, hot dogs along with condiments, soft drinks, paper goods and of course firewood. We will serve dinner around 6:30. Please bring a dish to pass, your beverage of choice and a lawn chair. Costumes are encouraged! Make-up artist needed'
        },
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