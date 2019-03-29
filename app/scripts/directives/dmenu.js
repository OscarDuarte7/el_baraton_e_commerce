'use strict';

/**
 * @ngdoc directive
 * @name elBaratonECommerceApp.directive:dMenu
 * @description
 * # dMenu
 */
angular.module('elBaratonECommerceApp')
  .directive('dMenu', function () {
    return {
      scope : {
        dMenu : '=dMenu'
      },
      template: '<li  ng-repeat="item in dMenu"><a><d-menu-item></d-menu-item></a></li> ',
      link: function(scope, elem) {
      }
    };
  });
