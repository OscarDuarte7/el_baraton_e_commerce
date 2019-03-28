'use strict';

/**
 * @ngdoc function
 * @name elBaratonECommerceApp.controller:ListaProductosCtrl
 * @description
 * # ListaProductosCtrl
 * Controller of the elBaratonECommerceApp
 */
angular.module('elBaratonECommerceApp')
  .controller('ListaProductosCtrl', function (productsService, $rootScope, localStorageService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;
    self.productos = [];
    self.nombre_categoria = "";

    self.orden = [
                  {
                  id: "price",
                  nombre: "Precio: Menor a mayor" },
                  {
                  id: "-price",
                  nombre: "Precio: Mayor a menor" },
                  {
                    id: "available",
                    nombre: "Disponibilidad"
                  },
                  {
                    id: "quantity",
                    nombre: "Cantidad: Menor a mayor"
                  },
                  {
                    id: "-quantity",
                    nombre: "Cantidad: Mayor a menor"
                  }];

    productsService.get().then(function(response){
      self.nombre_categoria = $rootScope.name;
      self.productos = response.data.products.filter(function(obj,index){
        return obj.sublevel_id == $rootScope.sublevel;
      });

      for (var i = 0; i < self.productos.length; i++) {
        self.productos[i].price = parseInt(self.productos[i].price.replace("$","").replace(",",""));
        
      }
      console.log(self.productos);


      /*var result = list.filter(function(obj, index){
  return obj.type==='ar';
}) */

    });

//https://stackoverflow.com/questions/24859420/filter-for-number-range-angularjs
    self.porRango = function (fieldName, minValue, maxValue) {
      if (minValue === undefined) minValue = Number.MIN_VALUE;
      if (maxValue === undefined) maxValue = Number.MAX_VALUE;
    
      return function predicateFunc(item) {
        return minValue <= item[fieldName] && item[fieldName] <= maxValue;
      };
    };

  });
