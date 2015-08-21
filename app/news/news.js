'use strict';

angular.module('asc.news', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: 'news/news.html',
    conroller: 'NewsCtrl'
  });
}])

.controller('NewsCtrl', ['$scope', function($scope) {
	$scope.articles = [
        { name: 'Whistler-Blackcomb Trip', templatePath: 'news/articles/whistler-trip.html' },
        { name: 'Camping, Rafting, & Mountain Biking Trip', templatePath: 'news/articles/camp-raft-bike-trip.html' }
    ];
    
    $scope.ascNewsletters = [
        { name: 'August 2015', src: 'newsletters/2015/ASC_Aug_2015.pdf' },
        { name: 'July 2015', src: 'newsletters/2015/ASC_July_2015.pdf' },
        { name: 'June 2015', src: 'newsletters/2015/ASC_June_2015.pdf' },
        { name: 'May 2015', src: 'newsletters/2015/ASC_May_2015.pdf' }
    ];
    
    $scope.cscNewsletters = [
        { name: 'August 2015', src: 'newsletters/2015/CSC_August_2015_President.pdf' },
        { name: 'June 2015', src: 'newsletters/2015/Crescent_June_President_Update.pdf' }
    ];
    
    $scope.changeSelectedArticle = function (article) {
        $scope.selectedArticlePath = article.templatePath;
        for (var i = 0; i < $scope.articles.length; i++) {
            $scope.articles[i].selected = false;
        }
        article.selected = true;
    };
    
    function onLoad() {
        $scope.changeSelectedArticle($scope.articles[0]);
    }
    
    onLoad();
}]);