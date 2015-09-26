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
        { name: 'Whistler-Blackcomb Trip', templatePath: 'news/articles/whistler-trip.html' }
    ];
    
    $scope.ascNewsletters = [
        { name: 'September 2015', src: 'newsletters/2015/ASC_Sep_2015.pdf' },
        { name: 'August 2015', src: 'newsletters/2015/ASC_Aug_2015.pdf' },
        { name: 'July 2015', src: 'newsletters/2015/ASC_July_2015.pdf' },
        { name: 'June 2015', src: 'newsletters/2015/ASC_June_2015.pdf' },
        { name: 'May 2015', src: 'newsletters/2015/ASC_May_2015.pdf' }
    ];
    
    $scope.cscNewsletters = [
        { name: 'September 2015', src: 'newsletters/2015/CSC_September_2015_President_Update.pdf' },
        { name: 'August 2015', src: 'newsletters/2015/CSC_August_2015_President.pdf' },
        { name: 'June 2015', src: 'newsletters/2015/Crescent_June_President_Update.pdf' }
    ];
    
    $scope.nscNewsletters = [
        { name: 'September 2015 Newsbeat', src: 'newsletters/2015/NSC_Newsbeat_September2015.pdf' }
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