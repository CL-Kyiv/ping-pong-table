'use strict';

/**
 * @ngdoc function
 * @name pingPongTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pingPongTableApp
 */
angular.module('pingPongTableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
