'use strict';

/**
 * @ngdoc function
 * @name pingPongTableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pingPongTableApp
 */
angular.module('pingPongTableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
