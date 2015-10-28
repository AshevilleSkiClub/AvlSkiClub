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
        topic: 'Discount shopping night and mini fashion show!', 
        location: 'Ski Country Sports', 
        address: '1000 Merrimon Ave Asheville, NC 28804', 
        mapUrl: 'https://www.google.com/maps?q=ski+country+sports+asheville&rlz=1C1ADCB_enUS568US568&ion=1&espv=2&es_th=1&bav=on.2,or.r_cp.&bvm=bv.105454873,d.dmo&biw=1920&bih=980&dpr=1&um=1&ie=UTF-8&sa=X&ved=0CAcQ_AUoAmoVChMIosjFk4HIyAIVyzweCh3wyQ2U',
        date: 'Tuesday, November 10',
        time: '6:30 pm'
	};
    
    $scope.otherAnnouncements = [
        {
            name: 'Warren Miller\'s Chasing Shadows',
            location: 'New Mountain Asheville',
            address: '38 N French Broad Ave Asheville, NC 28801',
            mapUrl: 'https://www.google.com/maps/place/New+Mountain+Asheville/@35.5945235,-82.5613704,17z/data=!3m1!4b1!4m2!3m1!1s0x8859f354f5898bcb:0xa0c6cc1c341081f3',
            date: 'November 13',
            time: 'Doors: 5:00 pm / Part one: 7:15-8:00 pm / Part two: 8:15-9:00 pm',
            notes: 'Tickets: $10'
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
        { src:'img/welcomePic6.png' }
    ];
    $scope.welcomeImgSrc = 'img/welcomePic.png'
}]);