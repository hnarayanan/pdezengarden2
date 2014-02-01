'use strict';

angular.module('pdezengardenApp')
  .controller('PdesCtrl', function ($scope, $http) {
      $http.get('http://localhost:8000/pdes/').success(function(data) {
          $scope.pdes = data;
        });
    });
