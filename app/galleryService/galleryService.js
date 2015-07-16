angular.module('asc.services', [])

.factory('galleryService', ['$http', function($http) {
    var ascUrl = 'http://localhost:3000/';
    var gallery = {};
    gallery.getImages = function () {
        return $http.get(ascUrl + 'getImages');
    }
    
    return gallery;
}]);