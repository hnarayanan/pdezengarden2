'use strict';

angular.module('pdezengardenApp')
  .factory('Pdes', function ($resource) {
      return $resource('http://localhost:8000/pdes', {}, {});
  });
