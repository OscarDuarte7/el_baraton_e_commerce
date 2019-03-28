'use strict';

describe('Directive: dMenu', function () {

  // load the directive's module
  beforeEach(module('elBaratonECommerceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d-menu></d-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dMenu directive');
  }));
});
