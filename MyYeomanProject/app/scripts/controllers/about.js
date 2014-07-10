'use strict';

/**
 * @ngdoc function
 * @name myYeomanProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myYeomanProjectApp
 */
angular.module('myYeomanProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
