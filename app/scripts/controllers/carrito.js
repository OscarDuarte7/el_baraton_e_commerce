'use strict';

/**
 * @ngdoc function
 * @name elBaratonECommerceApp.controller:CarritoCtrl
 * @description
 * # CarritoCtrl
 * Controller of the elBaratonECommerceApp
 */
angular.module('elBaratonECommerceApp')
  .controller('CarritoCtrl', function (localStorageService, $route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    self = this;

    self.total = 0;

    self.carrito = localStorageService.getObject('carrito');

    if(!self.carrito.lista || self.carrito.lista.length==0){
      self.carrito.lista = [];
      swal({
       text: "No hay nada en el carrito",
        type: 'warning'
      });
     

    }

    self.eliminarProducto= function(elemento){

      self.carrito.lista.splice(elemento,1);
      localStorageService.setObject('carrito',self.carrito);
      self.carrito = localStorageService.getObject('carrito');
      self.calcularTotal();

    }

    self.editar = function(producto){

      if(producto.cantidad > 0 && producto.cantidad <= producto.producto.quantity){
        localStorageService.setObject('carrito',self.carrito);
        self.calcularTotal();

        swal({
          type: 'success',
          html: 'Se ha realizado el cambio'
        })
      }else{

        swal({
          type: 'warning',
          title: 'Ingrese la cantidad menor a ' + producto.producto.quantity
        }).then(function(result)
        { 
          
          self.carrito = localStorageService.getObject('carrito');
          $route.reload();
      });


      }
    }

    self.pagar = function(){

      self.lista = localStorageService.getObject('lista');


     for(var i=0; i<self.carrito.lista.length; i++){

      self.lista.products.filter(function(obj,index){
        if(obj.id == self.carrito.lista[i].producto.id){ 
         self.lista.products[index].quantity -= self.carrito.lista[i].cantidad ;
        }
      });

      swal({
        type: 'success',
        html: 'Ha realizado la compra éxito'
      })
        localStorageService.setObject('lista',self.lista);
        localStorageService.remove('carrito');
        self.carrito = localStorageService.getObject('carrito');
        self.total=0;

     }
    };


    self.calcularTotal = function(){
      self.total=0;

      for(var i=0; i<self.carrito.lista.length; i++){

        self.total += self.carrito.lista[i].cantidad * self.carrito.lista[i].producto.price;

      }

    };

    self.calcularTotal();

  });
