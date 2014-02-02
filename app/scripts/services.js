'use strict';

var pdeServices = angular.module('pdeServices', ['ngResource']);

pdeServices.factory('Pdes', ['$resource',
  function($resource){
    return $resource('/data/pdes/pdes.json', {}, {});
  }]);
