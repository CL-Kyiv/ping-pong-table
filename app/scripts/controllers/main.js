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
    $scope.rank1 = $scope.rank2 = 0;

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
    $scope.startGame = function () {
      var gameParams = {
        gameType: $scope.selectedGameType,
        players: [$scope.player1, $scope.player2],
        firstPlayer: $scope.firstPlayer
    this.checkRank = function(player) {
      var rank = player === 'player1' ? this.rank1 : this.rank2;
      if(rank >= RANKFORWIN) {
        this.winner = player === 'player1' ? this.player1 : this.player2;;
      }
    }
      }
      GameService.startGame(gameParams);
      $scope.gameIsStarted = true;
      $scope.currentTurn = $scope.firstPlayer;
    }
    $scope.clearAll = function () {
      $scope.player1 = $scope.player2 = 'noname';
      $scope.rank1 = $scope.rank2 = 0;
    };
    //$scope.save = function (player) {
    //  var playerState = {};
    //  playerState.name = player === 'player1' ? $scope.player1 : $scope.player2;
    //  playerState.rank = player === 'player1' ? $scope.rank1 : $scope.rank2;
    //  playerState = JSON.stringify(playerState);
    //  localStorage.setItem(player, playerState);
    //}
    //$scope.load = function (player) {
    //  var loadedState = localStorage.getItem(player);
    //  loadedState = JSON.parse(loadedState);
    //  if (player === 'player1') {
    //    $scope.player1 = loadedState.name;
    //    $scope.rank1 = loadedState.rank;
    //  } else {
    //    $scope.player2 = loadedState.name;
    //    $scope.rank2 = loadedState.rank;
    //  }
    //}
    //$scope.hasSaved = function (player) {
    //  return _.indexOf(_.keys(localStorage), player) > -1;
    //}
    //$scope.clearLocalStorage = function () {
    //  localStorage.clear();
    //}
    //$scope.incrementRank = function (player, value) {
    //  if (player === 'player1') {
    //    $scope.rank1 += value;
    //  } else {
    //    $scope.rank2 += value;
    //  }
    //}
  });
