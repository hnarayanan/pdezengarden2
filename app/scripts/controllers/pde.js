'use strict';

angular.module('pdezengardenApp')
  .controller('PdeCtrl', function($scope, $routeParams, Pde) {
//      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
      $scope.pde = Pde.get({pdeId: $routeParams.pdeId});
   });
