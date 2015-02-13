'use strict';

angular.module('mean.asc').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.bannerInterval = 5000;
    $scope.bannerImgs = [ 
			{ img: '/asc/assets/img/1553474_10152659059026720_8478869418720111552_o.jpg' },
			{ img: '/asc/assets/img/10960113_10152659057806720_7158304801537669256_o.jpg' },
			{ img: '/asc/assets/img/10557085_10152659058786720_2725854966728482093_o.jpg' }
		];
	}
]);
