'use strict';

angular.module('pdezengardenApp')
  .factory('Pdes', function ($resource) {
      return $resource('http://localhost:8000/pdes/:pdeId', {}, {});
    });

angular.module('pdezengardenApp')
  .factory('Pde', function ($resource) {
      return $resource('http://localhost:8000/pdes/:pdeId', {}, {
        query: { params: { pdeId:'' } }
      });
    });
