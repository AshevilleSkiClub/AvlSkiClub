'use strict';

angular.module('mean.asc').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('asc example page', {
      url: '/asc/example',
      templateUrl: 'asc/views/index.html'
    });
  }
]);
