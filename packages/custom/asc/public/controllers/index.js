'use strict';

angular.module('mean.asc').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.bannerInterval = 5000;
    $scope.bannerImgs = [ 
			{ img: '/asc/assets/img/bannerImg0.jpg' },
			{ img: '/asc/assets/img/bannerImg1.jpg' },
			{ img: '/asc/assets/img/bannerImg2.jpg' }
		];
	}
]);
