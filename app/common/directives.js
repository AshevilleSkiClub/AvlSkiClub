'use strict';

angular.module('asc.directives', [])

.directive('templateArticle', ['$compile', '$http', '$templateCache',
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

// TODO move this later
.controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.selectedPage = $location.path(); //default when navigating to the page
}])

;