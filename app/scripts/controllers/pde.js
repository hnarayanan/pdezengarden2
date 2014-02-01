'use strict';

angular.module('pdezengardenApp')
  .controller('PdeCtrl', function($scope, $routeParams, $http) {
//      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
      $http.get('data/pdes/' + $routeParams.pdeId + '.json').success(function(data) {
          $scope.pde = data;
        });
    });
