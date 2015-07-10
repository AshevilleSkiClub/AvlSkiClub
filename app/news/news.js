'use strict';

angular.module('myApp.news', ['ngRoute'])

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
}])

.directive('newsArticle', ['$compile', '$http', '$templateCache',
    function($compile, $http, $templateCache) {
        return {
            restrict: 'E',
            scope: {
                templatePath: '='
            },
            link: function (scope, element, attrs) {
                scope.$watch('templatePath', function (nv) {
                    if (nv) {
                        var loader = $http.get(nv, {cache: $templateCache});
                        var promise = loader.success(function(html) {
                            element.html(html);
                        }).then(function (response) {
                            var compiled = $compile(element.html())(scope)
                            element.replaceWith(compiled);
                            element = compiled;
                        })
                    }
                }); 
            }
        };
    }
])
;