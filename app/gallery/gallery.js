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
		'content/img/gallery/DSC00631.JPG',
		'content/img/gallery/DSC_0537.JPG',
		'content/img/gallery/DSC_0688.JPG',
		'content/img/gallery/DSC00611.JPG',
		'content/img/gallery/DSC00612.JPG',
		'content/img/gallery/DSC00613.JPG',
		'content/img/gallery/DSC00617.JPG',
		'content/img/gallery/DSC00628.JPG',
		'content/img/gallery/DSC00631.JPG',
		'content/img/gallery/DSC00632.JPG',
		'content/img/gallery/10974438_10152646408581720_3794683916113132819_o.jpg',
		'content/img/gallery/10974253_10152646412596720_4688264514071234104_o.jpg',
		'content/img/gallery/10960401_10152646425236720_4226482784968206671_o.jpg',
		'content/img/gallery/10974403_10152646413021720_2199962224408010650_o.jpg'
	];
	
	$scope.openImage = function (imageSrc) {
		var modalInstance = $modal.open({
			templateUrl: 'gallery/image.html',
			controller: 'ImageCtrl',
			size: 'lg',
			resolve: {
				imageSrc: function () {
					return imageSrc;
				}
			}
		});
		modalInstance.result.then(function () {
			
		}, function () {
			
		});
	};
}]);