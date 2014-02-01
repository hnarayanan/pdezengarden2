'use strict';

angular.module('pdezengardenApp')
  .controller('PdesCtrl', function ($scope, $http) {
      $http.get('data/pdes/pdes.json').success(function(data) {
          $scope.pdes = data;
        });
    });
