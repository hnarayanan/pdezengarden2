'use strict';

angular.module('pdezengardenApp')
  .controller('PdesCtrl', function ($scope, Pdes) {
      $scope.pdes = Pdes.query();
    });
