'use strict';

/* jshint -W098 */
angular.module('mean.asc').controller('AscController', ['$scope', 'Global', 'Asc',
  function($scope, Global, Asc) {
    $scope.global = Global;
    $scope.package = {
      name: 'asc'
    };
  }
]);
