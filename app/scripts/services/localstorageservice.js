'use strict';

/**
 * @ngdoc service
 * @name elBaratonECommerceApp.localStorageService
 * @description
 * # localStorageService
 * Factory in the elBaratonECommerceApp.
 */
//https://stackoverflow.com/questions/32486871/angularjs-use-local-storage
angular.module('elBaratonECommerceApp')
  .factory('localStorageService', function ($window) {
    // Service logic
    // ...

    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      remove: function(key){
        $window.localStorage.removeItem(key);
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      }
    };

  });
