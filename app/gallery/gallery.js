'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$scope', '$modal', function($scope, $modal) {
	$scope.images = [ 
		'img/gallery/DSC00631.JPG',
		'img/gallery/DSC_0537.JPG',
		'img/gallery/DSC_0688.JPG',
		'img/gallery/DSC00611.JPG',
		'img/gallery/DSC00612.JPG',
		'img/gallery/DSC00613.JPG',
		'img/gallery/DSC00617.JPG',
		'img/gallery/DSC00628.JPG',
		'img/gallery/DSC00631.JPG',
		'img/gallery/DSC00632.JPG',
		'img/gallery/10974438_10152646408581720_3794683916113132819_o.jpg',
		'img/gallery/10974253_10152646412596720_4688264514071234104_o.jpg',
		'img/gallery/10960401_10152646425236720_4226482784968206671_o.jpg',
		'img/gallery/10974403_10152646413021720_2199962224408010650_o.jpg'
	];
}]);