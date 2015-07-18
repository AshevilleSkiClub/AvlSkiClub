'use strict';

angular.module('asc.gallery', ['ngRoute', 'akoenig.deckgrid'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.albums = [];
	$scope.images = [ 
		'img/gallery/11112905_10152791968156720_4380727032593211959_o.jpg',
		'img/gallery/11004621_10152791967421720_2825279544902022076_o.jpg',
		'img/gallery/10986876_10152722400711720_7474895434765154777_o.jpg',
		'img/gallery/11034349_10152722399876720_8290169641430434626_o.jpg',
		'img/gallery/11069776_10152722398516720_4631862066560087048_o.jpg',
		'img/gallery/10475429_10152722397286720_2080517357449304704_o.jpg',
		'img/gallery/10842199_10152715491451720_5100350590123625911_o.jpg',
		'img/gallery/10987614_10152715421416720_4726384216116413572_o.jpg',
		'img/gallery/11043291_10152715420501720_5650898248247038971_o.jpg',
		'img/gallery/11026176_10152715419806720_649780211676363722_o.jpg',
		'img/gallery/10993138_10152715419666720_8766677126855461145_o.jpg',
		'img/gallery/10849073_10152715419086720_1237353140239566579_o.jpg',
		'img/gallery/11011206_10152715418701720_5591369258480914382_o.jpg',
		'img/gallery/10633260_10152715417621720_2900492823950973905_o.jpg',
		'img/gallery/10991460_10152715416431720_3277740267578601035_o.jpg',
		'img/gallery/10987614_10152715416286720_5988117110473479851_o.jpg',
		'img/gallery/11046801_10152715415796720_3300477720205666854_o.jpg',
		'img/gallery/10959063_10152715414391720_771311014879486828_o.jpg',
		'img/gallery/DSC_0688.jpg'
	];
    $scope.photos = [ 
        { src: 'img/gallery/11112905_10152791968156720_4380727032593211959_o.jpg' },
		{ src: 'img/gallery/11004621_10152791967421720_2825279544902022076_o.jpg' },
		{ src: 'img/gallery/10986876_10152722400711720_7474895434765154777_o.jpg' },
		{ src: 'img/gallery/11034349_10152722399876720_8290169641430434626_o.jpg' },
		{ src: 'img/gallery/11069776_10152722398516720_4631862066560087048_o.jpg' },
		{ src: 'img/gallery/10475429_10152722397286720_2080517357449304704_o.jpg' },
		{ src: 'img/gallery/10842199_10152715491451720_5100350590123625911_o.jpg' },
		{ src: 'img/gallery/10987614_10152715421416720_4726384216116413572_o.jpg' },
		{ src: 'img/gallery/11043291_10152715420501720_5650898248247038971_o.jpg' },
		{ src: 'img/gallery/11026176_10152715419806720_649780211676363722_o.jpg' },
		{ src: 'img/gallery/10993138_10152715419666720_8766677126855461145_o.jpg' },
		{ src: 'img/gallery/10849073_10152715419086720_1237353140239566579_o.jpg' },
		{ src: 'img/gallery/11011206_10152715418701720_5591369258480914382_o.jpg' },
		{ src: 'img/gallery/10633260_10152715417621720_2900492823950973905_o.jpg' },
		{ src: 'img/gallery/10991460_10152715416431720_3277740267578601035_o.jpg' },
		{ src: 'img/gallery/10987614_10152715416286720_5988117110473479851_o.jpg' },
		{ src: 'img/gallery/11046801_10152715415796720_3300477720205666854_o.jpg' },
		{ src: 'img/gallery/10959063_10152715414391720_771311014879486828_o.jpg' },
		{ src: 'img/gallery/DSC_0688.jpg' },
        { src: 'img/gallery/10845599_10152714692081720_4459135119332897676_o.jpg' }
	];
}])

.directive('galleryImageLink', function() {
	return function(s, e, a) {
		if (s.$last){
			s.$emit('LastElem');
		}
	};
})

.directive('justifiedGallery', ['$timeout', function($timeout) {
	return {
		restrict: 'E',
		link: function(s, e, a) {
			s.$on('LastElem', function(event){
				$timeout(function () { 
					e.justifiedGallery({
						rowHeight : 150,
						lastRow : 'nojustify',
						margins : 3
					}); 
				});
			});
		}
	};
}]);