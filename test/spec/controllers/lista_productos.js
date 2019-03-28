'use strict';

describe('Controller: ListaProductosCtrl', function () {

  // load the controller's module
  beforeEach(module('elBaratonECommerceApp'));

  var ListaProductosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaProductosCtrl = $controller('ListaProductosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaProductosCtrl.awesomeThings.length).toBe(3);
  });
});
