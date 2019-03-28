'use strict';

/**
 * @ngdoc overview
 * @name elBaratonECommerceApp
 * @description
 * # elBaratonECommerceApp
 *
 * Main module of the application.
 */
angular
  .module('elBaratonECommerceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree'
  ])
  .config(function ($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/lista_productos', {
        templateUrl: 'views/lista_productos.html',
        controller: 'ListaProductosCtrl',
        controllerAs: 'listaProductos'
      })
      .when('/carrito', {
        templateUrl: 'views/carrito.html',
        controller: 'CarritoCtrl',
        controllerAs: 'carrito'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope = {sublevel : 0,
                  name : ""};
  });;
