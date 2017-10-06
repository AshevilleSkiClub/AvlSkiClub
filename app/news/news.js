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
        { name: 'October 2017', src: 'newsletters/2017/ASC_Oct_2017.pdf' },
        { name: 'September 2017', src: 'newsletters/2017/ASC_Sep_2017.pdf' },
        { name: 'August 2017', src: 'newsletters/2017/ASC_Aug_2017.pdf' },
        { name: 'July 2017', src: 'newsletters/2017/ASC_Jul_2017.pdf' },
        { name: 'June 2017', src: 'newsletters/2017/ASC_Jun_2017.pdf' },
        { name: 'May 2017', src: 'newsletters/2017/ASC_May_2017.pdf' },
        { name: 'April 2017', src: 'newsletters/2017/ASC_Apr_2017.pdf' },
        { name: 'March 2017', src: 'newsletters/2017/ASC_Mar_2017.pdf' },
        { name: 'February 2017', src: 'newsletters/2017/ASC_Feb_2017.pdf' },
        { name: 'January 2017', src: 'newsletters/2017/ASC_Jan_2017.pdf' }
    ];
    
    $scope.cscNewsletters = [
        { name: 'August 2017', src: 'newsletters/2017/CSC_Aug_2017_President_Update.pdf' },
        { name: 'CSC 2017 Fall Conference Forms', src: 'newsletters/2017/CSC_2017_Fall_Conference.pdf' }
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