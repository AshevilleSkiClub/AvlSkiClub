'use strict';

angular.module('mean.asc').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    $scope.bannerIdx = 0;
    var bannerImgs = [ 
			{ img: '/asc/assets/img/1553474_10152659059026720_8478869418720111552_o.jpg' },
			{ img: '/asc/assets/img/10960113_10152659057806720_7158304801537669256_o.jpg' },
			{ img: '/asc/assets/img/10557085_10152659058786720_2725854966728482093_o.jpg' }
		];
    
    $scope.moveBanner = function(increment) {
      if (increment) {
        if (($scope.bannerIdx + 1) === bannerImgs.length) {
          $scope.bannerIdx = 0;
        } else {
          $scope.bannerIdx += 1;
        }
      } else {
        if (($scope.bannerIdx - 1) < 0) {
          $scope.bannerIdx = bannerImgs.length - 1;
        } else {
          $scope.bannerIdx -= 1;
        }
      }
    };
    
    $scope.displayBannerImg = function (index) {
      if (index < 0) {
        index = bannerImgs.length - 1;
      } else if (index >= bannerImgs.length) {
        index = 0;
      }
      
      return bannerImgs[index].img;
    };
	}
]);
