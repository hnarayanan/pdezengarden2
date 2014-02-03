'use strict';

angular.module('pdezengardenApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/pdes', {
        templateUrl: 'views/pdes.html',
        controller: 'PdesCtrl'
      })
      .when('/pdes/:pdeId', {
        templateUrl: 'views/pde.html',
        controller: 'PdeCtrl'
      })
      .otherwise({
        redirectTo: '/pdes'
      });
  });
