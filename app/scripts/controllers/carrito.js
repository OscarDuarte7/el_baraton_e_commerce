'use strict';

/**
 * @ngdoc function
 * @name elBaratonECommerceApp.controller:CarritoCtrl
 * @description
 * # CarritoCtrl
 * Controller of the elBaratonECommerceApp
 */
angular.module('elBaratonECommerceApp')
  .controller('CarritoCtrl', function (localStorageService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
