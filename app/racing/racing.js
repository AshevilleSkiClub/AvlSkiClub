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
        { date: 'December 16 - 17', place: 'Appalachian Mt, NC', time: '9:30' },
        { date: 'January 06 - 07', place: 'Sugar Mt, NC', time: '9:00' },
        { date: 'January 07 - 14', place: 'Crescent Ski Council Ski Week', time: '' },
        { date: 'January 27 - 28', place: 'Canaan Valley, WV', time: 'TBD' },
        { date: 'February 05', place: 'Cupp Run Challenge at Snowshoe, WV', time: '' },
        { date: 'February 10 - 11', place: 'Beech Mt, NC', time: '10:00' },
        { date: 'February 24 - 25', place: 'Appalachian Mt, NC', time: '9:30' },
        { date: 'March TBA', place: 'Governer\'s Cup Race at Timberline, WV', time: '' },
        { date: 'March 4', place: 'Dick Trundy/Sugar Cup GC at Sugar Mt, NC', time: '9:00' },
        { date: 'March 09 - 11', place: 'Crescent Cup, SilverCreek, WV', time: '8:45' },
        { date: 'March 21 - 25', place: 'NASTAR Nationals at Squaw Valley, CA', time: '' }
    ];
}])

.controller('RacingCampsCtrl', ['$scope', function($scope) {
    $scope.camps = [
        { date: 'December 02 - 09', place: 'Steamboat Race Camp', info: 'Sports Am.Tours: 800-876-8551'},
        { date: 'December', place: 'Killington Race Camp', info: '800-752-2005'},
        { date: 'December 03', place: 'CSC Development Training at Appalachian', info: '9:45 - 3:00'},
        { date: 'December 08 - 10', place: 'Sugar Mt. Race Camp', info: 'Kim Jöchl: 828-898-4521 x224'},
        { date: 'December', place: 'Timberline, WV  Ski School', info: '304-866-4801, Tim Worden is RD'}
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
        { img: 'img/sponsors/fuxi-logo.png', link: 'http://www.fuxiracingusa.com/' },
        { img: 'img/sponsors/putnam-logo.jpg', link: 'https://www.putnam.com/' },
        { img: 'img/sponsors/steamboat-logo.jpg', link: 'http://www.steamboat.com/' },
        { img: 'img/sponsors/wolfridge-resort-logo.png', link: 'http://www.skiwolfridgenc.com/' },
        { img: 'img/sponsors/highcountrytaproom-logo.png', link: 'http://highcountrytaproom.weebly.com/' },
        { img: 'img/sponsors/whitefish-logo.gif', link: 'http://skiwhitefish.com/' },
        { img: 'img/sponsors/banana-boat-logo.png', link: 'http://www.bananaboat.com/' },
        { img: 'img/sponsors/sports-america-logo.png', link: 'https://www.sportsamerica.com/' },
        { img: 'img/sponsors/steamboat-resorts-logo.png', link: 'http://www.steamboat.com/plan-your-trip/lodging/s/steamboat-resorts.aspx' },
        { img: 'img/sponsors/podium-wax-logo.gif', link: 'https://www.podiumwax.com/' },
        { img: 'img/sponsors/leki-logo.png', link: 'http://usa.leki.com/' },
        { img: 'img/sponsors/polarmax-logo.png', link: 'http://www.polarmax.com/' },
        { img: 'img/sponsors/addisonfarmsvineyard-logo.png', link: 'http://www.addisonfarms.net/' },
        { img: 'img/sponsors/point6-logo.jpg', link: 'http://point6.com/' },
        { img: 'img/sponsors/descente-logo.png', link: 'http://www.descente.com/' },
        { img: 'img/sponsors/sportube-logo.jpg', link: 'https://www.sportube.com/' },
        { img: 'img/sponsors/swany-logo.jpg', link: 'http://www.swanyamerica.com/' },
        { img: 'img/sponsors/ski-country-sports-logo.jpg', link: 'https://www.skicountrysports.com/' },
        { img: 'img/sponsors/snowshoe-logo.png', link: 'http://www.snowshoemtn.com/' },
        { img: 'img/sponsors/debooter-logo.png', link: 'https://www.outdoorlogicsolutions.com/' },
        { img: 'img/sponsors/head-logo.png', link: 'http://www.head.com/us/home/' },
        { img: 'img/sponsors/mammothlakes-logo.png', link: 'http://www.ci.mammoth-lakes.ca.us/' },
        { img: 'img/sponsors/cataloochee-logo.jpg', link: 'http://cataloochee.com/' },
        { img: 'img/sponsors/mammoth-logo.png', link: 'http://www.mammothmountain.com/' },
        { img: 'img/sponsors/winter-park-logo.jpg', link: 'http://www.winterparkresort.com/' },
        { img: 'img/sponsors/wintergreen-logo.png', link: 'http://www.wintergreenresort.com/' },
        { img: 'img/sponsors/atomic-logo.png', link: 'https://www.atomic.com/en-us' },
        { img: 'img/sponsors/clif-bar-logo.png', link: 'http://www.clifbar.com/' },
        { img: 'img/sponsors/zardoz-logo.png', link: 'http://www.zardoznotwax.com/' },
        { img: 'img/sponsors/spyder-logo.png', link: 'http://www.spyder.com/' }
    ];
}])
;