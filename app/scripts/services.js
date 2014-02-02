'use strict';

var pdeServices = angular.module('pdeServices', ['ngResource']);

pdeServices.factory('Pdes', ['$resource',
  function($resource){
    return $resource('http://localhost:8000/pdes', {}, {});
  }]);
