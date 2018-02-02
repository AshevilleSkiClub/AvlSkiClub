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
        { name: 'Newsletter Editor\'s Note', templatePath: 'news/articles/editors-note.html' }
    ];
    
    $scope.ascNewsletters = [
        { name: 'January 2018', src: 'newsletters/2018/ASC_Jan_2018.pdf' }
    ];
    
    $scope.cscNewsletters = [
        { name: 'January 2018', src: 'newsletters/2018/CSC_Jan_2018_President_Update.pdf' }
    ];
    
    $scope.nscNewsletters = [
        { name: 'November 2015 Newsbeat', src: 'newsletters/2015/NSC_Newsbeat_November2015.pdf' },
        { name: 'October 2015 Newsbeat', src: 'newsletters/2015/NSC_Newsbeat_October2015.pdf' },
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