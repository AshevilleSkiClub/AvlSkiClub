'use strict';

angular.module('asc.resorts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resorts', {
    templateUrl: 'resorts/resorts.html',
    controller: 'ResortsCtrl'
  });
}])

.controller('ResortsCtrl', ['$scope', function($scope) {
    $scope.resorts = [{ name: 'Cataloochee', href: 'http://cataloochee.com/index-home.php' }, 
                      { name: 'Wolf Ridge', href: 'http://www.skiwolfridgenc.com/' },
                      { name: 'Appalachian Mountain', href: 'http://www.appskimtn.com/' },
                      { name: 'Sugar Mountain', href: 'http://www.skisugar.com/' },
                      { name: 'Beech Mountain', href: 'http://www.beechmountainresort.com/' },
                      { name: 'Wintergreen', href: 'http://www.wintergreenresort.com/' },
                      { name: 'Snowshoe', href: 'http://www.snowshoemtn.com/' }];
}]);