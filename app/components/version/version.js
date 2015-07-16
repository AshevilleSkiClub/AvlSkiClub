'use strict';

angular.module('asc.version', [
  'asc.version.interpolate-filter',
  'asc.version.version-directive'
])

.value('version', '0.1');
