angular.module('myApp.gallery').controller('ImageCtrl', ['$scope', '$modalInstance', 'imageSrc', function ($scope, $modalInstance, imageSrc) {
														 
  $scope.imageSrc = imageSrc;			

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);