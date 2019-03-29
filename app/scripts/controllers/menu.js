'use strict';

/**
 * @ngdoc function
 * @name elBaratonECommerceApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the elBaratonECommerceApp
 */
angular.module('elBaratonECommerceApp')
  .controller('MenuCtrl', function (categoriesService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;

    // self.menu = {};
 
     categoriesService.get().then(function(response){
       self.menu = response.data.categories;
     });
  });
