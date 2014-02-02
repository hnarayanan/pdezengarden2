'use strict';

angular.module('pdezengardenApp')
  .controller('PdesCtrl', function ($scope, $log, Pdes) {
      $scope.pdes = Pdes.query();
    });
