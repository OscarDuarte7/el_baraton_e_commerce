'use strict';

describe('Service: productsService', function () {

  // load the service's module
  beforeEach(module('elBaratonECommerceApp'));

  // instantiate service
  var productsService;
  beforeEach(inject(function (_productsService_) {
    productsService = _productsService_;
  }));

  it('should do something', function () {
    expect(!!productsService).toBe(true);
  });

});
