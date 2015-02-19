'use strict';

/**
 * @ngdoc function
 * @name pingPongTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pingPongTableApp
 */
angular.module('pingPongTableApp')
  .controller('MainCtrl', function ($scope, gameTypes, GameService) {

    $scope.player1 = 'IgorP';
    $scope.player2 = 'IvanP';
    var ranks = {};
    ranks[$scope.player1] = ranks[$scope.player2] = 0;
    $scope.gameStats = {
      ranks: ranks
    };
    $scope.gameTypes = gameTypes;
    $scope.readyToStart = false;
    $scope.gameIsStarted = false;
    $scope.selectedGameType = _.first(gameTypes).value;
    $scope.firstPlayer = $scope.player1;
    $scope.$watch(function () {
      return $scope.player1 !== '' && $scope.player2 !== '';
    }, function (newVal) {
      $scope.readyToStart = newVal;
    });

    $scope.addPoint = function (player) {
      $scope.gameStats = GameService.addPoint(player);
    };

    $scope.restartGame = function () {

    };

    $scope.startGame = function () {
      var gameParams = {
        gameType: $scope.selectedGameType,
        players: [$scope.player1, $scope.player2],
        firstPlayer: $scope.firstPlayer
      }
      $scope.gameStats = GameService.startGame(gameParams);
      $scope.gameIsStarted = true;
    }
  });
