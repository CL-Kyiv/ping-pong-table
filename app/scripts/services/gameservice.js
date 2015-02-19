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
    var gameStats;
    var players;
    var ballsInSet, rankToWin;
    var startGame = function (gameParams) {
      var gameType = gameParams.gameType || _.first(gameTypes).value;
      players = gameParams.players;
      var firsPlayer = gameParams.firstPlayer || _.first(players);
      var gameRanks = {};
      _.each(players, function (player) {
        gameRanks[player] = 0;
      });
      switch (gameType) {
        case 'oneByOne' :
        {
          ballsInSet = 2;
          rankToWin = 11;
          break;
        }
        case 'twoByTwo' :
        {
          ballsInSet = 5;
          rankToWin = 21;
          break;
        }
      }
      gameStats = {
        turnNumber: 1,
        ballNumber: 1,
        ranks: gameRanks,
        currentTurn: firsPlayer
      };
      return gameStats;
    };
    var getNextPlayer = function (player) {
      return _.indexOf(players, player) === 0 ? players[1] : players[0];
    };
    var checkForWin = function (player) {
      return gameStats.ranks[player] >= rankToWin;
    }
    var addPoint = function (player) {
      gameStats.ranks[player] += 1;
      if (gameStats.ballNumber === ballsInSet) {
        gameStats.currentTurn = getNextPlayer(gameStats.currentTurn);
        gameStats.turnNumber += 1;
        gameStats.ballNumber = 1;
        return gameStats;
      }
      gameStats.ballNumber += 1;
      if (checkForWin(player)) {
        gameStats.winner = player;
      }
      return gameStats;
    };

    this.startGame = startGame;
    this.addPoint = addPoint;
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
