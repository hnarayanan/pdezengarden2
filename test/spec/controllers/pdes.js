'use strict';

describe('Controller: PdesCtrl', function () {

  // load the controller's module
  beforeEach(module('pdezengardenApp'));

  var PdesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PdesCtrl = $controller('PdesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
