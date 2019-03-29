'use strict';

/**
 * @ngdoc function
 * @name elBaratonECommerceApp.controller:ListaProductosCtrl
 * @description
 * # ListaProductosCtrl
 * Controller of the elBaratonECommerceApp
 */
angular.module('elBaratonECommerceApp')
  .controller('ListaProductosCtrl', function (productsService, $rootScope, localStorageService, $location, $route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;
    self.productos = [];
    self.nombre_categoria = "";
    self.cantidad =0;
    self.cdesde =0;

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

    self.lista = localStorageService.getObject('lista');

    if(self.lista.products){//si la lista está en el localStorage
      self.productos = self.lista.products.filter(function(obj,index){
        return obj.sublevel_id == $rootScope.sublevel;
      });

      self.nombre_categoria = $rootScope.name;
     

      for (var i = 0; i < self.productos.length; i++) {
        self.productos[i].price = parseInt(self.productos[i].price.replace("$","").replace(",",""));
        
      }

    }else{// si no está

      productsService.get().then(function(response){
        self.nombre_categoria = $rootScope.name;
        self.lista = response.data;
        localStorageService.setObject('lista',self.lista);
        self.productos = self.lista.products.filter(function(obj,index){
          return obj.sublevel_id == $rootScope.sublevel;
        });
  

        for (var i = 0; i < self.productos.length; i++) {
          self.productos[i].price = parseInt(self.productos[i].price.replace("$","").replace(",",""));
          
        }
  
  

  
      });



    }



//https://stackoverflow.com/questions/24859420/filter-for-number-range-angularjs
    self.porRango = function (fieldName, minValue, maxValue) {
      if (minValue === undefined) minValue = Number.MIN_VALUE;
      if (maxValue === undefined) maxValue = Number.MAX_VALUE;
    
      return function predicateFunc(item) {
        return minValue <= item[fieldName] && item[fieldName] <= maxValue;
      };
    };
  

//Metodo para agregar al carrito

    self.agregarCarrito = function (producto){

      self.carrito= localStorageService.getObject('carrito');
      if(self.carrito.lista){
      }else{
  
        self.carrito.lista = [];

  
      }

      swal({
        title: 'Ingrese la cantidad menor a ' + producto.quantity,
    showCancelButton: true,
    cancelButtonColor: '#d33',
     cancelButtonText: 'Cancelar',
       html:'<input type="number" id="cantidad" class="swal2-input" min="1" max="producto.quantity">' 
      }).then(function (result) {
  
        var c =  document.getElementById('cantidad').value;

        if(c > 0 && c <= producto.quantity){
          self.carrito.lista.push(
            {
              producto: producto,
              cantidad: parseInt(c)
            }
          );
          localStorageService.setObject('carrito', self.carrito);
        swal({
          type: 'success',
          html: 'Se ha agregado al carrito: ' + c
        })
      }else{
        self.agregarCarrito(producto);

      }

      }).catch(swal.noop);


     

    }

    self.eliminarFiltros = function(){

      $location.url('lista_productos');
      $route.reload();

    }

  });
