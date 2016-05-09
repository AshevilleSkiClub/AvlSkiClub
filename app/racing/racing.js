'use strict';

angular.module('asc.racing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/racing', {
    templateUrl: 'racing/racing.html',
    conroller: 'RacingCtrl'
  });
}])

.controller('RacingCtrl', ['$scope', function($scope) {
    $scope.links = [
        { name: 'Schedule', templatePath: 'racing/articles/race-schedule.html' },
        { name: 'Results', templatePath: 'racing/articles/race-results.html' },
        { name: 'Camps', templatePath: 'racing/articles/race-camps.html' },
        { name: 'Sponsors', templatePath: 'racing/articles/race-sponsors.html' },
        { name: 'Gatekeeper Training', templatePath: 'racing/articles/race-gatekeeping.html' },
        { name: 'Waiver', templatePath: 'forms/Crescent_Racing_Liability_Waiver.pdf' }
    ];
    
    $scope.changeSelected = function (link) {
        $scope.selectedPath = link.templatePath;
        for (var i = 0; i < $scope.links.length; i++) {
            $scope.links[i].selected = false;
        }
        link.selected = true;
    };
    
    function onLoad() {
        $scope.changeSelected($scope.links[0]);
    }
    
    onLoad();
}])

.controller('RacingScheduleCtrl', ['$scope', function($scope) {
    $scope.schedule = [
        { date: 'December 4', place: 'Appalachian Mt, NC (Race Development)', time: '9:45 - 3:00'},
        { date: 'December 17 - 18', place: 'Appalachian Mt, NC', time: '9:30'},
        { date: 'January 07 - 08', place: 'Sugar Mt, NC', time: '9:00'},
        { date: 'January 28 - 29', place: 'Wintergreen Resort, VA', time: ''},
        { date: 'February 1', place: 'Cupp Run Challenge at Snowshoe, WV', time: ''},
        { date: 'February 11 - 12', place: 'Beech Mt, NC', time: '10:00'},
        { date: 'February 25 - 26', place: 'Sugar Mt, NC', time: '9:00'}
        { date: 'March 10 - 12', place: 'Crescent Cup, SilverCreek, WV', time: '8:45 am'}
    ];
}])

.controller('RacingCampsCtrl', ['$scope', function($scope) {
    $scope.camps = [
        { date: 'December 5 - 12', place: 'Steamboat Race Camp', info: 'Sports Am.Tours: 800-876-8551'},
        { date: 'December', place: 'Killington Race Camp', info: '800-621-6867'},
        { date: 'December 6', place: 'CSC Development Training at Appalachian', info: '9:46 am - 3:00 pm'},
        { date: 'December 11 - 13', place: 'Sugar Mt. Race Camp', info: 'Kim Jöchl: 828-898-4521 x224'},
        { date: 'December', place: 'Timberline, WV  Ski School', info: '304-866-4801, Multiple sessions'}
    ];
}])


.controller('RacingSponsorsCtrl', ['$scope', function($scope) {
    $scope.sponsors = [
        { img: 'img/sponsors/aspen-snowmass-logo.png', link: 'https://www.aspensnowmass.com/' },
        { img: 'img/sponsors/dynastar-logo.png', link: 'http://www.dynastar.com/US/US/' },
        { img: 'img/sponsors/jackson-hole-logo.gif', link: 'http://www.jacksonhole.com/' },
        { img: 'img/sponsors/bayou-logo.png', link: 'http://bayousmokehouse.com/#about-us' },
        { img: 'img/sponsors/copper-logo.png', link: 'http://www.coppercolorado.com/winter/index.html' },
        { img: 'img/sponsors/saucer-wax-logo.png', link: 'https://www.saucerwax.net/' },
        { img: 'img/sponsors/alpine-ski-center-logo.png', link: 'https://www.alpineskicenter.com/' },
        { img: 'img/sponsors/samuel-adams-logo.jpg', link: 'https://www.samueladams.com/' },
        { img: 'img/sponsors/canaan-valley-logo.png', link: 'http://canaanresort.com/winter/' },
        { img: 'img/sponsors/steamboat-logo.jpg', link: 'http://www.steamboat.com/' },
        { img: 'img/sponsors/wolfridge-resort-logo.png', link: 'http://www.skiwolfridgenc.com/' },
        { img: 'img/sponsors/telluride-logo.png', link: 'http://www.tellurideskiresort.com/' },
        { img: 'img/sponsors/whitefish-logo.gif', link: 'http://skiwhitefish.com/' },
        { img: 'img/sponsors/banana-boat-logo.png', link: 'http://www.bananaboat.com/' },
        { img: 'img/sponsors/sports-america-logo.png', link: 'https://www.sportsamerica.com/' },
        { img: 'img/sponsors/steamboat-resorts-logo.png', link: 'http://www.steamboat.com/plan-your-trip/lodging/s/steamboat-resorts.aspx' },
        { img: 'img/sponsors/podium-wax-logo.gif', link: 'https://www.podiumwax.com/' },
        { img: 'img/sponsors/leki-logo.png', link: 'http://usa.leki.com/' },
        { img: 'img/sponsors/polarmax-logo.png', link: 'http://www.polarmax.com/' },
        { img: 'img/sponsors/snowmass-village-logo.jpg', link: 'http://www.tosv.com/' },
        { img: 'img/sponsors/point6-logo.jpg', link: 'http://point6.com/' },
        { img: 'img/sponsors/descente-logo.png', link: 'http://www.descente.com/' },
        { img: 'img/sponsors/sportube-logo.jpg', link: 'https://www.sportube.com/' },
        { img: 'img/sponsors/artech-logo.jpg', link: 'http://www.artechski.com/' },
        { img: 'img/sponsors/ski-country-sports-logo.jpg', link: 'https://www.skicountrysports.com/' },
        { img: 'img/sponsors/snowshoe-logo.png', link: 'http://www.snowshoemtn.com/' },
        { img: 'img/sponsors/peet-dryer-logo.png', link: 'http://www.peetdryer.com/' },
        { img: 'img/sponsors/head-logo.png', link: 'http://www.head.com/us/home/' },
        { img: 'img/sponsors/red-bull-logo.png', link: 'http://www.redbull.com/us/en' },
        { img: 'img/sponsors/cataloochee-logo.jpg', link: 'http://cataloochee.com/' },
        { img: 'img/sponsors/skigroup-logo.png', link: 'http://www.skigroup.net/' },
        { img: 'img/sponsors/winter-park-logo.jpg', link: 'http://www.winterparkresort.com/' },
        { img: 'img/sponsors/taos-logo.png', link: 'http://www.skitaos.org/' },
        { img: 'img/sponsors/atomic-logo.png', link: 'https://www.atomic.com/en-us' },
        { img: 'img/sponsors/clif-bar-logo.png', link: 'http://www.clifbar.com/' },
        { img: 'img/sponsors/zardoz-logo.png', link: 'http://www.zardoznotwax.com/' },
        { img: 'img/sponsors/ski-banff-logo.jpg', link: 'http://www.skibanff.com/' },
        { img: 'img/sponsors/spyder-logo.jpg', link: 'http://www.spyder.com/' },
        { img: 'img/sponsors/holidaze-logo.jpg', link: 'http://holidaze.com/' }
    ];
}])
;