'use strict';
/**
 * @ngdoc service
 * @name pingPongTableApp.GameService
 * @description
 * # GameService
 * Service in the pingPongTableApp.
 */
angular.module('pingPongTableApp')
  .service('GameService', function (gameTypes) {
    var gameStats = {};
    var ballsInSet, rankToWin;
    var startGame = function (gameParams) {
      var gameType = gameParams.gameType || _.first(gameTypes).value;
      var players = gameParams.players;
      var firsPlayer = gameParams.firstPlayer || _.first(players);
      var gameRanks = {};
      _.each(players, function (player) {
        gameRanks[player] = 0;
      });
      switch (gameStats.gameType) {
        case 'oneByOne' : {
          ballsInSet = 2;
          rankToWin = 11;
          break;
        }
        case 'twoByTwo' : {
          ballsInSet = 5;
          rankToWin = 21;
          break;
        }
      }
      gameStats = {
        turnNumber: 1,
        ballNumber: 1,
        gameType: gameType,
        players: players,
        ranks: gameRanks,
        currentTurn: firsPlayer
      };
      return gameStats;
    };
    var getNextPlayer = function (player) {
      return _.indexOf(gameStats.players, player) === 0 ? gameStats.players[1] : gameStats.players[0];
    };
    var checkForWin = function (player) {
      return gameStats.ranks[player] >= rankToWin;
    }
    var addPoint = function (player) {
      gameStats.ranks[player] += 1;
      if(checkForWin(player)) {
        return player;
      }
      gameStats.ballNumber += 1;
      if(gameStats.ballNumber === ballsInSet) {
        gameStats.currentTurn = getNextPlayer(player);
        gameStats.turnNumber += 1;
        gameStats.ballNumber = 0;
      }
      return gameStats;
    };
    var removePoint = function (player) {
      gameStats.ranks[player] -= 1;
    };
    this.startGame = startGame;
    this.addPoint = addPoint;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
