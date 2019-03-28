'use strict';

/**
 * @ngdoc service
 * @name elBaratonECommerceApp.productsService
 * @description
 * # productsService
 * Factory in the elBaratonECommerceApp.
 */
angular.module('elBaratonECommerceApp')
  .factory('productsService', function ($http) {
    // Service logic
    // ...


    var path = 'scripts/models/products.json';

    // Public API here
    return {
      get: function () {
        return $http.get(path);
      }
    };
  });
