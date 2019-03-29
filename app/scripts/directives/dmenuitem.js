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
      template: '<li class="dropdown-submenu"><a class="test" href ng-bind="item.name" ng-click="show($event)"><span class="caret"></span></a></li>',
      link: function(scope, element) {

      /*  $('.dropdown-submenu a.test').on("click", function(e){
          $(this).next('ul').toggle();
          e.stopPropagation();
          e.preventDefault();
        });*/

        if (angular.isArray(scope.item.sublevels)) {
              element.append($compile('<ul  d-menu="item.sublevels"><a></a></ul>')(scope));
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
