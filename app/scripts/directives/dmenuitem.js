'use strict';

/**
 * @ngdoc directive
 * @name elBaratonECommerceApp.directive:dMenuItem
 * @description
 * # dMenuItem
 */
angular.module('elBaratonECommerceApp')
  .directive('dMenuItem', function ($compile, $rootScope,$route, $location) {
    return {
      template: '<a  ng-bind="item.name" ng-click="show()"></a>',
      link: function(scope, element) {
        if (angular.isArray(scope.item.sublevels)) {
              element.append($compile('<ul ng-if="collapsed" d-menu="item.sublevels"></ul>')(scope));
              scope.show = function() {
                scope.collapsed = !scope.collapsed;
              };
        }
        else{
          scope.show = function() {
           $rootScope.sublevel =  scope.item.id;
           $rootScope.name = scope.item.name;
           $location.url('lista_productos')
           $route.reload();
          };

        }

      }
    };
  });
