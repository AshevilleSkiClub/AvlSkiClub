'use strict';

angular.module('mean.asc', ['mean.system']).config(['$viewPathProvider', function($viewPathProvider) {
    $viewPathProvider.override('system/views/index.html', 'asc/views/index.html');
}]);