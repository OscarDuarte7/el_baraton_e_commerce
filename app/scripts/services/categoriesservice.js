'use strict';

/**
 * @ngdoc service
 * @name elBaratonECommerceApp.categoriesService
 * @description
 * # categoriesService
 * Factory in the elBaratonECommerceApp.
 */
angular.module('elBaratonECommerceApp')
  .factory('categoriesService', function ($http) {
    // Service logic
    // ...

    var path = 'scripts/models/categories.json';

    // Public API here
    return {
      get: function () {
        return $http.get(path);
      }
    };
  });

  /*
    $http.get("scripts/models/buttons.json").then(function (response) {
                    self.buttonsData = response.data;
  */ 