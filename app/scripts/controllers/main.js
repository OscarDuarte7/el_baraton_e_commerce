'use strict';

/**
 * @ngdoc function
 * @name elBaratonECommerceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elBaratonECommerceApp
 */
angular.module('elBaratonECommerceApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;
   /* categoriesService.get().then(function(response){
      self.menu = response.data.categories;
      console.log(self.menu);
    });*/

  });
