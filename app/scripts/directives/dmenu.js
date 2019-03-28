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
      template: '<li ng-repeat="item in dMenu"><d-menu-item></d-menu-item></li>',
      link: function(scope, elem) {
      }
    };
  });
